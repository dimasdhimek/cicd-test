module.exports = {
  apps: [
    {
      name: 'cicd-test',
      script: './dist/app.js',
      watch: 'false',
      exec_mode: 'fork',
      instances: '1',
      env_production: {
        NODE_ENV: 'production',
        PORT: 3006,
      },
    },
  ],
};
