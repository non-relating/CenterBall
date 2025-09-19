
// This is a mock data store to replace the Vendia client.
// It simulates an async API using Promises and stores data in-memory.

let games = [
  {
    id: 'game-1',
    player1_name: 'Alice',
    player2_name: 'Bob',
    player1_score: 0,
    player2_score: 0,
    target_score: 21,
    current_turn: 1,
    game_status: 'setup',
    round_number: 1,
    ball_positions: {
      center_ball: { x: 0, y: 0.4, z: 0 },
      player1_balls: Array.from({length: 5}, (_, i) => ({ x: 0, y: 150 + i * 30, active: true, id: i + 1 })),
      player2_balls: Array.from({length: 5}, (_, i) => ({ x: 0, y: -150 - i * 30, active: true, id: i + 1 })),
    }
  }
];

// A simple function to generate unique IDs for new games
const generateId = () => `game-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;

const mockGameEntity = {
  // list(sortBy, limit) -> returns array of games
  list: async (sortBy = '-created_date', limit = 10) => {
    console.log('Mock API: list games', { sortBy, limit });
    return Promise.resolve(games.slice(0, limit));
  },

  // create(gameData) -> returns created game
  create: async (gameData) => {
    console.log('Mock API: create game', gameData);
    const newGame = {
      id: generateId(),
      player1_name: gameData.player1_name || 'Player 1',
      player2_name: gameData.player2_name || 'Player 2',
      player1_score: gameData.player1_score || 0,
      player2_score: gameData.player2_score || 0,
      target_score: gameData.target_score || 21,
      current_turn: gameData.current_turn || 1,
      game_status: gameData.game_status || 'setup',
      round_number: gameData.round_number || 1,
      ball_positions: gameData.ball_positions || {
        center_ball: { x: 0, y: 0.4, z: 0 },
        player1_balls: Array.from({length: 5}, (_, i) => ({ x: 0, y: 150 + i * 30, active: true, id: i + 1 })),
        player2_balls: Array.from({length: 5}, (_, i) => ({ x: 0, y: -150 - i * 30, active: true, id: i + 1 })),
      }
    };
    games.unshift(newGame);
    return Promise.resolve(newGame);
  },

  // get(id) -> returns single game or null
  get: async (id) => {
    console.log('Mock API: get', id);
    const game = games.find(g => g.id === id);
    return Promise.resolve(game || null);
  },

  // update(id, updateData) -> returns updated game
  update: async (id, updateData) => {
    console.log('Mock API: update', id, updateData);
    games = games.map(g => g.id === id ? { ...g, ...updateData } : g);
    const updated = games.find(g => g.id === id) || null;
    return Promise.resolve(updated);
  }
};

// Export the mock entity so the rest of the app can use it
export const Game = mockGameEntity;
