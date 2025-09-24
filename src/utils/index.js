export function createPageUrl(name) {
  const routes = {
    Home: "/",
    Game: "/game",
    Leaderboard: "/leaderboard",
  };
  return routes[name] || "/";
}

export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default { createPageUrl, cn };
