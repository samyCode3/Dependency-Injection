import { Knex } from 'knex';
import { config } from 'dotenv';

config();
const configuration: Knex.Config = {
  client: 'mysql',
  connection: {
    host: '127.0.0.1',
    user: 'root',
    password: process.env.MYSQL_ROOT_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  },
  migrations: {
    directory: './database/migrations',
  },
};

export default configuration;
