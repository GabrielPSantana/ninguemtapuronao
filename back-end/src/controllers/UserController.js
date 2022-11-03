import User from '../models/User';

class UserController {
  async store(req, res) {
    try {
      const novoUser = await User.create({
        name: 'Gabriel',
        email: 'gabriel@gmail.com',
        password: '123456',
        type: 'treinador',
      });

      res.json(novoUser);
    } catch (e) {
      res.json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new UserController();
