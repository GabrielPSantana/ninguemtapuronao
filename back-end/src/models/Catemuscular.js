import Sequelize, { Model } from 'sequelize';

export default class User extends Model {
  static init(sequelize) {
    super.init({
      name: {
        type: Sequelize.STRING,
        validate: {
          len: {
            args: [3, 100],
            msg: 'Campo nome deve ter entre 3 e 100 caracters',
          },
        },
      },
    }, {
      sequelize,
    });
    return this;
  }
}
