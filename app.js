var heroku = require("heroku-ping");

heroku.ping({
  interval: 1000 * 60 * 15,
  silent: false,
  apps: [
    {
      name: "tennistider",
      path: "/",
      secure: true
    },
    {
      name: "tennistider-api",
      path: "/health",
      secure: true
    },
    {
      name: "tennistider-scraper",
      path: "/health",
      secure: true
    }
  ]
});
