declare global {
  namespace Express {
    type Data = string | jwt.JwtPayload;

    interface Request {
      decoded?: Data;
    }
  }
}

export default {};
