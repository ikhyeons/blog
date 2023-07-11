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

// 로그인
router.post('/login', async (req, res, next) => {
  const { email, password } = req.body;
  const jwtKey = process.env.JWT_KEY;
  const emailQuery = 'SELECT password from user WHERE email = ?';
  const conn = await getConnection();
  const [getPassword]: DataSet<Password> = await conn.query(emailQuery, [email]);
  if (!getPassword[0].password) return res.status(401).send({ code: 401, message: 'email not found' });
  if (getPassword[0].password !== password) return res.status(401).send({ code: 401, message: 'pw not found' });

  let token = jwt.sign(
    {
      type: 'JWT',
      email: email,
      password: password,
    },
    jwtKey!,
    {
      expiresIn: '15m',
      issuer: 'ikhyeons',
    },
  );
  return res.status(200).cookie('token', token).json({
    code: 200,
    token: token,
  });
});

// 로그아웃

router.post('/logout', auth, (req: Request, res: Response) => {
  return res.clearCookie('token').status(200).json({
    code: 200,
    message: '정상 로그아웃 되었습니다.',
  });
});
export default router;
