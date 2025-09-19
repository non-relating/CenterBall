
import React, { useState, useEffect } from "react";
import { Game } from "@/entities/Game";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import { Badge } from "@/Components/ui/badge";
import { Trophy, Crown, Target, TrendingUp } from "lucide-react";

export default function LeaderboardPage() {
  const [games, setGames] = useState([]);
  const [stats, setStats] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadLeaderboardData();
  }, []);

  const loadLeaderboardData = async () => {
    setIsLoading(true);
    try {
      const allGames = await Game.list("-created_date", 100);
      const completedGames = allGames.filter(game => game.game_status === "finished");
      
      // Calculate player stats
      const playerStats = {};
      
      completedGames.forEach(game => {
        // Player 1 stats
        if (!playerStats[game.player1_name]) {
          playerStats[game.player1_name] = { 
            name: game.player1_name, 
            wins: 0, 
            losses: 0, 
            totalPoints: 0, 
            gamesPlayed: 0,
            averageScore: 0
          };
        }
        
        // Player 2 stats  
        if (!playerStats[game.player2_name]) {
          playerStats[game.player2_name] = { 
            name: game.player2_name, 
            wins: 0, 
            losses: 0, 
            totalPoints: 0, 
            gamesPlayed: 0,
            averageScore: 0
          };
        }
        
        playerStats[game.player1_name].gamesPlayed++;
        playerStats[game.player2_name].gamesPlayed++;
        
        playerStats[game.player1_name].totalPoints += game.player1_score;
        playerStats[game.player2_name].totalPoints += game.player2_score;
        
        if (game.winner === game.player1_name) {
          playerStats[game.player1_name].wins++;
          playerStats[game.player2_name].losses++;
        } else if (game.winner === game.player2_name) {
          playerStats[game.player2_name].wins++;
          playerStats[game.player1_name].losses++;
        }
      });
      
      // Calculate averages and win rates
      Object.values(playerStats).forEach(player => {
        player.averageScore = player.gamesPlayed > 0 ? player.totalPoints / player.gamesPlayed : 0;
        player.winRate = player.gamesPlayed > 0 ? (player.wins / player.gamesPlayed) * 100 : 0;
      });
      
      setGames(completedGames);
      setStats(playerStats);
    } catch (error) {
      console.error("Error loading leaderboard:", error);
    }
    setIsLoading(false);
  };

  const getTopPlayers = () => {
    return Object.values(stats)
      .filter(player => player.gamesPlayed >= 1)
      .sort((a, b) => {
        if (b.wins !== a.wins) return b.wins - a.wins;
        return b.winRate - a.winRate;
      });
  };

  const getRecentGames = () => {
    return games.slice(0, 10);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="glass-panel rounded-2xl p-8 text-center">
          <div className="w-16 h-16 border-4 border-cyan-400/20 border-t-cyan-400 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white text-lg">Loading leaderboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <div className="glass-panel rounded-2xl p-6 mb-6">
            <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent mb-2">
              Hall of Fame
            </h1>
            <p className="text-gray-300">Champions of CenterBall</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Top Players */}
          <div className="glass-panel rounded-2xl p-6">
            <CardHeader className="p-0 mb-6">
              <CardTitle className="flex items-center gap-3 text-2xl text-white">
                <Trophy className="w-6 h-6 text-yellow-400 neon-glow" />
                Top Players
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="space-y-4">
                {getTopPlayers().length > 0 ? (
                  getTopPlayers().map((player, index) => (
                    <div key={player.name} className="glass-panel rounded-xl p-4 relative overflow-hidden">
                      {index === 0 && (
                        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-bl-full"></div>
                      )}
                      
                      <div className="flex items-center justify-between relative z-10">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white ${
                            index === 0 ? 'bg-gradient-to-r from-yellow-400 to-orange-500 neon-glow' :
                            index === 1 ? 'bg-gradient-to-r from-gray-300 to-gray-500' :
                            index === 2 ? 'bg-gradient-to-r from-orange-400 to-yellow-600' :
                            'bg-gradient-to-r from-purple-400 to-pink-400'
                          }`}>
                            {index === 0 ? <Crown className="w-5 h-5" /> : index + 1}
                          </div>
                          <div>
                            <p className="font-bold text-white">{player.name}</p>
                            <p className="text-sm text-gray-300">
                              {player.gamesPlayed} games • {player.winRate.toFixed(0)}% win rate
                            </p>
                          </div>
                        </div>
                        
                        <div className="text-right">
                          <div className="text-2xl font-bold text-white">{player.wins}</div>
                          <div className="text-sm text-gray-400">wins</div>
                        </div>
                      </div>
                      
                      <div className="mt-3 pt-3 border-t border-white/10">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-300">Avg Score:</span>
                          <span className="text-cyan-400 font-medium">{player.averageScore.toFixed(1)}</span>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-8 text-gray-400">
                    <Trophy className="w-12 h-12 mx-auto mb-4 opacity-30" />
                    <p>No completed games yet</p>
                  </div>
                )}
              </div>
            </CardContent>
          </div>

          {/* Recent Games */}
          <div className="glass-panel rounded-2xl p-6">
            <CardHeader className="p-0 mb-6">
              <CardTitle className="flex items-center gap-3 text-2xl text-white">
                <TrendingUp className="w-6 h-6 text-cyan-400 neon-glow" />
                Recent Battles
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {getRecentGames().length > 0 ? (
                  getRecentGames().map((game) => (
                    <div key={game.id} className="glass-panel rounded-xl p-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span className={`text-sm font-medium ${
                            game.winner === game.player1_name ? 'text-green-400' : 'text-red-400'
                          }`}>
                            {game.player1_name}
                          </span>
                          <span className="text-gray-400 text-sm">vs</span>
                          <span className={`text-sm font-medium ${
                            game.winner === game.player2_name ? 'text-green-400' : 'text-blue-400'
                          }`}>
                            {game.player2_name}
                          </span>
                        </div>
                        
                        <div className="text-right">
                          <div className="text-sm font-bold text-white">
                            {game.player1_score} - {game.player2_score}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Crown className="w-4 h-4 text-yellow-400" />
                          <span className="text-yellow-400 text-sm font-medium">{game.winner}</span>
                        </div>
                        <Badge variant="outline" className="border-gray-400/30 text-gray-300 text-xs">
                          to {game.target_score}
                        </Badge>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-8 text-gray-400">
                    <Target className="w-12 h-12 mx-auto mb-4 opacity-30" />
                    <p>No games completed yet</p>
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
