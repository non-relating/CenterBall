CREATE TABLE games (
    id SERIAL PRIMARY KEY,
    game_data JSONB NOT NULL
);

-- Insert a JSON object
INSERT INTO games (game_data)
VALUES ('{
    "name": "Game",
    "player1_name": "Player 1",
    "player2_name": "Player 2",
    "current_turn": 1,
    "player1_score": 0,
    "player2_score": 0,
    "target_score": 21,
    "game_status": "setup",
    "winner": null,
    "ball_positions": {
        "center_ball": { "x": 0, "y": 0, "active": true },
        "player1_balls": [
            { "x": 0, "y": 0, "active": true, "id": 1 },
            { "x": 0, "y": 0, "active": true, "id": 2 }
        ],
        "player2_balls": [
            { "x": 0, "y": 0, "active": true, "id": 1 },
            { "x": 0, "y": 0, "active": true, "id": 2 }
        ],
        "round_number": 1
    }
');
