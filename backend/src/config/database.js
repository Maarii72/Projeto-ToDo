//importação do moogose
const  mongoose = require('mongoose')

//definir url de conexão com o mongo
const url = 'mongodb://localhost:27017/todo';
mongoose.connect(url, {useNewUrlParser: true});

module.exports = mongoose;