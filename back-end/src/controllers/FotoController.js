import multer from 'multer';
import multerConfig from '../config/multerConfig';

import User from '../models/User';

const upload = multer(multerConfig).single('foto');

class FotoController {
  store(req, res) {
    return upload(req, res, async (err) => {
      if (err) {
        return res.status(400).json({
          error: [err],
        });
      }
      console.log(req.body);

      const { filename } = req.file;
      const { id } = req.body;
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
      const body = {
        filename,
      };

      const usuarioAtualizado = await usuario.update(body);

      return res.json(usuarioAtualizado);
    });
  }
}

export default new FotoController();
