import Sequelize, { Model } from 'sequelize';

export default class Settreino extends Model {
  static init(sequelize) {
    super.init({
      repeticao: {
        type: Sequelize.INTEGER,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Campo repetição deve ser informado',
          },
        },
      },
      carga: {
        type: Sequelize.INTEGER,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Campo carga deve ser informado',
          },
        },
      },
    }, {
      sequelize,
    });
    return this;
  }
}
