# Copilot Instructions for CenterBall

## Project Overview
- **CenterBall** is a React + Vite web app for a 3D precision ball game. The main gameplay logic is in `src/Pages/Game.jsx` and data is managed via a mock in-memory API in `src/entities/index.js`.
- The app uses React Router for navigation (`src/App.jsx`).
- UI components are organized under `src/Components/` (with subfolders for `game/` and `ui/`).
- Game state and logic are not persisted to a backend; all data is lost on reload (see `Game` entity mock).

## Key Architectural Patterns
- **Game Data Flow:**
  - Game state is loaded and updated via the `Game` entity (async mock API).
  - Game logic (scoring, turns, ball movement) is handled in `Game.jsx`.
  - UI is updated reactively via React state hooks.
- **Routing:**
  - `/` → Home (start/continue games)
  - `/game?id=...` → Game session
- **Component Conventions:**
  - UI primitives (Button, Input, Card, etc.) are in `src/Components/ui/`.
  - Game-specific UI (GameTable, ScorePanel, GameControls) is in `src/Components/game/`.
- **Utilities:**
  - Use `createPageUrl(name)` from `src/utils/index.js` for navigation.
  - Use `cn(...classes)` for className composition.
- **Styling:**
  - Uses Tailwind CSS utility classes and custom `glass-panel`/`neon-glow` classes for effects.

## Developer Workflows
- **Start Dev Server:** `npm run dev`
- **Build for Production:** `npm run build`
- **Lint:** `npm run lint`
- **Preview Build:** `npm run preview`
- **No backend or DB is required to run or test.**

## Project-Specific Patterns
- **Game Logic:**
  - Scoring and round logic are in `Game.jsx` (`calculateScore`, `handleShoot`).
  - Ball positions are 3D (x, y, z), but only x/z are used for gameplay.
- **Mock Data:**
  - All game data is stored in-memory in `src/entities/index.js` (see `games` array and `mockGameEntity`).
  - The SQL file in `entities/Game.sql` is not used by the app, but shows intended DB schema.
- **Error Handling:**
  - A global error overlay is installed in `src/main.jsx` to show runtime errors in the browser.

## Examples
- To add a new page, add a component to `src/Pages/` and a route in `src/App.jsx`.
- To add a new UI primitive, add to `src/Components/ui/` and import as needed.

## Integration Points
- No external API or backend integration is present.
- All data access is via the `Game` mock entity.

---
**Edit this file if project conventions or architecture change.**
