require('dotenv').config()
const mongoose = require('mongoose')

const MONGO_URL = process.env.MONGODB_URI ||  "mongodb://localhost:3000/"

const connect = () => {
  mongoose.connect(MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(console.log('Database conectada com sucesso.'))
  .catch(err => console.err)
}

module.exports = { connect }