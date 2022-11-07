import Feedback from '../models/Feedback';

class FeedbackController {
  async store(req, res) {
    try {
      const novoFeedback = await Feedback.create(req.body);
      res.json(novoFeedback);
    } catch (e) {
      console.log(e);
      res.json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async index(req, res) {
    try {
      const feedbacks = await Feedback.findAll({
        attributes: ['id', 'nivel_satisfacao', 'mensagem', 'treino_id'],
        order: [['id', 'DESC']],
      });
      return res.json(feedbacks);
    } catch (e) {
      console.log(e);
      return res.json('error');
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      const feedback = await Feedback.findByPk(id, {
        attributes: ['id', 'nivel_satisfacao', 'mensagem', 'treino_id'],
        order: [['id', 'DESC']],
      });
      return res.json(feedback);
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
      const feedback = await Feedback.findByPk(id);

      if (!feedback) {
        return res.status(400).json({
          errors: ['Feedback não existe.'],
        });
      }

      const novosFeedback = await feedback.update(req.body);

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
      const feedback = await Feedback.findByPk(id);

      if (!feedback) {
        return res.status(400).json({
          errors: ['Usuário não existe.'],
        });
      }

      const feedbackDeletado = await feedback.destroy(req.body);

      return res.json(feedbackDeletado);
    } catch (e) {
      return res.json('error');
    }
  }
}

export default new FeedbackController();
