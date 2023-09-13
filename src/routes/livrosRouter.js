const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const connectionBD = require('../midlewares/connectionBD.js');
const livrosSchema = require('../models/livros.js');

router.post('/', connectionBD, async function (req, res) {

  try {
    let { id, titulo, paginas, isbn, editora } = req.body;
    console.log(req.body);
    let respostaBD = await livrosSchema.create({ id, titulo, paginas, isbn, editora });
    console.log('livro criado com sucesso');
    res.status(200).json(respostaBD);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

router.get('/', connectionBD, async function (req, res) {
  try {
    const livros = await livrosSchema.find();
    res.status(200).json(livros)
  } catch (error) {
    console.log(error);
    res.send(error);
  }
})

router.put('/:id', connectionBD, async function (req, res) {
  try {
    const idParam = req.params.id;
    let { id, titulo, paginas, isbn, editora } = req.body;
    let respostaBD = await livrosSchema.findOneAndUpdate({ id: idParam }, { id, titulo, paginas, isbn, editora }, { new: true });

    res.status(200).json(respostaBD);
  } catch (error) {
    console.log(error);
  }
})

router.delete('/:id', connectionBD, async function (req, res) {
  try {
    const id = req.params.id;
    await livrosSchema.deleteOne({ id });
    res.status(200).json({ mensagem: 'Livro removido com sucesso' });
  } catch (error) {
    console.log(error);
    res.send(error);
  }
})

module.exports = router;
