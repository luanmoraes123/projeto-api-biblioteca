const express = require('express');
const mongoose = require('mongoose');


async function connectionBD(req = null, res = null, next = null) {
  try {
    await mongoose.connect(process.env.MONGOOSE_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("conectado ao banco de dados");
    try { next(); } catch (error) { }
    return mongoose;
  } catch (error) {
    console.log("error ao conectar com banco de dados")
    return error;
  }
}

module.exports = connectionBD;