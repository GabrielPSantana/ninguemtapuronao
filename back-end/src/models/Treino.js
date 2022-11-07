import Sequelize, { Model } from 'sequelize';

export default class Treino extends Model {
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
    }, {
      sequelize,
    });
    return this;
  }

  static associate(models) {
    this.hasMany(models.Exercicio, { foreignKey: 'treino_id' });
    this.hasMany(models.Feedback, { foreignKey: 'treino_id' });
  }
}
