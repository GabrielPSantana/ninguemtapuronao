import Treino from '../models/Treino';

class TreinoController {
  async store(req, res) {
    try {
      const novoTreino = await Treino.create(req.body);
      res.json(novoTreino);
    } catch (e) {
      res.json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async index(req, res) {
    try {
      const treinos = await Treino.findAll();
      return res.json(treinos);
    } catch (e) {
      return res.json('error');
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      const treino = await Treino.findByPk(id);
      return res.json(treino);
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
      const treino = await Treino.findByPk(id);

      if (!treino) {
        return res.status(400).json({
          errors: ['Treino não existe.'],
        });
      }

      const novosTreino = await treino.update(req.body);

      return res.json(novosTreino);
    } catch (e) {
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
      const treino = await Treino.findByPk(id);

      if (!treino) {
        return res.status(400).json({
          errors: ['Usuário não existe.'],
        });
      }

      const treinoDeletado = await treino.destroy(req.body);

      return res.json(treinoDeletado);
    } catch (e) {
      return res.json('error');
    }
  }
}

export default new TreinoController();
