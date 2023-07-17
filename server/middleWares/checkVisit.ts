import { Request, Response, NextFunction } from 'express';
import { getCurrentDateString } from '../function/getCurrentDateString';
import requestIP from 'request-ip';
import getConnection from '../mysql/connection';
import { FieldPacket, RowDataPacket } from 'mysql2';

interface Countdata extends RowDataPacket {
  num: number;
}

type DataSet<T> = [T[], FieldPacket[]];

export const checkVisit = async (req: Request, res: Response, next: NextFunction) => {
  //아이피를 받아서 해당 시간과 함께 데이터를 넣음
  //만약 같은 날짜에 이미 아이피가 존재한다면 넣지 않음.
  const ip = requestIP.getClientIp(req);

  const conn = await getConnection();
  const checkQuery = 'SELECT COUNT(*) AS num FROM access WHERE ip = ? AND date LIKE ?';
  const [data]: DataSet<Countdata> = await conn.query(checkQuery, [ip, getCurrentDateString()]);

  if (!data[0].num) {
    const query = 'INSERT INTO access VALUES(DEFAULT, DEFAULT, ?)';
    await conn.query(query, [ip]);
  }
  conn.release();
  next();
};
