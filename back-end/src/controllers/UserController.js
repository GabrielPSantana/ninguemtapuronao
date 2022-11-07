import User from '../models/User';
import Treino from '../models/Treino';

class UserController {
  async store(req, res) {
    try {
      await User.create(req.body);
      res.json({ msg: 'Usuário criado' });
    } catch (e) {
      console.log(e);
      res.json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async index(req, res) {
    try {
      const usuario = await User.findAll({
        attributes: ['id', 'name', 'email', 'filename', 'type'],
        order: [['id', 'DESC']],
        include: [
          {
            model: User,
            attributes: ['id', 'name', 'email', 'filename', 'type', 'users_id'],
          },
          {
            model: Treino,
            attributes: ['id', 'name'],
          },
        ],
      });
      return res.json(usuario);
    } catch (e) {
      console.log(e);
      return res.json('error');
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      const usuario = await User.findByPk(id, {
        attributes: ['id', 'name', 'email', 'filename', 'type'],
        order: [['id', 'DESC']],
        include: [
          {
            model: User,
            attributes: ['id', 'name', 'email', 'filename', 'type', 'users_id'],
          },
          {
            model: Treino,
            attributes: ['id', 'name'],
          },
        ],
      });

      return res.json(usuario);
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
      const usuario = await User.findByPk(id, {
        attributes: ['id', 'name', 'email', 'filename', 'type'],
        order: [['id', 'DESC']],
        include: {
          model: User,
          attributes: ['id', 'name', 'email', 'filename', 'type', 'users_id'],
        },
      });

      if (!usuario) {
        return res.status(400).json({
          errors: ['Usuário não existe.'],
        });
      }

      await usuario.update(req.body);

      return res.json('Usuário atualizado');
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

      await usuario.destroy(req.body);

      return res.json({ msg: 'Usuário deletado' });
    } catch (e) {
      return res.json('error');
    }
  }
}

export default new UserController();
