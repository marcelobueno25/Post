const express = require('express');
const routes = require('./backend/src/routes/routes');
const mongoose = require('mongoose');
const server = express();

mongoose.connect('mongodb://admin:admin@dev-shard-00-00-zj87b.mongodb.net:27017,dev-shard-00-01-zj87b.mongodb.net:27017,dev-shard-00-02-zj87b.mongodb.net:27017/test?ssl=true&replicaSet=Dev-shard-0&authSource=admin&retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

server.use(express.json());
server.use(routes);
server.listen(3000);