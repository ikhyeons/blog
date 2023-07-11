import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

export const auth = (req: Request, res: Response, next: NextFunction) => {
  const jwtKey = process.env.JWT_KEY;
  // 인증 완료
  try {
    if (req.headers.authorization) {
      req.decoded = jwt.verify(req.headers.authorization, jwtKey!);
      return next();
    } else {
      return res.status(419).json({
        code: 401,
        message: '토큰이 소실되었습니다.',
      });
    }
  } catch (error: any) {
    if (error.name === 'TokenExpiredError') {
      return res.status(419).json({
        code: 419,
        message: '토큰이 만료되었습니다.',
      });
    }
    // 토큰의 비밀키가 일치하지 않는 경우
    if (error.name === 'JsonWebTokenError') {
      return res.status(401).json({
        code: 401,
        message: '유효하지 않은 토큰입니다.',
      });
    }
  }
};
