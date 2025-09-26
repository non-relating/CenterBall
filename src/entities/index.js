// This is a mock data store to replace the Vendia client.
// It simulates an async API using Promises and stores data in-memory.

let games = [
  {
    id: "game-1",
    player1_name: "Alice",
    player2_name: "Bob",
    player1_score: 0,
    player2_score: 0,
    target_score: 21,
    current_turn: 1,
    game_status: "setup",
    round_number: 1,
    ball_positions: {
      center_ball: { x: 0, y: 0.4, z: 0 },
      player1_balls: generatePlayerBalls(1),
      player2_balls: generatePlayerBalls(2)
    }
  }
];

// Counter for ID generation to avoid Date.now
let idCounter = 0;

// A simple function to generate unique IDs for new games (avoid Date.now, Math.random)
function generateId() {
  idCounter++;
  let rand = '';
  for (let i = 0; i < 7; i++) {
    // Use a simple LCG for deterministic pseudo-random (not crypto-secure)
    idCounter = (idCounter * 9301 + 49297) % 233280;
    const rnd = idCounter / 233280;
    rand += String.fromCharCode(97 + Math.floor(rnd * 26));
  }
  return 'game-' + idCounter + '-' + rand;
}

// Helper function to generate player balls
function generatePlayerBalls(player) {
  const arr = [];
  const zOffset = player === 1 ? 150 : -150;
  const zIncrement = player === 1 ? 30 : -30;
  for (let i = 0; i < 5; i++) {
    arr.push({
      x: 0,
      y: 0.4,
      z: zOffset + i * zIncrement,
      active: true,
      id: i + 1
    });
  }
  return arr;
}

const mockGameEntity = {
  // list(limit) -> returns array of games
  list: function(limit) {
    if (typeof limit === 'undefined') limit = 10;
    // Mock API: list games (no sorting implemented as sortBy was unused)
    const result = games.slice(0, limit);
    return {
      then: function(cb) { cb(result); return { catch: function() {} }; }
    };
  },

  // create(gameData) -> returns created game
  create: function(gameData) {
    // Mock API: create game
    const newGame = {
      id: generateId(),
      player1_name: gameData?.player1_name ?? "Player 1",
      player2_name: gameData?.player2_name ?? "Player 2",
      player1_score: gameData?.player1_score ?? 0,
      player2_score: gameData?.player2_score ?? 0,
      target_score: gameData?.target_score ?? 21,
      current_turn: gameData?.current_turn ?? 1,
      game_status: gameData?.game_status ?? "setup",
      round_number: gameData?.round_number ?? 1,
      ball_positions: gameData?.ball_positions ?? {
        center_ball: { x: 0, y: 0.4, z: 0 },
        player1_balls: generatePlayerBalls(1),
        player2_balls: generatePlayerBalls(2)
      }
    };
    games.unshift(newGame);
    return {
      then: function(cb) { cb(newGame); return { catch: function() {} }; }
    };
  },

  // get(id) -> returns single game or null
  get: function(id) {
    // Mock API: get
    const game = games.find(g => g.id === id) || null;
    return {
      then: function(cb) { cb(game); return { catch: function() {} }; }
    };
  },

  // update(id, updateData) -> returns updated game
  update: function(id, updateData) {
    // Mock API: update
    for (let i = 0; i < games.length; i++) {
      if (games[i].id === id) {
        Object.assign(games[i], updateData);
        return {
          then: function(cb) { cb(games[i]); return { catch: function() {} }; }
        };
      }
    }
    // If not found, return null
    return {
      then: function(cb) { cb(null); return { catch: function() {} }; }
    };
  }
};

// Export the mock entity so the rest of the app can use it
// Use ES module export for compatibility with the app
export const Game = mockGameEntity;
