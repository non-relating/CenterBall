
// This is a mock data store to replace the Vendia client.
// It simulates an async API using Promises and stores data in-memory.

let games = [
  {
    _id: 'game-1',
    playerName: 'Alice',
    score: 150,
    status: 'InProgress',
    balls: [
      { id: 1, position: [0, 0, 0], color: 'red' },
    ],
  },
  {
    _id: 'game-2',
    playerName: 'Bob',
    score: 250,
    status: 'Finished',
    balls: [],
  },
];

// A simple function to generate unique IDs for new games
const generateId = () => `game-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;

const mockGameEntity = {
  // Simulates listing all games
  list: async () => {
    console.log("Mock API: Listing games", games);
    // Vendia's list often returns an object with an `items` array
    return Promise.resolve({ items: games });
  },

  // Simulates creating a new game
  create: async (gameData) => {
    console.log("Mock API: Creating game with", gameData);
    const newGame = {
      ...gameData,
      _id: generateId(),
      score: 0,
      status: 'InProgress', // Default status
    };
    games.push(newGame);
    return Promise.resolve({ result: newGame });
  },

  // Simulates getting a single game by its ID
  get: async (id) => {
    console.log("Mock API: Getting game with id", id);
    const game = games.find(g => g._id === id);
    return Promise.resolve(game);
  },

  // Simulates updating a game
  update: async ({ _id, ...updateData }) => {
    console.log("Mock API: Updating game", _id, "with", updateData);
    games = games.map(game =>
      game._id === _id ? { ...game, ...updateData } : game
    );
    const updatedGame = games.find(g => g._id === _id);
    return Promise.resolve({ result: updatedGame });
  },
};

// Export the mock entity so the rest of the app can use it
export const Game = mockGameEntity;
