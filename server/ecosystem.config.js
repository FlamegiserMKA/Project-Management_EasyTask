module.exports = {
  apps: [
    {
      name: "project_management",
      script: "npm",
      args: "run dev",
      env: {
        NODE_ENV: "development",
      },
    },
  ],
};
