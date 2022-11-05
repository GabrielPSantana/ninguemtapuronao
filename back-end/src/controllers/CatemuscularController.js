import Catemuscular from '../models/Catemuscular';

class CatemuscularController {
  async store(req, res) {
    try {
      const novoCatemuscular = await Catemuscular.create(req.body);

      return res.json(novoCatemuscular);
    } catch (e) {
      return res.json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async index(req, res) {
    try {
      const catemusculars = await Catemuscular.findAll();
      return res.json(catemusculars);
    } catch (e) {
      return res.json(null);
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      const catemuscular = await Catemuscular.findByPk(id);
      return res.json(catemuscular);
    } catch (e) {
      return res.json('error');
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: ['ID não enviado.'],
        });
      }

      const catemuscular = await Catemuscular.findByPk(id);

      if (!catemuscular) {
        return res.status(400).json({
          errors: ['Categoria muscular não existe.'],
        });
      }

      const novoCatemuscular = await catemuscular.update(req.body);

      return res.json(novoCatemuscular);
    } catch (e) {
      console.log(e);
      return res.json('error');
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: ['ID não enviado.'],
        });
      }
      const catemuscular = await Catemuscular.findByPk(id);

      if (!catemuscular) {
        return res.status(400).json({
          errors: ['Categoria muscular não existe.'],
        });
      }

      const catemuscularDeletado = await catemuscular.destroy(req.body);

      return res.json(catemuscularDeletado);
    } catch (e) {
      return res.json('error');
    }
  }
}

export default new CatemuscularController();
