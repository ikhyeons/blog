import express, { Response, Request } from 'express';
import { FieldPacket, RowDataPacket } from 'mysql2';
import jwt from 'jsonwebtoken';
import { auth } from '../middleWares/authMiddleware';

import getConnection from '../mysql/connection';

const router = express.Router();

interface Postdata extends RowDataPacket {
  id: number;
  thumbnail: string;
  title: string;
  summary: string;
  view: number;
  love: number;
  date: string;
}

interface Commentdata extends RowDataPacket {
  id: number;
  writerID: number;
  documentID: number;
  content: string;
  date: string;
  love: number;
  ref: number;
  del: number;
}

interface Categorydata extends RowDataPacket {
  id: number;
  type: string;
  name: string;
}

type DataSet<T> = [T[], FieldPacket[]];

// 글 작성
router.post('/post', auth, async (req: Request, res: Response) => {
  const { categoryID, title, content } = req.body;
  const conn = await getConnection();
  const query = 'INSERT INTO document VALUES(DEFAULT, ?, DEFAULT, ?, ?, DEFAULT, DEFAULT, DEFAULT)';
  await conn.query(query, [categoryID, title, content]);

  return res.status(200).json({
    code: 200,
    message: '정상 저장 되었습니다.',
  });
});

//최신 글, 인기 글, 공지 목록
router.get('/indexpost', async (req: Request, res: Response) => {
  const recentQuery = 'SELECT * from document LIMIT 6';
  const hotQuery = 'SELECT * from document ORDER BY love DESC LIMIT 6';
  const noticeQuery = 'SELECT * from document WHERE categoryID = 1 LIMIT 6';

  const conn = await getConnection();
  const [recentData]: DataSet<Postdata> = await conn.query(recentQuery);
  const [hotData]: DataSet<Postdata> = await conn.query(hotQuery);
  const [noticeData]: DataSet<Postdata> = await conn.query(noticeQuery);

  console.log('onhere');
  return res.status(200).json({
    code: 200,
    postList: { recent: recentData, hot: hotData, notice: noticeData },
  });
});

//카테고리 목록
router.get('/category', async (req: Request, res: Response) => {
  const query = 'SELECT * FROM category';

  const conn = await getConnection();
  const [data]: DataSet<Categorydata> = await conn.query(query);

  return res.status(200).json({
    code: 200,
    categoryList: data,
  });
});

//카테고리별 글 목록
router.get('/list/:categoryType', async (req: Request, res: Response) => {
  const { categoryType } = req.params;
  const query = 'SELECT * FROM document LEFT JOIN category ON document.categoryID = category.id WHERE type = ?';

  const conn = await getConnection();
  const [data]: DataSet<Postdata> = await conn.query(query, [categoryType]);

  return res.status(200).json({
    code: 200,
    documentList: data,
  });
});

//글 상세
router.get('/post/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const query = 'SELECT * FROM document WHERE id = ?';

  const conn = await getConnection();
  const [data]: DataSet<Postdata> = await conn.query(query, [id]);

  return res.status(200).json({
    code: 200,
    document: data,
  });
});

//글 삭제
router.delete('/post/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const query = 'UPDATE document SET del = 1 WHERE id = ?';

  const conn = await getConnection();
  await conn.query(query, [id]);

  return res.status(200).json({
    code: 200,
    message: '정상삭제',
  });
});

//댓글 작성
router.post('/comment', async (req: Request, res: Response) => {
  const { documentID, writerID, content, ref } = req.body;
  const query = 'INSERT INTO comment VALUES(DEFAULT, ?, ?, ?, DEFAULT, DEFAULT, DEFAULT)';

  const conn = await getConnection();
  await conn.query(query, [writerID, documentID, content]);

  return res.status(200).json({
    code: 200,
    message: '정상 작성',
  });
});

//댓글 목록 보기
router.get('/comment/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const query = 'SELECT * FROM comment WHERE id = ?';

  const conn = await getConnection();
  const [data]: DataSet<Commentdata> = await conn.query(query, [id]);

  return res.status(200).json({
    code: 200,
    commentList: data,
  });
});

//댓글 삭제
router.delete('/comment/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const query = 'UPDATE comment SET del = 1 WHERE id = ?';

  const conn = await getConnection();
  await conn.query(query, [id]);

  return res.status(200).json({
    code: 200,
    message: '정상삭제',
  });
});
export default router;
