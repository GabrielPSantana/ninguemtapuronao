import Catemuscular from '../models/Catemuscular';

class CatemuscularController {
  async store(req, res) {
    try {
      const novoCatemuscular = await Catemuscular.create({
        name: 'Peito',
      });

      res.json(novoCatemuscular);
    } catch (e) {
      res.json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new CatemuscularController();
