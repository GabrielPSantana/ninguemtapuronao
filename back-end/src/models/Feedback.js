import Sequelize, { Model } from 'sequelize';

export default class Feedback extends Model {
  static init(sequelize) {
    super.init({
      nivel_satisfacao: {
        type: Sequelize.INTEGER,
        defaultValue: '',
      },
      mensagem: {
        type: Sequelize.TEXT,
        defaultValue: '',
      },
    }, {
      sequelize,
    });
    return this;
  }
}
