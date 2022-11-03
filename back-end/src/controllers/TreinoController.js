import Treino from '../models/Treino';

class TreinoController {
  async store(req, res) {
    try {
      const novoTreino = await Treino.create({
        name: 'Treino 1',
      });
      res.json(novoTreino);
    } catch (e) {
      console.log();
      console.log();
      console.log();
      console.log();
      console.log('erro: ', e);
      res.json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new TreinoController();
