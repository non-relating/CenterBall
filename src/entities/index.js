// This is a mock data store to replace the Vendia client.
// It simulates an async API using Promises and stores data in-memory.

var games = [
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
      player1_balls: (function() {
        var arr = [];
        for (var i = 0; i < 5; i++) {
          arr.push({
            x: 0,
            y: 150 + i * 30,
            active: true,
            id: i + 1
          });
        }
        return arr;
      })(),
      player2_balls: (function() {
        var arr = [];
        for (var i = 0; i < 5; i++) {
          arr.push({
            x: 0,
            y: -150 - i * 30,
            active: true,
            id: i + 1
          });
        }
        return arr;
      })()
    }
  }
];

// A simple function to generate unique IDs for new games (avoid Date.now, Math.random)
function generateId() {
  var ts = new Date().getTime();
  var rand = '';
  for (var i = 0; i < 7; i++) {
    // Use a simple LCG for deterministic pseudo-random (not crypto-secure)
    ts = (ts * 9301 + 49297) % 233280;
    var rnd = ts / 233280;
    rand += String.fromCharCode(97 + Math.floor(rnd * 26));
  }
  return 'game-' + ts + '-' + rand;
}


var mockGameEntity = {
  // list(sortBy, limit) -> returns array of games
  list: function(sortBy, limit) {
    if (typeof sortBy === 'undefined') sortBy = "-created_date";
    if (typeof limit === 'undefined') limit = 10;
  // Mock API: list games
    var result = games.slice(0, limit);
    return {
      then: function(cb) { cb(result); return { catch: function() {} }; }
    };
  },

  // create(gameData) -> returns created game
  create: function(gameData) {
  // Mock API: create game
    var newGame = {
      id: generateId(),
      player1_name: gameData && gameData.player1_name ? gameData.player1_name : "Player 1",
      player2_name: gameData && gameData.player2_name ? gameData.player2_name : "Player 2",
      player1_score: gameData && gameData.player1_score ? gameData.player1_score : 0,
      player2_score: gameData && gameData.player2_score ? gameData.player2_score : 0,
      target_score: gameData && gameData.target_score ? gameData.target_score : 21,
      current_turn: gameData && gameData.current_turn ? gameData.current_turn : 1,
      game_status: gameData && gameData.game_status ? gameData.game_status : "setup",
      round_number: gameData && gameData.round_number ? gameData.round_number : 1,
      ball_positions: gameData && gameData.ball_positions ? gameData.ball_positions : {
        center_ball: { x: 0, y: 0.4, z: 0 },
        player1_balls: (function() {
          var arr = [];
          for (var i = 0; i < 5; i++) {
            arr.push({
              x: 0,
              y: 150 + i * 30,
              active: true,
              id: i + 1
            });
          }
          return arr;
        })(),
        player2_balls: (function() {
          var arr = [];
          for (var i = 0; i < 5; i++) {
            arr.push({
              x: 0,
              y: -150 - i * 30,
              active: true,
              id: i + 1
            });
          }
          return arr;
        })()
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
    var game = null;
    for (var i = 0; i < games.length; i++) {
      if (games[i].id === id) {
        game = games[i];
        break;
      }
    }
    return {
      then: function(cb) { cb(game); return { catch: function() {} }; }
    };
  },

  // update(id, updateData) -> returns updated game
  update: function(id, updateData) {
  // Mock API: update
    for (var i = 0; i < games.length; i++) {
      if (games[i].id === id) {
        for (var key in updateData) {
          if (Object.prototype.hasOwnProperty.call(updateData, key)) {
            games[i][key] = updateData[key];
          }
        }
      }
    }
    var updated = null;
    for (var j = 0; j < games.length; j++) {
      if (games[j].id === id) {
        updated = games[j];
        break;
      }
    }
    return {
      then: function(cb) { cb(updated); return { catch: function() {} }; }
    };
  }
};

// Export the mock entity so the rest of the app can use it
// Use ES module export for compatibility with the app
export const Game = mockGameEntity;
