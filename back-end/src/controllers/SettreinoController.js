import Settreino from '../models/Settreino';

class SettreinoController {
  async store(req, res) {
    try {
      const novoSettreino = await Settreino.create({
        name: 'Gabriel',
        repeticao: 15,
        carga: 50,
      });

      res.json(novoSettreino);
    } catch (e) {
      res.json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new SettreinoController();