import Sequelize, { Model } from 'sequelize';
import bcryptjs from 'bcryptjs';
import appConfig from '../config/config';

export default class User extends Model {
  static init(sequelize) {
    super.init({
      name: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 100],
            msg: 'Campo nome deve ter entre 3 e 100 caracters',
          },
        },
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'Email Já existe',
        },
        validate: {
          isEmail: {
            msg: 'E-mail invalido',
          },
        },
      },
      filename: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      url: {
        type: Sequelize.VIRTUAL,
        get() {
          return `${appConfig.url}/images/${this.getDataValue('filename')}`;
        },
      },
      type: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      password_hash: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      password: {
        type: Sequelize.VIRTUAL,
        validate: {
          len: {
            args: [6, 50],
            msg: 'A senha precis ater entre 6 e 50 caracteres',
          },
        },
      },
    }, {
      sequelize,
    });
    this.addHook('beforeSave', async (user) => {
      if (user.password) {
        user.password_hash = await bcryptjs.hash(user.password, 8);
      }
    });
    return this;
  }

  passwordIsValid(password) {
    return bcryptjs.compare(password, this.password_hash);
  }

  static associate(models) {
    this.hasMany(models.User, { foreignKey: 'users_id' });
    this.hasMany(models.Treino, { foreignKey: 'users_id' });
  }
}
