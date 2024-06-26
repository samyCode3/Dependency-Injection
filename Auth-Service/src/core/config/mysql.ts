import knex, { Knex } from "knex";

import { config } from "dotenv";

config();

// Define the configuration object
const configuration: Knex = knex({
  client: "mysql",
  connection: { 
    host: "localhost", 
    user: "root",  
    password: process.env.MYSQL_ROOT_PASSWORD,
    database: process.env.MYSQL_DATABASE, 
    port: Number(process.env.MYSQL_PORT)
  }, 
  migrations: {
    directory: "./database/migrations", 
  },
}); 


const query = configuration.raw("SELECT 1+1 as result"); 
query
  .then((result: any) => {
    console.log("Database connection successful:");
  })
  .catch((error: any) => {
    console.error("Error connecting to database:", error.message);
  }) 


export default configuration;
