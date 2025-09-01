
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Target, Users, Crown, Disc3 } from "lucide-react";

export default function ScorePanel({ game }) {
  if (!game) return null;

  const isGameFinished = game.game_status === "finished";
  const currentPlayerTurn = game.current_turn === 1 ? game.player1_name : game.player2_name;

  return (
    <div className="space-y-4 h-full">
      {/* Game Status */}
      <div className="glass-panel rounded-2xl p-4">
        <div className="text-center">
          {isGameFinished ? (
            <div>
              <Crown className="w-8 h-8 text-yellow-400 mx-auto mb-2 neon-glow" />
              <p className="text-yellow-400 font-bold text-lg">{game.winner} Wins!</p>
              <p className="text-gray-300 text-sm">Game Complete</p>
            </div>
          ) : (
            <div>
              <Target className="w-6 h-6 text-cyan-400 mx-auto mb-2" /> {/* Changed from Users to Target */}
              <p className="text-white font-medium">{currentPlayerTurn}</p>
              <p className="text-gray-300 text-sm">Your Turn</p>
            </div>
          )}
        </div>
      </div>

      {/* Scores */}
      <div className="glass-panel rounded-2xl p-4">
        <CardHeader className="p-0 mb-4">
          <CardTitle className="flex items-center gap-2 text-white">
            <Trophy className="w-5 h-5 text-yellow-400" />
            Score
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0 space-y-4">
          {/* Player 1 */}
          <div className={`glass-panel rounded-xl p-3 ${game.current_turn === 1 ? 'border-red-400/50' : ''}`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-red-400"></div>
                <span className="text-white font-medium">{game.player1_name}</span>
              </div>
              <div className="text-2xl font-bold text-red-400">
                {game.player1_score}
              </div>
            </div>
          </div>

          {/* Player 2 */}
          <div className={`glass-panel rounded-xl p-3 ${game.current_turn === 2 ? 'border-blue-400/50' : ''}`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-blue-400"></div>
                <span className="text-white font-medium">{game.player2_name}</span>
              </div>
              <div className="text-2xl font-bold text-blue-400">
                {game.player2_score}
              </div>
            </div>
          </div>

          {/* Target Score */}
          <div className="text-center pt-2 border-t border-white/10">
            <Badge variant="outline" className="border-gray-400/30 text-gray-300">
              <Target className="w-3 h-3 mr-1" />
              First to {game.target_score}
            </Badge>
          </div>
        </CardContent>
      </div>

      {/* Current Ball */}
      <div className="glass-panel rounded-2xl p-4">
        <CardHeader className="p-0 mb-2">
          <CardTitle className="flex items-center gap-2 text-white text-lg">
            <Disc3 className="w-5 h-5 text-gray-300" />
            Current Ball
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="flex items-center justify-center gap-2">
            <div className={`w-8 h-8 rounded-full ${game.current_turn === 1 ? 'bg-red-500' : 'bg-blue-500'} border-2 border-white/50 shadow-lg`}></div>
            <span className="text-gray-300 text-sm">Ready to play</span>
          </div>
        </CardContent>
      </div>

      {/* Updated Scoring Rules */}
      <div className="glass-panel rounded-2xl p-4">
        <CardHeader className="p-0 mb-4">
          <CardTitle className="text-white text-lg">CenterBall Rules</CardTitle>
        </CardHeader>
        <CardContent className="p-0 space-y-3">
          <div className="text-xs text-gray-300 space-y-2">
            <div className="flex items-center justify-between">
              <span>Touch center + both in ring</span>
              <Badge className="bg-green-400/20 text-green-400 border-green-400/30">3 pts</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span>In ring, not touching center</span>
              <Badge className="bg-yellow-400/20 text-yellow-400 border-yellow-400/30">2 pts</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span>Closest outside ring</span>
              <Badge className="bg-blue-400/20 text-blue-400 border-blue-400/30">1 pt</Badge>
            </div>
          </div>
        </CardContent>
      </div>

      {/* Barriers Info */}
      <div className="glass-panel rounded-2xl p-4">
        <CardHeader className="p-0 mb-4">
          <CardTitle className="text-white text-lg">Arena Rules</CardTitle>
        </CardHeader>
        <CardContent className="p-0 space-y-2 text-xs text-gray-300">
          <p>• Balls must stay behind start barriers</p>
          <p>• Once past barrier, balls are in play</p>
          <p>• In-play balls can only be moved by collisions</p>
          <p>• All balls reset after each round</p>
        </CardContent>
      </div>

      {/* Game Info */}
      <div className="glass-panel rounded-2xl p-4">
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-300">Round:</span>
            <span className="text-white font-medium">{game.round_number || 1}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-300">Mode:</span>
            <Badge variant="outline" className={`border-gray-400/30 text-xs ${
              game.target_score === 21 ? 'text-green-400' : 'text-red-400'
            }`}>
              {game.target_score === 21 ? 'Beginner' : 'Veteran'}
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
}
