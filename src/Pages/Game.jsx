
import React, { useState, useEffect, useCallback } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Game } from "@/entities";
import { createPageUrl } from "@/utils";
import GameTable from "@/Components/game/GameTable";
import ScorePanel from "@/Components/game/ScorePanel";
import GameControls from "@/Components/game/GameControls";
import { Button } from "@/Components/ui/button";
import { Trophy, ArrowLeft, RotateCcw } from "lucide-react";

export default function GamePage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [currentGame, setCurrentGame] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedBall, setSelectedBall] = useState(null);
  const [aimData, setAimData] = useState({ angle: 0, power: 50 });
  const [isAiming, setIsAiming] = useState(false);
  const [gameMessage, setGameMessage] = useState("");

  const loadGame = useCallback(async (gameId) => {
    setIsLoading(true);
    try {
      const game = await Game.get(gameId);
      setCurrentGame(game);
      
      if (game.game_status === "setup") {
        setGameMessage(`${game.player1_name} goes first!`);
        await Game.update(gameId, { game_status: "playing" });
        setCurrentGame(prev => ({ ...prev, game_status: "playing" }));
      } else if (game.game_status === "playing") {
        const currentPlayer = game.current_turn === 1 ? game.player1_name : game.player2_name;
        setGameMessage(`${currentPlayer}'s turn`);
      }
    } catch (error) {
      console.error("Error loading game:", error);
      navigate(createPageUrl("Home"));
    }
    setIsLoading(false);
  }, [navigate]);

  useEffect(() => {
    const gameId = searchParams.get('id');
    if (gameId) {
      loadGame(gameId);
    } else {
      navigate(createPageUrl("Home"));
    }
  }, [searchParams, navigate, loadGame]);

  const calculateScore = useCallback((ballPositions) => {
    if (!ballPositions) return { player1: 0, player2: 0 };
    
    let player1Score = 0;
    let player2Score = 0;
    
    const centerRingRadius = 2.5; // Corresponds to the 3D table size
    
    // Center ball is always at {x: 0, z: 0} in its local space, but we check its position relative to the board center.
    const centerBallInRing = Math.sqrt(ballPositions.center_ball.x ** 2 + ballPositions.center_ball.z ** 2) <= centerRingRadius;

    const getBallData = (balls, player) => 
      balls.filter(b => b.active).map(ball => ({
        ...ball,
        distance: Math.sqrt((ball.x - ballPositions.center_ball.x) ** 2 + (ball.z - ballPositions.center_ball.z) ** 2),
        distanceFromCenter: Math.sqrt(ball.x ** 2 + ball.z ** 2),
        player
      }));

    const player1Balls = getBallData(ballPositions.player1_balls, 1);
    const player2Balls = getBallData(ballPositions.player2_balls, 2);
    const allBalls = [...player1Balls, ...player2Balls];

    // 3 points: touching center ball AND both balls in center ring
    allBalls.forEach(ball => {
      const touchingCenter = ball.distance <= 0.8; // ball radius (0.4) + center ball radius (0.4)
      if (touchingCenter && ball.distanceFromCenter <= centerRingRadius && centerBallInRing) {
        if (ball.player === 1) player1Score += 3;
        else player2Score += 3;
      }
    });

    // 2 points: ball in center ring NOT touching center ball
    allBalls.forEach(ball => {
      const touchingCenter = ball.distance <= 0.8;
      if (!touchingCenter && ball.distanceFromCenter <= centerRingRadius) {
        if (ball.player === 1) player1Score += 2;
        else player2Score += 2;
      }
    });

    // 1 point: closest ball outside the ring
    const ballsOutsideRing = allBalls.filter(ball => ball.distanceFromCenter > centerRingRadius);
    if (ballsOutsideRing.length > 0) {
      const closest = ballsOutsideRing.reduce((closest, ball) => 
        ball.distance < closest.distance ? ball : closest
      );
      if (closest.player === 1) player1Score += 1;
      else player2Score += 1;
    }
    
    return { player1: player1Score, player2: player2Score };
  }, []);

  const handleShoot = useCallback(async ({ angle, power }) => {
    if (!currentGame || !selectedBall) return;

    const radians = (angle * Math.PI) / 180;
    const force = (power / 100) * 15; // Max force of 15

    const initialVelocity = {
      x: Math.sin(radians) * force,
      y: 0,
      z: Math.cos(radians) * force,
    };

    // This is a placeholder for a proper physics simulation.
    // We'll simulate a simple shot: the ball moves and stops.
    // A real implementation would use a physics engine loop.
    const finalPosition = {
      x: selectedBall.x + initialVelocity.x * 0.5, // Simplified movement
      y: selectedBall.y,
      z: selectedBall.z + initialVelocity.z * 0.5,
    };

    setIsAiming(false);
    setSelectedBall(null);

    try {
      const updatedBallPositions = JSON.parse(JSON.stringify(currentGame.ball_positions));
      const isPlayer1 = selectedBall.isPlayer1;
      
      const ballList = isPlayer1 ? updatedBallPositions.player1_balls : updatedBallPositions.player2_balls;
      const ballIndex = ballList.findIndex(b => b.id === selectedBall.id);
      
      if (ballIndex !== -1) {
        ballList[ballIndex].x = finalPosition.x;
        ballList[ballIndex].z = finalPosition.z; // Use z for 3D space
        ballList[ballIndex].active = false; // Mark ball as played for this turn
      }

      const nextTurn = currentGame.current_turn === 1 ? 2 : 1;
      const nextPlayer = nextTurn === 1 ? currentGame.player1_name : currentGame.player2_name;

      const allPlayer1BallsPlayed = updatedBallPositions.player1_balls.every(b => !b.active);
      const allPlayer2BallsPlayed = updatedBallPositions.player2_balls.every(b => !b.active);
      const roundComplete = allPlayer1BallsPlayed && allPlayer2BallsPlayed;

      const scores = calculateScore(updatedBallPositions);
      const gameEnded = scores.player1 >= currentGame.target_score || scores.player2 >= currentGame.target_score;
      const winner = gameEnded 
        ? (scores.player1 >= currentGame.target_score ? currentGame.player1_name : currentGame.player2_name) 
        : null;

      let updateData = {
        ball_positions: updatedBallPositions,
        player1_score: scores.player1,
        player2_score: scores.player2,
        current_turn: nextTurn,
        ...(gameEnded && { game_status: "finished", winner }),
      };

      if (roundComplete && !gameEnded) {
        updateData.ball_positions = {
          center_ball: { x: 0, y: 0.4, z: 0 },
          player1_balls: Array.from({length: 5}, (_, i) => ({ x: 0, y: 0.4, z: 2.5 + i * 0.3, active: true, id: i + 1 })),
          player2_balls: Array.from({length: 5}, (_, i) => ({ x: 0, y: 0.4, z: -2.5 - i * 0.3, active: true, id: i + 1 }))
        };
        updateData.round_number = (currentGame.round_number || 1) + 1;
        updateData.current_turn = 1; // Player 1 starts the next round
      }

      await Game.update(currentGame.id, updateData);
      setCurrentGame(prev => ({ ...prev, ...updateData }));
      
      if (gameEnded) {
        setGameMessage(`🎉 ${winner} wins the game!`);
      } else if (roundComplete) {
        const nextRoundPlayer = updateData.current_turn === 1 ? currentGame.player1_name : currentGame.player2_name;
        setGameMessage(`Round complete! ${nextRoundPlayer} starts round ${updateData.round_number}.`);
      } else {
        setGameMessage(`${nextPlayer}'s turn`);
      }
    } catch (error) {
      console.error("Error updating game:", error);
    }
  }, [currentGame, selectedBall, calculateScore]);

  const handleBallSelect = (ball, isPlayer1) => {
    if (isAiming) return;
    if (currentGame.current_turn !== (isPlayer1 ? 1 : 2)) return;
    
    setSelectedBall({ ...ball, isPlayer1 });
    setIsAiming(true);
  };

  const resetGame = async () => {
    if (!currentGame) return;
    
    const resetData = {
      player1_score: 0,
      player2_score: 0,
      current_turn: 1,
      game_status: "playing",
      winner: null,
      round_number: 1, // Reset to round 1 explicitly
      ball_positions: {
        center_ball: { x: 0, y: 0.4, z: 0 },
        player1_balls: Array.from({length: 5}, (_, i) => ({ x: 0, y: 0.4, z: 2.5 + i * 0.3, active: true, id: i + 1 })),
        player2_balls: Array.from({length: 5}, (_, i) => ({ x: 0, y: 0.4, z: -2.5 - i * 0.3, active: true, id: i + 1 }))
      }
    };
    
    try {
      await Game.update(currentGame.id, resetData);
      setCurrentGame(prev => ({ ...prev, ...resetData }));
      setGameMessage(`${currentGame.player1_name} goes first!`);
    } catch (error) {
      console.error("Error resetting game:", error);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="glass-panel rounded-2xl p-8 text-center">
          <div className="w-16 h-16 border-4 border-cyan-400/20 border-t-cyan-400 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white text-lg">Loading game...</p>
        </div>
      </div>
    );
  }

  if (!currentGame) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="glass-panel rounded-2xl p-8 text-center max-w-md mx-4">
          <Trophy className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-2">Game Not Found</h2>
          <p className="text-slate-300 mb-6">The game you're looking for doesn't exist or has been removed.</p>
          <Button 
            onClick={() => navigate(createPageUrl("Home"))}
            className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col p-3 md:p-8 bg-gradient-to-br from-slate-900 to-slate-800 text-white safe-bottom">
      {/* Header */}
      <header className="flex items-center justify-between mb-4 flex-wrap gap-4">
        <Button onClick={() => navigate(createPageUrl("Home"))} variant="ghost" className="text-slate-300 hover:text-white hover:bg-slate-700">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Lobby
        </Button>
        <h1 className="text-2xl font-bold text-center bg-gradient-to-r from-cyan-400 via-magenta-500 to-yellow-400 bg-clip-text text-transparent order-first sm:order-none w-full sm:w-auto">
          CenterBall
        </h1>
        <Button onClick={resetGame} variant="outline" className="text-slate-300 border-slate-600 hover:bg-slate-700 hover:text-white">
          <RotateCcw className="w-4 h-4 mr-2" />
          Reset Game
        </Button>
      </header>

      {/* Main Content - mobile-first stacked layout */}
      <div className="flex-grow flex flex-col gap-4">
        {/* Game Area (top) */}
        <div className="w-full glass-panel rounded-2xl overflow-hidden relative game-full-mobile">
          <GameTable 
            ballPositions={currentGame.ball_positions}
            onBallSelect={handleBallSelect}
            selectedBall={selectedBall}
            currentTurn={currentGame.current_turn}
          />
        </div>

        {/* Score and status (below) */}
        <div className="w-full glass-panel rounded-2xl p-4 flex flex-col">
          <ScorePanel game={currentGame} />
          <div className="mt-3 pt-3 border-t border-slate-700">
              <h3 className="text-lg font-semibold mb-2 text-center">Game Status</h3>
              <p className="text-center text-cyan-300 font-medium h-12 flex items-center justify-center">{gameMessage}</p>
          </div>
        </div>

        {/* Controls - bottom safe area, large touch targets */}
        {isAiming && selectedBall && (
          <div className="w-full fixed bottom-0 left-0 right-0 p-3 bg-slate-900/80 backdrop-blur-sm border-t border-slate-700 safe-bottom">
            <div className="max-w-3xl mx-auto">
              <GameControls
                game={currentGame}
                selectedBall={selectedBall}
                onAimChange={(d) => setAimData(d)}
                onShoot={handleShoot}
                onCancel={() => {
                  setIsAiming(false);
                  setSelectedBall(null);
                }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
