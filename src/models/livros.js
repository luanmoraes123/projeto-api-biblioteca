const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  id: { type: Number, unique: true },
  titulo: String,
  paginas: Number,
  isbn: String,
  editora: String
})

const schemaLivro = mongoose.models.livro || mongoose.model('livro', schema);
module.exports = schemaLivro;