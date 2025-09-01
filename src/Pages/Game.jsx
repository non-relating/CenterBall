
import React, { useState, useEffect, useRef, useCallback } from "react";
import { Game } from "@/entities/Game";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowLeft, RotateCcw, Trophy, Target, Zap, Crown } from "lucide-react";
import * as THREE from "three";
import GameTable from "../components/game/GameTable";
import ScorePanel from "../components/game/ScorePanel";
import GameControls from "../components/game/GameControls";

export default function GamePage() {
  const navigate = useNavigate();
  const [currentGame, setCurrentGame] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedBall, setSelectedBall] = useState(null);
  const [aimDirection, setAimDirection] = useState({ x: 0, y: 0 });
  const [aimPower, setAimPower] = useState(0);
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
  }, [navigate]); // navigate is a dependency

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const gameId = urlParams.get('id');
    if (gameId) {
      loadGame(gameId);
    } else {
      navigate(createPageUrl("Home"));
    }
  }, [navigate, loadGame]); // loadGame is now a dependency since it's a useCallback

  const calculateScore = useCallback((ballPositions) => {
    if (!ballPositions) return { player1: 0, player2: 0 };
    
    let player1Score = 0;
    let player2Score = 0;
    
    const centerX = ballPositions.center_ball.x;
    const centerY = ballPositions.center_ball.y;
    const centerRingRadius = 50; // pixels
    
    // Check if center ball is in center ring
    const centerBallInRing = Math.sqrt(centerX ** 2 + centerY ** 2) <= centerRingRadius;
    
    // Collect all active balls with distances
    const player1Balls = ballPositions.player1_balls.filter(b => b.active).map(ball => ({
      ...ball,
      distance: Math.sqrt((ball.x - centerX) ** 2 + (ball.y - centerY) ** 2),
      player: 1
    }));
    
    const player2Balls = ballPositions.player2_balls.filter(b => b.active).map(ball => ({
      ...ball,
      distance: Math.sqrt((ball.x - centerX) ** 2 + (ball.y - centerY) ** 2),
      player: 2
    }));
    
    const allBalls = [...player1Balls, ...player2Balls];
    
    // Check for 3 points: touching center ball AND both balls in center ring
    [...player1Balls, ...player2Balls].forEach(ball => {
      const touchingCenter = ball.distance <= 16; // ball radius + center ball radius (assuming 8 each)
      const ballInRing = Math.sqrt(ball.x ** 2 + ball.y ** 2) <= centerRingRadius;
      
      if (touchingCenter && ballInRing && centerBallInRing) {
        if (ball.player === 1) player1Score += 3;
        else player2Score += 3;
      }
    });
    
    // Check for 2 points: ball in center ring NOT touching center ball
    [...player1Balls, ...player2Balls].forEach(ball => {
      const touchingCenter = ball.distance <= 16;
      const ballInRing = Math.sqrt(ball.x ** 2 + ball.y ** 2) <= centerRingRadius;
      
      if (ballInRing && !touchingCenter) {
        if (ball.player === 1) player1Score += 2;
        else player2Score += 2;
      }
    });
    
    // Find closest ball outside ring for 1 point
    const ballsOutsideRing = allBalls.filter(ball => {
      const ballInRing = Math.sqrt(ball.x ** 2 + ball.y ** 2) <= centerRingRadius;
      return !ballInRing;
    });
    
    if (ballsOutsideRing.length > 0) {
      const closest = ballsOutsideRing.reduce((closest, ball) => {
        return ball.distance < closest.distance ? ball : closest;
      });
      
      if (closest.player === 1) player1Score += 1;
      else player2Score += 1;
    }
    
    return { player1: player1Score, player2: player2Score };
  }, []); // No external dependencies, only uses its arguments and constants

  const handleBallMove = useCallback(async (ballId, newPosition, isPlayer1) => {
    if (!currentGame) return;
    
    try {
      const updatedBallPositions = { ...currentGame.ball_positions };
      
      if (isPlayer1) {
        const ballIndex = updatedBallPositions.player1_balls.findIndex(b => b.id === ballId);
        if (ballIndex !== -1) {
          updatedBallPositions.player1_balls[ballIndex] = { ...updatedBallPositions.player1_balls[ballIndex], ...newPosition };
        }
      } else {
        const ballIndex = updatedBallPositions.player2_balls.findIndex(b => b.id === ballId);
        if (ballIndex !== -1) {
          updatedBallPositions.player2_balls[ballIndex] = { ...updatedBallPositions.player2_balls[ballIndex], ...newPosition };
        }
      }
      
      // Switch turns
      const nextTurn = currentGame.current_turn === 1 ? 2 : 1;
      const nextPlayer = nextTurn === 1 ? currentGame.player1_name : currentGame.player2_name;
      
      // Check if all balls for the current player have been played
      const currentPlayerBalls = isPlayer1 ? updatedBallPositions.player1_balls : updatedBallPositions.player2_balls;
      const currentPlayerBallsPlayed = currentPlayerBalls.filter(b => b.active && (isPlayer1 ? b.y < 200 : b.y > -200)).length;
      
      // Check if all balls for the next player have been played
      const nextPlayerBalls = !isPlayer1 ? updatedBallPositions.player1_balls : updatedBallPositions.player2_balls;
      const nextPlayerBallsPlayed = nextPlayerBalls.filter(b => b.active && (!isPlayer1 ? b.y < 200 : b.y > -200)).length;
      
      const roundComplete = currentPlayerBallsPlayed === 5 && nextPlayerBallsPlayed === 5;
      
      // Calculate new scores
      const scores = calculateScore(updatedBallPositions);
      
      // Check for game end
      const gameEnded = scores.player1 >= currentGame.target_score || scores.player2 >= currentGame.target_score;
      const winner = scores.player1 >= currentGame.target_score ? currentGame.player1_name : 
                    scores.player2 >= currentGame.target_score ? currentGame.player2_name : null;
      
      let updateData = {
        ball_positions: updatedBallPositions,
        player1_score: scores.player1,
        player2_score: scores.player2,
        current_turn: nextTurn,
        ...(gameEnded ? { game_status: "finished", winner } : {})
      };
      
      // Reset balls if round is complete and game not ended
      if (roundComplete && !gameEnded) {
        updateData.ball_positions = {
          center_ball: { x: 0, y: 0, active: true },
          player1_balls: Array.from({length: 5}, (_, i) => ({ x: 0, y: 250 + i * 15, active: true, id: i + 1 })),
          player2_balls: Array.from({length: 5}, (_, i) => ({ x: 0, y: -250 - i * 15, active: true, id: i + 1 }))
        };
        updateData.round_number = (currentGame.round_number || 1) + 1;
        // The player who scored last (or a default) should start the next round.
        // For now, we'll have player 1 start the new round.
        updateData.current_turn = 1; 
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
  }, [currentGame, calculateScore]);

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
        center_ball: { x: 0, y: 0, active: true },
        player1_balls: Array.from({length: 5}, (_, i) => ({ x: 0, y: 250 + i * 15, active: true, id: i + 1 })),
        player2_balls: Array.from({length: 5}, (_, i) => ({ x: 0, y: -250 - i * 15, active: true, id: i + 1 }))
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-2">
              <Target className="w-8 h-8 text-cyan-400" />
              {currentGame.game_name}
            </h1>
            <p className="text-slate-400 mt-1">{currentGame.player1_name} vs {currentGame.player2_name}</p>
          </div>
          
          <div className="flex gap-2">
            <Button 
              onClick={resetGame}
              variant="outline"
              className="border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/10"
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              Reset Game
            </Button>
            <Button 
              onClick={() => navigate(createPageUrl("Home"))}
              variant="outline"
              className="border-slate-500/30 text-slate-300 hover:bg-slate-500/10"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Leave Game
            </Button>
          </div>
        </div>

        {/* Game Message */}
        {gameMessage && (
          <div className="mb-6 p-4 bg-cyan-500/10 border border-cyan-400/20 rounded-xl text-center">
            <p className="text-cyan-300 font-medium">{gameMessage}</p>
          </div>
        )}

        {/* Main Game Area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Panel - Score and Controls */}
          <div className="lg:col-span-1 space-y-6">
            <ScorePanel 
              player1Name={currentGame.player1_name}
              player2Name={currentGame.player2_name}
              player1Score={currentGame.player1_score}
              player2Score={currentGame.player2_score}
              targetScore={currentGame.target_score}
              currentTurn={currentGame.current_turn}
              roundNumber={currentGame.round_number || 1}
            />
            
            <GameControls 
              currentTurn={currentGame.current_turn}
              player1Name={currentGame.player1_name}
              player2Name={currentGame.player2_name}
              isGameFinished={currentGame.game_status === "finished"}
            />
          </div>

          {/* Center Panel - Game Table */}
          <div className="lg:col-span-2">
            <div className="glass-panel rounded-2xl p-4 md:p-6">
              <GameTable 
                ballPositions={currentGame.ball_positions}
                onBallMove={handleBallMove}
                currentTurn={currentGame.current_turn}
                isGameFinished={currentGame.game_status === "finished"}
                selectedBall={selectedBall}
                setSelectedBall={setSelectedBall}
                aimDirection={aimDirection}
                setAimDirection={setAimDirection}
                aimPower={aimPower}
                setAimPower={setAimPower}
                isAiming={isAiming}
                setIsAiming={setIsAiming}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
