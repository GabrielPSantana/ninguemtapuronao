import Catemuscular from '../models/Catemuscular';

class CatemuscularController {
  async store(req, res) {
    try {
      const novoCatemuscular = await Catemuscular.create({
        nome: 'Peito',
      });

      res.json(novoCatemuscular);
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

export default new CatemuscularController();
