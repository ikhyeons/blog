import express from 'express';
import getConnection from '../mysql/connection';
import { Request, Response } from 'express';
import { FieldPacket, RowDataPacket } from 'mysql2';

const router = express.Router();

interface Countdata extends RowDataPacket {
  num: number;
}

type DataSet<T> = [T[], FieldPacket[]];

//회원가입
router.post('/', async (req: Request, res: Response) => {
  const { email, pw, nickname, profile } = req.body;
  const query = 'INSERT INTO user VALUES(DEFAULT, 0, ?, ?, ?, DEFAULT)';
  const conn = await getConnection();
  const connection = await conn.query(query, [email, pw, nickname]);
  console.log(connection[0]);

  res.json(connection[0]);
});

//이메일 중복확인
router.get('/emailValidate/:email', async (req: Request, res: Response) => {
  const { email } = req.params;
  const query = 'SELECT COUNT(email) AS num FROM user WHERE email = ?';
  const conn = await getConnection();
  const [data]: DataSet<Countdata> = await conn.query(query, [email]);

  data[0].num ? res.json(false) : res.json(true);
});

//닉네임 중복확인
router.get('/nicknameValidate/:nickname', async (req: Request, res: Response) => {
  const { nickname } = req.params;
  const query = 'SELECT COUNT(nickname) AS num FROM user WHERE Nickname = ?';
  const conn = await getConnection();
  const [data]: DataSet<Countdata> = await conn.query(query, [nickname]);

  data[0].num ? res.json(false) : res.json(true);
});

export default router;
