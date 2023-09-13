function routes(app) {
  app.use('/livros', require('./routes/livrosRouter.js'));
  return;
}

module.exports = routes;