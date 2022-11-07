import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import User from '../models/User';
import Treino from '../models/Treino';
import Settreino from '../models/Settreino';
import Feedback from '../models/Feedback';
import Exercicio from '../models/Exercicio';
import Catemuscular from '../models/Catemuscular';

const models = [User, Treino, Settreino, Feedback, Exercicio, Catemuscular];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));

models.forEach((model) => model.associate && model.associate(connection.models));
