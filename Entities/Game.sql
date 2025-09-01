{
  "name": "Game",
  "type": "object",
  "properties": {
    "player1_name": {
      "type": "string",
      "description": "Name of player 1 (red team)"
    },
    "player2_name": {
      "type": "string",
      "description": "Name of player 2 (blue team)"
    },
    "current_turn": {
      "type": "number",
      "enum": [
        1,
        2
      ],
      "description": "Which player's turn (1 or 2)"
    },
    "player1_score": {
      "type": "number",
      "default": 0,
      "description": "Player 1's current score"
    },
    "player2_score": {
      "type": "number",
      "default": 0,
      "description": "Player 2's current score"
    },
    "target_score": {
      "type": "number",
      "enum": [
        11,
        21
      ],
      "default": 21,
      "description": "Target score to win (11 for veterans, 21 for beginners)"
    },
    "game_status": {
      "type": "string",
      "enum": [
        "setup",
        "playing",
        "finished"
      ],
      "default": "setup",
      "description": "Current game status"
    },
    "winner": {
      "type": "string",
      "description": "Winner of the game"
    },
    "ball_positions": {
      "type": "object",
      "description": "Current positions of all balls on the table",
      "properties": {
        "center_ball": {
          "type": "object",
          "properties": {
            "x": {
              "type": "number"
            },
            "y": {
              "type": "number"
            },
            "active": {
              "type": "boolean",
              "default": true
            }
          }
        },
        "player1_balls": {
          "type": "array",
          "maxItems": 5,
          "items": {
            "type": "object",
            "properties": {
              "x": {
                "type": "number"
              },
              "y": {
                "type": "number"
              },
              "active": {
                "type": "boolean",
                "default": true
              },
              "id": {
                "type": "number"
              }
            }
          }
        },
        "player2_balls": {
          "type": "array",
          "maxItems": 5,
          "items": {
            "type": "object",
            "properties": {
              "x": {
                "type": "number"
              },
              "y": {
                "type": "number"
              },
              "active": {
                "type": "boolean",
                "default": true
              },
              "id": {
                "type": "number"
              }
            }
          }
        }
      }
    },
    "round_number": {
      "type": "number",
      "default": 1,
      "description": "Current round number"
    }
  },
  "required": [
    "player1_name",
    "player2_name"
  ],
  "rls": {
    "read": {},
    "write": {
      "$or": [
        {
          "created_by": "{{user.email}}"
        },
        {
          "user_condition": {
            "role": "admin"
          }
        }
      ]
    }
  }
}