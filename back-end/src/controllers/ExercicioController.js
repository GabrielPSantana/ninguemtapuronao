import Exercicio from '../models/Exercicio';
import Settreino from '../models/Settreino';

class ExercicioController {
  async store(req, res) {
    try {
      const novoExercicio = await Exercicio.create(req.body);
      res.json(novoExercicio);
    } catch (e) {
      console.log(e);
      res.json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async index(req, res) {
    try {
      const exercicios = await Exercicio.findAll({
        attributes: ['id', 'name'],
        order: [['id', 'DESC']],
        include: [
          {
            model: Settreino,
            attributes: ['id', 'repeticao', 'carga'],
          },
        ],
      });
      return res.json(exercicios);
    } catch (e) {
      console.log(e);
      return res.json('error');
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      const exercicio = await Exercicio.findByPk(id, {
        attributes: ['id', 'name'],
        order: [['id', 'DESC']],
        include: [
          {
            model: Settreino,
            attributes: ['id', 'repeticao', 'carga'],
          },
        ],
      });
      return res.json(exercicio);
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
      const exercicio = await Exercicio.findByPk(id);

      if (!exercicio) {
        return res.status(400).json({
          errors: ['Exercicio não existe.'],
        });
      }

      const novosFeedback = await exercicio.update(req.body);

      return res.json(novosFeedback);
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
      const exercicio = await Exercicio.findByPk(id);

      if (!exercicio) {
        return res.status(400).json({
          errors: ['Exercicio não existe.'],
        });
      }

      const exercicioDeletado = await exercicio.destroy(req.body);

      return res.json(exercicioDeletado);
    } catch (e) {
      return res.json('error');
    }
  }
}

export default new ExercicioController();
