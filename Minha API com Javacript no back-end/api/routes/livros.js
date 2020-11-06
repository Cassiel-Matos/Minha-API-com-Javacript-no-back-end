module.exports  = app => {
  const controller = app.controllers.livros;

  app.route('/api/v1/livros')
    .get(controller.listLivros)
    .post(controller.saveLivros);

  app.route('/api/v1/livros/:livroId')
    .delete(controller.removeLivros)
    .put(controller.updateLivros);
}