import pg from "pg";

export const prerender = false;

const client = new pg.Client({
  host: import.meta.env.POSTGRES_HOST,
  port: import.meta.env.POSTGRES_PORT,
  database: import.meta.env.POSTGRES_DATABASE,
  user: import.meta.env.POSTGRES_USER,
  password: import.meta.env.POSTGRES_PASSWORD,
  ssl: true,
});

await client.connect();

export default client;
