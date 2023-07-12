import express, { Request, Response } from 'express';
import next from 'next';
import cors from 'cors';

import user from './routes/user';
import session from './routes/session';
import community from './routes/community';

const dev = process.env.NODE_ENV === 'development';
const port = 3000;
const app = next({ dev, port });

const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  let corsOptions = {
    origin: ['*'],
    credentials: true,
  };

  server.use(cors(corsOptions));
  server.use(express.json());
  server.use('/user', user);
  server.use('/session', session);
  server.use('/community', community);

  server.get('/checkRequest', (req: Request, res: Response) => {
    console.log('hello');
  });

  server.get('*', (req: Request, res: Response) => {
    return handle(req, res);
  });

  server.listen(port, (err?: any) => {
    console.log('server run in port 3000');
  });
});
