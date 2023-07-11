import mysql from 'mysql2/promise';
import { config } from '../keys';

const pool = mysql.createPool(config);

export const getConnection = () => pool.getConnection();
export default getConnection;
