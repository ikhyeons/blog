import express, { Response, Request } from 'express';
import getConnection from '../mysql/connection';
import { FieldPacket, RowDataPacket } from 'mysql2';
import jwt from 'jsonwebtoken';
import { auth } from '../middleWares/authMiddleware';

const router = express.Router();

interface Password extends RowDataPacket {
  password: string;
}

type DataSet<T> = [T[], FieldPacket[]];

router.post('/logout', auth, (req: Request, res: Response) => {
  return res.clearCookie('token').status(200).json({
    code: 200,
    message: '정상 로그아웃 되었습니다.',
  });
});
export default router;
