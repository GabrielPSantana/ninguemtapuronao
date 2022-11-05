import Settreino from '../models/Settreino';

class SettreinoController {
  async store(req, res) {
    try {
      const novoSettreino = await Settreino.create(req.body);

      res.json(novoSettreino);
    } catch (e) {
      res.json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async index(req, res) {
    try {
      const settreinos = await Settreino.findAll();
      return res.json(settreinos);
    } catch (e) {
      return res.json('error');
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      const settreino = await Settreino.findByPk(id);
      return res.json(settreino);
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
      const settreino = await Settreino.findByPk(id);

      if (!settreino) {
        return res.status(400).json({
          errors: ['Set Treino não existe.'],
        });
      }

      const novosSettreino = await settreino.update(req.body);

      return res.json(novosSettreino);
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
      const settreino = await Settreino.findByPk(id);

      if (!settreino) {
        return res.status(400).json({
          errors: ['Usuário não existe.'],
        });
      }

      const settreinoDeletado = await settreino.destroy(req.body);

      return res.json(settreinoDeletado);
    } catch (e) {
      return res.json('error');
    }
  }
}

export default new SettreinoController();
