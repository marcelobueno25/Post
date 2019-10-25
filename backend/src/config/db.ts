/* const mongoose = require('mongoose')
const dbURI = 'mongodb://admin:admin@dev-shard-00-00-zj87b.mongodb.net:27017,dev-shard-00-01-zj87b.mongodb.net:27017,dev-shard-00-02-zj87b.mongodb.net:27017/test?ssl=true&replicaSet=Dev-shard-0&authSource=admin&retryWrites=true&w=majority'

mongoose.Promise = global.Promise
mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

mongoose.connection.on('connected', function () {
    console.log('Conexão Mongoose - Conectado')
})

mongoose.connection.on('error', function (err:any) {
    console.log('Conexão Mongoose - ERRO: ')
    console.log(err);
})

mongoose.connection.on('disconnected', function () {
    console.log('Conexão Mongoose - Desconectado')
})

mongoose.connection.on('open', function () {
    console.log('Conexão Mongoose - Aberto')
})

process.on('SIGINT', function () {
    mongoose.connection.close(function () {
        console.log('Conexão Mongoose - Desconectada por meio do encerramento do aplicativo')
        process.exit(0)
    })
})

module.exports = mongoose */