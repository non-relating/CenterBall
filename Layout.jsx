import React from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Target, Trophy, Settings, Play } from "lucide-react";

export default function Layout({ children, currentPageName }) {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <style>{`
        :root {
          --glass-bg: rgba(255, 255, 255, 0.1);
          --glass-border: rgba(255, 255, 255, 0.2);
          --glass-shadow: rgba(0, 0, 0, 0.3);
          --neon-cyan: #00f5ff;
          --neon-magenta: #ff006e;
          --neon-gold: #ffd60a;
          --glass-blur: blur(20px);
        }
        
        .glass-panel {
          background: var(--glass-bg);
          backdrop-filter: var(--glass-blur);
          -webkit-backdrop-filter: var(--glass-blur);
          border: 1px solid var(--glass-border);
          box-shadow: 0 8px 32px var(--glass-shadow);
        }
        
        .neon-glow {
          filter: drop-shadow(0 0 10px currentColor);
        }
        
        .animated-gradient {
          background: linear-gradient(45deg, var(--neon-cyan), var(--neon-magenta), var(--neon-gold));
          background-size: 300% 300%;
          animation: gradientShift 4s ease infinite;
        }
        
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .pulse-glow {
          animation: pulse 2s ease-in-out infinite;
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
      `}</style>

      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-cyan-400/20 blur-3xl pulse-glow"></div>
        <div
          className="absolute bottom-20 right-20 w-40 h-40 rounded-full bg-magenta-400/20 blur-3xl pulse-glow"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 rounded-full bg-yellow-400/10 blur-3xl pulse-glow"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Navigation */}
      {currentPageName !== "Game" && (
        <nav className="fixed top-0 left-0 right-0 z-50 p-4">
          <div className="max-w-6xl mx-auto">
            <div className="glass-panel rounded-2xl p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-cyan-400 to-magenta-500 flex items-center justify-center neon-glow">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-magenta-500 bg-clip-text text-transparent">
                      CenterBall
                    </h1>
                    <p className="text-xs text-gray-300">
                      Futuristic Precision Game
                    </p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Link
                    to={createPageUrl("Home")}
                    className={`glass-panel px-4 py-2 rounded-xl transition-all duration-300 flex items-center gap-2 hover:bg-white/20 ${
                      location.pathname === createPageUrl("Home")
                        ? "bg-white/20 border-cyan-400"
                        : ""
                    }`}
                  >
                    <Play className="w-4 h-4 text-cyan-400" />
                    <span className="text-white text-sm font-medium">Play</span>
                  </Link>
                  <Link
                    to={createPageUrl("Leaderboard")}
                    className={`glass-panel px-4 py-2 rounded-xl transition-all duration-300 flex items-center gap-2 hover:bg-white/20 ${
                      location.pathname === createPageUrl("Leaderboard")
                        ? "bg-white/20 border-magenta-400"
                        : ""
                    }`}
                  >
                    <Trophy className="w-4 h-4 text-magenta-400" />
                    <span className="text-white text-sm font-medium">
                      Scores
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      )}

      {/* Main content */}
      <main className={currentPageName !== "Game" ? "pt-24" : ""}>
        {children}
      </main>
    </div>
  );
}
