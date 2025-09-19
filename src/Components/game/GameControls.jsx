import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Move, RotateCw, Target, Zap, RotateCcw } from "lucide-react";

export default function GameControls({ 
  game, 
  selectedBall, 
  onAimChange,
  onShoot,
  onCancelAim,
}) {
  const [aimAngle, setAimAngle] = useState([0]);
  const [power, setPower] = useState([50]);

  useEffect(() => {
    if (onAimChange) {
      onAimChange({ angle: aimAngle[0], power: power[0] });
    }
  }, [aimAngle, power, onAimChange]);

  const getCurrentPlayerTurn = () => {
    return game?.current_turn === 1;
  };

  const canCurrentPlayerMove = () => {
    if (!selectedBall || !game) return false;
    return getCurrentPlayerTurn() === selectedBall.isPlayer1;
  };

  const handleResetAim = () => {
    setAimAngle([0]);
    setPower([50]);
    if (onCancelAim) {
      onCancelAim();
    }
  };

  const handleShoot = () => {
    if (onShoot) {
      onShoot({ angle: aimAngle[0], power: power[0] });
    }
  };

  return (
    <div className="space-y-4 h-full">
      {/* Ball Selection Info */}
      <div className="glass-panel rounded-2xl p-4">
        <CardHeader className="p-0 mb-4">
          <CardTitle className="flex items-center gap-2 text-white">
            <Target className="w-5 h-5 text-cyan-400" />
            Ball Control
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          {selectedBall ? (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Selected Ball:</span>
                <div className="flex items-center gap-2">
                  <div className={`w-4 h-4 rounded-full ${
                    selectedBall.isPlayer1 ? 'bg-cyan-400' : 'bg-purple-400'
                  }`}></div>
                  <span className="text-white font-medium">Ball #{selectedBall.id}</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Player:</span>
                <span className="text-white font-medium">
                  {selectedBall.isPlayer1 ? game?.player1_name : game?.player2_name}
                </span>
              </div>
              {!canCurrentPlayerMove() && (
                <div className="glass-panel bg-red-400/10 border-red-400/30 rounded-lg p-2">
                  <p className="text-red-400 text-sm text-center">Not your turn!</p>
                </div>
              )}
            </div>
          ) : (
            <div className="text-center py-6">
              <Target className="w-8 h-8 text-gray-400 mx-auto mb-2 opacity-50" />
              <p className="text-gray-400 text-sm">Select a ball to control</p>
            </div>
          )}
        </CardContent>
      </div>

      {/* Movement Controls */}
      {selectedBall && canCurrentPlayerMove() && (
        <div className="glass-panel rounded-2xl p-4">
          <CardHeader className="p-0 mb-4">
            <CardTitle className="flex items-center gap-2 text-white">
              <Move className="w-5 h-5 text-magenta-400" />
              Aim & Shoot
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0 space-y-6">
            {/* Aim Angle */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <RotateCw className="w-4 h-4 text-cyan-400" />
                  <span className="text-gray-300 text-sm">Angle</span>
                </div>
                <span className="text-white font-medium">{aimAngle[0]}°</span>
              </div>
              <Slider
                value={aimAngle}
                onValueChange={setAimAngle}
                max={360}
                min={0}
                step={5}
                className="glass-slider"
              />
            </div>

            {/* Power */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-yellow-400" />
                  <span className="text-gray-300 text-sm">Power</span>
                </div>
                <span className="text-white font-medium">{power[0]}%</span>
              </div>
              <Slider
                value={power}
                onValueChange={setPower}
                max={100}
                min={10}
                className="glass-slider"
              />
            </div>

            <div className="flex gap-2">
              <Button onClick={handleResetAim} variant="outline" className="w-full">
                <RotateCcw className="w-4 h-4 mr-2" />
                Cancel
              </Button>
              <Button onClick={handleShoot} className="w-full bg-green-500 hover:bg-green-600">
                <Zap className="w-4 h-4 mr-2" />
                Shoot
              </Button>
            </div>
          </CardContent>
        </div>
      )}
    </div>
  );
}