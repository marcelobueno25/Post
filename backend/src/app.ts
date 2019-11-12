import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import morgan from "morgan";
import * as logger from "winston";

import routes from "./routes";

class App {
  public express: express.Application;

  public constructor() {
    this.express = express();

    this.middlewares();
    this.database();
    this.routes();
    this.logs();
  }



  private middlewares(): void {
    this.express.use(express.json());
    this.express.use(cors());
  }

  private database(): void {
    mongoose.connect(
      "mongodb://admin:admin@dev-shard-00-00-zj87b.mongodb.net:27017,dev-shard-00-01-zj87b.mongodb.net:27017,dev-shard-00-02-zj87b.mongodb.net:27017/test?ssl=true&replicaSet=Dev-shard-0&authSource=admin&retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    );
  }

  private routes(): void {
    this.express.use(routes);
  }

  private logs(): void {
    this.express.use(morgan("common", {
      stream: {
        write: function(mensagem){
            logger.info(mensagem);
        }
      }
    }));
}

}

export default new App().express;
