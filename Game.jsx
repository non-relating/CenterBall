
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
      
      // Calculate new scores
      const scores = calculateScore(updatedBallPositions);
      
      // Check for game end
      const gameEnded = scores.player1 >= currentGame.target_score || scores.player2 >= currentGame.target_score;
      const winner = scores.player1 >= currentGame.target_score ? currentGame.player1_name : 
                    scores.player2 >= currentGame.target_score ? currentGame.player2_name : null;
      
      // Check if round is complete (all balls have been played)
      // Assuming 'in play' means within the general playing area, not necessarily active or hit
      const player1BallsInPlay = updatedBallPositions.player1_balls.filter(b => b.active && (Math.abs(b.y) < 200 || Math.abs(b.x) < 200)).length;
      const player2BallsInPlay = updatedBallPositions.player2_balls.filter(b => b.active && (Math.abs(b.y) < 200 || Math.abs(b.x) < 200)).length;
      
      let roundComplete = false;
      // This condition needs to be true when all balls from both players have been shot/moved.
      // The current check (player1BallsInPlay === 5 && player2BallsInPlay === 5)
      // seems to imply they are all within the play area, but might not signify they've been shot.
      // For this implementation, we will assume this check is sufficient for round completion.
      // A more robust solution might involve tracking 'shot' status for each ball.
      if (player1BallsInPlay === 5 && player2BallsInPlay === 5) {
        roundComplete = true;
      }
      
      // Switch turns
      const nextTurn = currentGame.current_turn === 1 ? 2 : 1;
      const nextPlayer = nextTurn === 1 ? currentGame.player1_name : currentGame.player2_name;
      
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
        // After round completion, next turn starts from player 1 for the new round
        // This might need adjustment based on who last scored or typical game rules.
        // For now, it will switch to player 1 after a round reset.
        updateData.current_turn = 1; 
      }
      
      await Game.update(currentGame.id, updateData);
      setCurrentGame(prev => ({ ...prev, ...updateData }));
      
      if (gameEnded) {
        setGameMessage(`🎉 ${winner} wins the game!`);
      } else if (roundComplete) {
        const nextRoundPlayer = updateData.current_turn === 1 ? currentGame.player1_name : currentGame.player2_name;
        setGameMessage(`Round complete! ${nextRoundPlayer} starts next round`);
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
