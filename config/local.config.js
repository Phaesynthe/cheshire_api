// TODO: all configuration should be moved to environment variables and wrapped in one of three docker configuration files.

module.exports = {
  datastores: {
    mysql: {
      host: '127.0.0.1',
      password: 'password',
      user: 'root'
    }
  },
  host: {
    port: 24601,
    baseUrl: ''
  }
};
