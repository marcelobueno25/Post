import express from "express";
const server = express();
import { DATABASE_URL } from './consts'
import mongoose from "mongoose";
import routes from '../routes/routes';

mongoose.connect(DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

server.use(express.json());
server.use(routes);
server.get("/", (_, res) => {
  res.send("Hello ts-node!");
});

server.use(function (_, resp) {
  return resp.status(404).send({ Status: 'Rota não encontrada' });
});



export default server;