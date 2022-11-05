import User from '../models/User';

class UserController {
  async store(req, res) {
    try {
      const novoUser = await User.create(req.body);
      res.json(novoUser);
    } catch (e) {
      res.json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async index(req, res) {
    try {
      const usuario = await User.findAll();
      return res.json(usuario);
    } catch (e) {
      return res.json('error');
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      const usuarios = await User.findByPk(id);
      return res.json(usuarios);
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
      const usuario = await User.findByPk(id);

      if (!usuario) {
        return res.status(400).json({
          errors: ['Usuário não existe.'],
        });
      }

      const novosDados = await usuario.update(req.body);

      return res.json(novosDados);
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
      const usuario = await User.findByPk(id);

      if (!usuario) {
        return res.status(400).json({
          errors: ['Usuário não existe.'],
        });
      }

      const usuarioDeletado = await usuario.destroy(req.body);

      return res.json(usuarioDeletado);
    } catch (e) {
      return res.json('error');
    }
  }
}

export default new UserController();
