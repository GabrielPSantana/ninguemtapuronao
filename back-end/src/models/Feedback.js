import Sequelize, { Model } from 'sequelize';

export default class Feedback extends Model {
  static init(sequelize) {
    super.init({
      nivel_satisfacao: {
        type: Sequelize.INTEGER,
        defaultValue: '',
        validate: {
          len: {
            args: [0, 5],
            msg: 'Campo validação deve ter entre 0 e 5 ',
          },
        },
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
