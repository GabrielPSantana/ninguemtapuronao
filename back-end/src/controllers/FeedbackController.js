import Feedback from '../models/Feedback';

class FeedbackController {
  async store(req, res) {
    try {
      const novoFeedback = await Feedback.create({
        nivel_satisfacao: 5,
        mensagem: 'Uma mensagem bonita',

      });
      res.json(novoFeedback);
    } catch (e) {
      res.json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new FeedbackController();
