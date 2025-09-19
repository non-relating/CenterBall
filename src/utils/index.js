export function createPageUrl(name) {
  const routes = {
    Home: '/',
    Game: '/game',
    Leaderboard: '/leaderboard'
  };
  return routes[name] || '/';
}

export default { createPageUrl };
