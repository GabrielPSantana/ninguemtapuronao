import Treino from '../models/Treino';
import Exercicio from '../models/Exercicio';
import Feedback from '../models/Feedback';

class TreinoController {
  async store(req, res) {
    try {
      await Treino.create(req.body);
      res.json({ msg: 'Treino criado com sucesso' });
    } catch (e) {
      console.log(e);
      res.json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async index(req, res) {
    try {
      const treinos = await Treino.findAll({
        attributes: ['id', 'name', 'users_id'],
        order: [['id', 'DESC']],
        include: [
          {
            model: Exercicio,
            attributes: ['id', 'name', 'catemusculars_id'],
          },
          {
            model: Feedback,
            attributes: ['id', 'nivel_satisfacao', 'mensagem', 'atleta_id'],
          },
        ],
      });
      return res.json(treinos);
    } catch (e) {
      console.log(e);
      return res.json('error');
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      const treino = await Treino.findByPk(id, {
        attributes: ['id', 'name', 'users_id'],
        order: [['id', 'DESC']],
        include: [
          {
            model: Exercicio,
            attributes: ['id', 'name', 'catemusculars_id'],
          },
          {
            model: Feedback,
            attributes: ['id', 'nivel_satisfacao', 'mensagem', 'atleta_id'],
          },
        ],
      });
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
