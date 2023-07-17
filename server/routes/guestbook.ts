import express, { Response, Request } from 'express';
import getConnection from '../mysql/connection';
import { FieldPacket, RowDataPacket } from 'mysql2';
import jwt from 'jsonwebtoken';
import { auth } from '../middleWares/authMiddleware';

const router = express.Router();

interface Guestbook extends RowDataPacket {
  nickname: string;
  date: string;
  ip: string;
  content: string;
}

type DataSet<T> = [T[], FieldPacket[]];

//방명록 목록
router.get('/', async (req: Request, res: Response) => {
  const query = 'SELECT * from guestbook';

  const conn = await getConnection();
  const [data]: DataSet<Guestbook> = await conn.query(query);
  return res.status(200).json({
    code: 200,
    guestbookData: data,
  });
});

//방명록 작성
router.post('/', async (req: Request, res: Response) => {
  const { isLogin, nickname, ip, content } = req.body;
  const query = 'INSERT INTO guestbook VALUES(DEFAULT, DEFAULT, ?, ?, ?, ?, DEFAULT)';

  const conn = await getConnection();
  await conn.query(query, [isLogin, nickname, ip, content]);

  return res.status(200).json({
    code: 200,
    message: '정상 작성 되었습니다.',
  });
});
export default router;
