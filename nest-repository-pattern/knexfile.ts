import type { Knex } from "knex";

// Update with your config settings.

const config: { [key: string]: Knex.Config } = {
  development: {
    client: "pg",
    connection:{
      host:'127.0.0.1',
      port:5432,
      user: 'postgres',
      password:'postgres',
      database: 'nest-respository-pattern'
    },
    migrations:{
      directory: './src/database/migrations',
    }
  }
};

module.exports = config;
