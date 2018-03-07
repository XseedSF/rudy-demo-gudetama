module.exports = {
  apps: [
    {
      name: "rudy-demo-gudetama",
      script: "./server/index.js",
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      }
    }
  ]
};