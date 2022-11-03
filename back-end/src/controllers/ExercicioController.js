import Exercicio from '../models/Exercicio';

class ExercicioController {
  async store(req, res) {
    try {
      const novoExercicio = await Exercicio.create({
        name: 'Peito',
      });
      res.json(novoExercicio);
    } catch (e) {
      res.json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new ExercicioController();
