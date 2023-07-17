import express, { Response, Request } from 'express';
import getConnection from '../mysql/connection';
import { FieldPacket, RowDataPacket } from 'mysql2';
import { getCurrentDateString } from '../function/getCurrentDateString';

import jwt from 'jsonwebtoken';
import { auth } from '../middleWares/authMiddleware';

const router = express.Router();

interface Bloginfo extends RowDataPacket {
  profile: string | null;
  nickname: string;
  email: string;
  visit: number;
}

type DataSet<T> = [T[], FieldPacket[]];

router.get('/', async (req: Request, res: Response) => {
  const query =
    'SELECT nickname, email, url AS profile, (SELECT COUNT(*) AS num FROM access WHERE date LIKE ?) AS visit FROM user LEFT JOIN userProfile ON userProfile.userID = user.ID WHERE auth = 1';
  const conn = await getConnection();
  const [bloginfo]: DataSet<Bloginfo> = await conn.query(query, [getCurrentDateString()]);

  return res.status(200).json({
    code: 200,
    bloginfo: bloginfo,
  });
});

export default router;
