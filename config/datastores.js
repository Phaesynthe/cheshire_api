/* globals module */
module.exports.datastores = {
  mysql: {
    adapter: 'sails-mysql',
    database: 'cheshire',
    host: process.env.DB_MYSQL_URL,
    password: process.env.DB_MYSQL_PASSWORD,
    port: 3306,
    user: process.env.DB_MYSQL_USER
  }
};
