import * as winston from 'winston';
import fs from 'fs'

if(!fs.existsSync('logs')){
  fs.mkdirSync('logs');
}

module.exports = new winston.loggers({
  transports: [
    new winston.transports.File({
      level: "info",
      filename: "logs/payfast.log",
      maxsize: 100000,
      maxFiles: 10
    })
  ]
});
