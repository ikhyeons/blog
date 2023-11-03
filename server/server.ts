import express, { Request, Response } from 'express';
import next from 'next';
import cors from 'cors';
import { checkVisit } from './middleWares/checkVisit';

import user from './routes/user';
import session from './routes/session';
import community from './routes/community';
import blogInfo from './routes/blogInfo';

const dev = process.env.NODE_ENV === 'development';
const port = 3000;
console.log('dev : ' + dev);
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
  server.use(checkVisit);

  server.use('/user', user);
  server.use('/session', session);
  server.use('/community', community);
  server.use('/blogInfo', blogInfo);

  server.all('*', (req: Request, res: Response) => {
    return handle(req, res);
  });

  server.listen(port, '0.0.0.0', (err?: any) => {
    console.log('server run in port 3000');
  });
});
