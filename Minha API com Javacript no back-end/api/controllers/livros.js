const uidv1 = require('uuid/v4');


module.exports = app => {
  
  const livrosDB = app.data.games;
  const controller = {};

  const { livros: livrosMock, } = livrosDB;

  controller.listLivros = (req, res) => res.status(200).json(livrosDB);

  controller.saveLivros = (req, res) => {
    gamesMock.data.push({
      id: uidv1(),
      title: req.body.title,
      year: req.body.year,
      type: req.body.type,
      description: req.body.description
    });

    res.status(201).json(livrosMock);
  }

  controller.removeLivros = (req, res) => {
    const { livrosId, } = req.params;

    const foundLivroIndex = livrosMock.data.findIndex(game => livro.id === livroId);

    if(foundGameIndex === -1){
      res.status(404).json({
        message: 'O livro não foi encontrado',
        success: false,
        livros: livrosMock,
      });
    }else {
      livrosMock.data.splice(foundLivroIndex, 1);
      res.status(200).json({
        message: 'Livro foi removido com sucesso!',
        success: true,
        livros: livrosMock,
      });
    }
  }

  controller.updateLivros = (req, res) => {
    const {
      livroId,
    } = req.params;

    const foundLivrosIndex = livrosMock.data.findIndex(game => livro.id === livroId);

    if(foundLivrosIndex === -1){
      res.status(404).json({
        message: 'O livro não foi encontrado',
        success: false,
        livros: livrosMock,
      });
    }else {
      const newLivro = {
        id: livroId,
        title: req.body.title,
        year: req.body.year,
        type: req.body.type,
        description: req.body.description,
        createAt: new Date()
      };

      livrosMock.data.splice(foundLivrosIndex, 1, newLivro);

      res.status(200).json({
        message: 'Livro atualizado com sucesso!',
        success: true,
        livros: livrosMock,
      });
    }
  }

  return controller;

}