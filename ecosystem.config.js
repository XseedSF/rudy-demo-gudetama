module.exports = {
  apps: [
    {
      name: "xs-event-countdown",
      script: "./server/index.js",
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
        DEPLOY_PATH: "/SuraLeads"
      }
    }
  ]
};