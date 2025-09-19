
import React, { useRef, useEffect, useState, useCallback } from "react";
import * as THREE from "three";

export default function GameTable({ ballPositions, onBallSelect, selectedBall, currentTurn }) {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const ballMeshesRef = useRef({});
  const [dragStart, setDragStart] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  const createBalls = useCallback(() => {
    if (!ballPositions || !sceneRef.current) return;
    
    // Clear existing balls
    Object.values(ballMeshesRef.current).forEach(ball => {
      sceneRef.current.remove(ball);
    });
    ballMeshesRef.current = {};
    
    const ballGeometry = new THREE.SphereGeometry(8, 32, 32);
    
    // Center ball (white with metallic shine)
    const centerBallMaterial = new THREE.MeshPhysicalMaterial({ 
      color: 0xffffff,
      metalness: 0.3,
      roughness: 0.1,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      transparent: true,
      opacity: 0.95
    });
    const centerBall = new THREE.Mesh(ballGeometry, centerBallMaterial);
    centerBall.position.set(
      ballPositions.center_ball.x,
      ballPositions.center_ball.y,
      8
    );
    centerBall.castShadow = true;
    centerBall.receiveShadow = true;
    centerBall.userData = { id: 'center', type: 'center' };
    sceneRef.current.add(centerBall);
    ballMeshesRef.current['center'] = centerBall;
    
    // Player 1 balls (red with glossy finish)
    const player1Material = new THREE.MeshPhysicalMaterial({ 
      color: 0xff3333,
      metalness: 0.4,
      roughness: 0.2,
      clearcoat: 0.8,
      clearcoatRoughness: 0.2,
      emissive: 0x220000,
      transparent: true,
      opacity: 0.95
    });
    
  ballPositions.player1_balls.forEach(ball => {
      if (ball.active) {
        const ballMesh = new THREE.Mesh(ballGeometry, player1Material);
  ballMesh.position.set(ball.x, ball.y, 8);
        ballMesh.castShadow = true;
        ballMesh.receiveShadow = true;
        ballMesh.userData = { id: ball.id, type: 'player1', isPlayer1: true };
        sceneRef.current.add(ballMesh);
        ballMeshesRef.current[ball.id] = ballMesh;
      }
    });
    
    // Player 2 balls (blue with glossy finish)
    const player2Material = new THREE.MeshPhysicalMaterial({ 
      color: 0x3333ff,
      metalness: 0.4,
      roughness: 0.2,
      clearcoat: 0.8,
      clearcoatRoughness: 0.2,
      emissive: 0x000022,
      transparent: true,
      opacity: 0.95
    });
    
  ballPositions.player2_balls.forEach(ball => {
      if (ball.active) {
        const ballMesh = new THREE.Mesh(ballGeometry, player2Material);
  ballMesh.position.set(ball.x, ball.y, 8);
        ballMesh.castShadow = true;
        ballMesh.receiveShadow = true;
        ballMesh.userData = { id: ball.id, type: 'player2', isPlayer1: false };
        sceneRef.current.add(ballMesh);
        ballMeshesRef.current[`p2_${ball.id}`] = ballMesh;
      }
    });
  }, [game]);

  const getCurrentPlayerBalls = useCallback(() => {
    if (!game) return [];
    
    const currentPlayer = game.current_turn;
    return Object.values(ballMeshesRef.current).filter(ball => {
      if (currentPlayer === 1) {
        return ball.userData.type === 'player1';
      } else {
        return ball.userData.type === 'player2';
      }
    });
  }, [game]);

  const canMoveBall = useCallback((ball) => {
    if (!ball || !game) return false;
    
    const currentPlayer = game.current_turn;
    const isCurrentPlayerBall = (currentPlayer === 1 && ball.userData.type === 'player1') || 
                               (currentPlayer === 2 && ball.userData.type === 'player2');
    
    if (!isCurrentPlayerBall) return false;
    
    // Check if ball is still in start zone
    const ballY = ball.position.y;
    if (currentPlayer === 1) {
      return ballY >= 200; // Player 1 start zone barrier
    } else {
      return ballY <= -200; // Player 2 start zone barrier
    }
  }, [game]);

  useEffect(() => {
    const mountElement = mountRef.current;
    if (!mountElement || !game) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x08080a);
    
    const camera = new THREE.PerspectiveCamera(75, mountElement.clientWidth / mountElement.clientHeight, 0.1, 1000);
    camera.position.set(0, 0, 450);
    
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(mountElement.clientWidth, mountElement.clientHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.physicallyCorrectLights = true;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    
    mountElement.appendChild(renderer.domElement);
    
    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const spotLight = new THREE.SpotLight(0xffffff, 1.5, 1000, Math.PI / 4, 0.5, 2);
    spotLight.position.set(0, 0, 500);
    spotLight.castShadow = true;
    spotLight.shadow.mapSize.width = 1024;
    spotLight.shadow.mapSize.height = 1024;
    scene.add(spotLight);
    
    // Store refs
    sceneRef.current = scene;
    rendererRef.current = renderer;
    cameraRef.current = camera;
    
    // Create dimensional table base
    const tableBaseGeometry = new THREE.BoxGeometry(420, 620, 20);
    const tableBaseMaterial = new THREE.MeshLambertMaterial({ 
      color: 0x1a1a1a,
      transparent: true,
      opacity: 0.9
    });
    const tableBase = new THREE.Mesh(tableBaseGeometry, tableBaseMaterial);
    tableBase.position.z = -10;
    tableBase.receiveShadow = true;
    scene.add(tableBase);
    
    // Table felt surface
    const tableGeometry = new THREE.PlaneGeometry(400, 600);
    const tableMaterial = new THREE.MeshLambertMaterial({ 
      color: 0x0a5c15,
      transparent: true,
      opacity: 0.95
    });
    const table = new THREE.Mesh(tableGeometry, tableMaterial);
    table.receiveShadow = true;
    scene.add(table);
    
    // Table borders (walls)
    const borderMaterial = new THREE.MeshPhongMaterial({ 
      color: 0x4d260f,
      shininess: 30
    });
    
    // Top border
    const topBorderGeometry = new THREE.BoxGeometry(440, 20, 25);
    const topBorder = new THREE.Mesh(topBorderGeometry, borderMaterial);
    topBorder.position.set(0, 310, 12);
    topBorder.castShadow = true;
    scene.add(topBorder);
    
    // Bottom border
    const bottomBorder = new THREE.Mesh(topBorderGeometry, borderMaterial);
    bottomBorder.position.set(0, -310, 12);
    bottomBorder.castShadow = true;
    scene.add(bottomBorder);
    
    // Left border
    const sideBorderGeometry = new THREE.BoxGeometry(20, 600, 25);
    const leftBorder = new THREE.Mesh(sideBorderGeometry, borderMaterial);
    leftBorder.position.set(-210, 0, 12);
    leftBorder.castShadow = true;
    scene.add(leftBorder);
    
    // Right border
    const rightBorder = new THREE.Mesh(sideBorderGeometry, borderMaterial);
    rightBorder.position.set(210, 0, 12);
    rightBorder.castShadow = true;
    scene.add(rightBorder);
    
    // Player barriers (at start zones)
    const barrierMaterial = new THREE.MeshPhongMaterial({ 
      color: 0xff4444,
      transparent: true,
      opacity: 0.7,
      emissive: 0x220000
    });
    
    // Player 1 barrier (red)
    const player1BarrierGeometry = new THREE.BoxGeometry(400, 5, 15);
    const player1Barrier = new THREE.Mesh(player1BarrierGeometry, barrierMaterial);
    player1Barrier.position.set(0, 200, 8);
    scene.add(player1Barrier);
    
    // Player 2 barrier (blue)
    const player2BarrierMaterial = new THREE.MeshPhongMaterial({ 
      color: 0x4444ff,
      transparent: true,
      opacity: 0.7,
      emissive: 0x000022
    });
    const player2Barrier = new THREE.Mesh(player1BarrierGeometry, player2BarrierMaterial);
    player2Barrier.position.set(0, -200, 8);
    scene.add(player2Barrier);
    
    // Center ring (glowing)
    const ringGeometry = new THREE.RingGeometry(48, 52, 64);
    const ringMaterial = new THREE.MeshBasicMaterial({
      color: 0x00ffff,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.8
    });
    const ring = new THREE.Mesh(ringGeometry, ringMaterial);
    ring.position.z = 1; // Just above the table surface
    scene.add(ring);

    createBalls();

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    // Handle window resize
    const handleResize = () => {
      if (mountElement && renderer && camera) {
        camera.aspect = mountElement.clientWidth / mountElement.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(mountElement.clientWidth, mountElement.clientHeight);
      }
    };
    window.addEventListener('resize', handleResize);

    // Cleanup on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      if (mountElement && renderer.domElement) {
        mountElement.removeChild(renderer.domElement);
      }
    };
  }, [game, createBalls]);

  useEffect(() => {
    // Update ball positions when ballPositions prop changes
    if (ballPositions && ballMeshesRef.current) {
      Object.values(ballMeshesRef.current).forEach(ballMesh => {
        let ballData;
        if (ballMesh.userData.type === 'center') {
          ballData = ballPositions.center_ball;
        } else if (ballMesh.userData.type === 'player1') {
          ballData = ballPositions.player1_balls.find(b => b.id === ballMesh.userData.id);
        } else if (ballMesh.userData.type === 'player2') {
          ballData = ballPositions.player2_balls.find(b => b.id === ballMesh.userData.id);
        }
        
        if (ballData) {
          ballMesh.position.set(ballData.x, ballData.y, 8);
          ballMesh.visible = ballData.active;
        }
      });
    }
  }, [ballPositions]);

  return <div ref={mountRef} className="w-full h-full rounded-lg overflow-hidden" />;
}
