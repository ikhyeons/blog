import mysql from 'mysql2/promise';
const config = {
  host: process.env.SQL_HOST,
  port: Number(process.env.SQL_PORT),
  user: process.env.SQL_USER,
  password: process.env.SQL_PASSWORD,
  database: process.env.SQL_DATABASE,
  connectionLimit: Number(process.env.SQL_CONNECTIONLIMIT),
};

const pool = mysql.createPool(config);

export const getConnection = () => pool.getConnection();
export default getConnection;
