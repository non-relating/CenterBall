
import React, { useState, useEffect } from "react";
import { Game } from "@/entities/Game";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Play, Users, Trophy, Target, Zap, Crown } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function HomePage() {
  const navigate = useNavigate();
  const [games, setGames] = useState([]);
  const [showNewGame, setShowNewGame] = useState(false);
  const [player1Name, setPlayer1Name] = useState("");
  const [player2Name, setPlayer2Name] = useState("");
  const [targetScore, setTargetScore] = useState("21");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    loadGames();
  }, []);

  const loadGames = async () => {
    const gameData = await Game.list("-created_date", 10);
    setGames(gameData);
  };

  const createNewGame = async () => {
    if (!player1Name.trim() || !player2Name.trim()) return;
    
    setIsLoading(true);
    try {
      const newGame = await Game.create({
        player1_name: player1Name.trim(),
        player2_name: player2Name.trim(),
        target_score: parseInt(targetScore),
        current_turn: 1,
        game_status: "setup",
        ball_positions: {
          center_ball: { x: 0, y: 0, active: true },
          player1_balls: Array.from({length: 5}, (_, i) => ({ x: 0, y: 150 + i * 30, active: true, id: i + 1 })),
          player2_balls: Array.from({length: 5}, (_, i) => ({ x: 0, y: -150 - i * 30, active: true, id: i + 1 }))
        }
      });
      
      navigate(createPageUrl("Game") + `?id=${newGame.id}`);
    } catch (error) {
      console.error("Error creating game:", error);
    }
    setIsLoading(false);
  };

  const continueGame = (gameId) => {
    navigate(createPageUrl("Game") + `?id=${gameId}`);
  };

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="glass-panel rounded-3xl p-8 md:p-12 mb-8 relative overflow-hidden">
            <div className="absolute inset-0 animated-gradient opacity-10"></div>
            <div className="relative z-10">
              <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-r from-cyan-400 to-magenta-500 flex items-center justify-center neon-glow">
                <Target className="w-12 h-12 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-magenta-500 to-yellow-400 bg-clip-text text-transparent mb-4">
                CenterBall
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                A futuristic precision ball game where strategy meets skill. Get your ball closest to the center while controlling the arena.
              </p>
              
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <div className="flex items-center gap-2 text-cyan-400">
                  <Zap className="w-5 h-5 neon-glow" />
                  <span>Strategic Barriers</span>
                </div>
                <div className="flex items-center gap-2 text-magenta-400">
                  <Trophy className="w-5 h-5 neon-glow" />
                  <span>Center Ring Control</span>
                </div>
                <div className="flex items-center gap-2 text-yellow-400">
                  <Crown className="w-5 h-5 neon-glow" />
                  <span>3D Physics Arena</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* New Game Section */}
          <div className="glass-panel rounded-2xl p-6">
            <CardHeader className="p-0 mb-6">
              <CardTitle className="flex items-center gap-3 text-2xl text-white">
                <Play className="w-6 h-6 text-cyan-400 neon-glow" />
                Start New Game
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0 space-y-6">
              <div className="grid gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-300 mb-2 block">Red Player</label>
                  <Input
                    placeholder="Enter red player name"
                    value={player1Name}
                    onChange={(e) => setPlayer1Name(e.target.value)}
                    className="glass-panel border-red-400/30 text-white placeholder-gray-400 focus:border-red-400"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-300 mb-2 block">Blue Player</label>
                  <Input
                    placeholder="Enter blue player name"
                    value={player2Name}
                    onChange={(e) => setPlayer2Name(e.target.value)}
                    className="glass-panel border-blue-400/30 text-white placeholder-gray-400 focus:border-blue-400"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-300 mb-2 block">Game Mode</label>
                  <Select value={targetScore} onValueChange={setTargetScore}>
                    <SelectTrigger className="glass-panel border-gray-400/30 text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="glass-panel border-gray-400/30">
                      <SelectItem value="21" className="text-white">
                        <div className="flex items-center gap-2">
                          <Badge variant="secondary" className="bg-green-400/20 text-green-400 border-green-400/30">
                            Beginner
                          </Badge>
                          <span>First to 21 points</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="11" className="text-white">
                        <div className="flex items-center gap-2">
                          <Badge variant="secondary" className="bg-red-400/20 text-red-400 border-red-400/30">
                            Veteran
                          </Badge>
                          <span>First to 11 points</span>
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <Button
                onClick={createNewGame}
                disabled={!player1Name.trim() || !player2Name.trim() || isLoading}
                className="w-full bg-gradient-to-r from-cyan-500 to-magenta-500 hover:from-cyan-600 hover:to-magenta-600 text-white font-bold py-3 rounded-xl neon-glow transition-all duration-300"
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                    <span>Creating Game...</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Play className="w-5 h-5" />
                    <span>Start Battle</span>
                  </div>
                )}
              </Button>
            </CardContent>
          </div>

          {/* Recent Games */}
          <div className="glass-panel rounded-2xl p-6">
            <CardHeader className="p-0 mb-6">
              <CardTitle className="flex items-center gap-3 text-2xl text-white">
                <Trophy className="w-6 h-6 text-yellow-400 neon-glow" />
                Recent Games
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {games.length > 0 ? (
                  games.map((game) => (
                    <div key={game.id} className="glass-panel rounded-xl p-4 hover:bg-white/20 transition-all duration-300 group">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <Users className="w-5 h-5 text-purple-400" />
                          <div>
                            <div className="flex items-center gap-2 text-sm">
                              <span className="text-red-400 font-medium">{game.player1_name}</span>
                              <span className="text-gray-400">vs</span>
                              <span className="text-blue-400 font-medium">{game.player2_name}</span>
                            </div>
                            <div className="text-xs text-gray-400">
                              {game.game_status === "finished" ? "Completed" : "In Progress"}
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-3">
                          <div className="text-right">
                            <div className="text-sm font-bold text-white">
                              {game.player1_score} - {game.player2_score}
                            </div>
                            <Badge variant="outline" className="border-gray-400/30 text-gray-300">
                              to {game.target_score}
                            </Badge>
                          </div>
                          
                          {game.game_status !== "finished" && (
                            <Button
                              onClick={() => continueGame(game.id)}
                              size="sm"
                              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300"
                            >
                              Continue
                            </Button>
                          )}
                        </div>
                      </div>
                      
                      {game.winner && (
                        <div className="flex items-center gap-2 text-sm">
                          <Crown className="w-4 h-4 text-yellow-400 neon-glow" />
                          <span className="text-yellow-400 font-medium">Winner: {game.winner}</span>
                        </div>
                      )}
                    </div>
                  ))
                ) : (
                  <div className="text-center py-8 text-gray-400">
                    <Target className="w-12 h-12 mx-auto mb-4 opacity-30" />
                    <p>No games yet. Start your first battle!</p>
                  </div>
                )}
              </div>
            </CardContent>
          </div>
        </div>
      </div>
    </div>
  );
}
