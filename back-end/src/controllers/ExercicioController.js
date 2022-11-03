import Exercicio from '../models/Exercicio';

class ExercicioController {
  async store(req, res) {
    try {
      const novoExercicio = await Exercicio.create({
        name: 'Peito 1',
      });
      res.json(novoExercicio);
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

export default new ExercicioController();
