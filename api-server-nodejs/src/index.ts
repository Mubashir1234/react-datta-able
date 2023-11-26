import 'dotenv/config';

import http from 'http';

import server from './server';

//const { PORT } = process.env;

http.createServer({}, server).listen(4000, () => {
    console.log(`Server is listening on port 4000`);
  });
