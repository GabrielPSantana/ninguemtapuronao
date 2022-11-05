import Sequelize, { Model } from 'sequelize';

export default class Catemuscular extends Model {
  static init(sequelize) {
    super.init({
      name: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
    }, {
      sequelize,
    });
    return this;
  }
}
