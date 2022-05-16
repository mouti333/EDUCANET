const mongoose = require('mongoose')
const mongoDB= 'mongodb://localhost/educom';
mongoose.connect(mongoDB,{useUnifiedTopology: true ,useNewUrlParser: true });
mongoose.Promise = global.Promise;
module.exports = mongoose;
