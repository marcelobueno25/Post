import server from './src/config/express-config';
import { PORT } from './src/config/consts';
server.listen(PORT, () => {
  console.log(`[SERVER] Running at http://localhost:${PORT}`);
});

/* const express = require('express');
const routes = require('./src/routes/routes');
const server = express();

server.use(express.json());
server.use(routes);
server.listen(process.env.PORT || 3000); */