import Sequelize, { Model } from 'sequelize';

export default class Exercicio extends Model {
  static init(sequelize) {
    super.init({
      name: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Campo nome deve ser informado',
          },
        },
      },
      filename: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
    }, {
      sequelize,
    });
    return this;
  }

  static associate(models) {
    this.hasMany(models.Settreino, { foreignKey: 'exercicio_id' });
  }
}
