// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/passport_linkedin_le',
    migrations: {
      directory: './src/server/db/migrations',
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: './src/server/db/migrations',
      tableName: 'knex_migrations'
    }
  }

};
