import express from 'express';
import dotenv from 'dotenv';
import { resolve } from 'path';
import loginRequired from './src/middlewares/loginRequired';

import homeRoutes from './src/routes/homeRoutes';
import treinoRoutes from './src/routes/treinoRoutes';
import settreinoRoutes from './src/routes/settreinoRoutes';
import feedbackRoutes from './src/routes/feedbackRoutes';
import exercicioRoutes from './src/routes/exercicioRoutes';
import catemuscularRoutes from './src/routes/catemuscularRoutes';
import userRoutes from './src/routes/userRoutes';
import fotoRoutes from './src/routes/fotoRoutes';
import tokenRoutes from './src/routes/tokenRoutes';

dotenv.config();

import './src/database';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(express.static(resolve(__dirname, 'uploads')));
  }

  routes() {
    this.app.use('/', homeRoutes);
    this.app.use('/users/', userRoutes);
    this.app.use('/treino/', loginRequired, treinoRoutes);
    this.app.use('/settreino/', loginRequired, settreinoRoutes);
    this.app.use('/feedback/', loginRequired, feedbackRoutes);
    this.app.use('/exercicio/', loginRequired, exercicioRoutes);
    this.app.use('/catemuscular/', loginRequired, catemuscularRoutes);
    this.app.use('/foto/', loginRequired, fotoRoutes);
    this.app.use('/token/', tokenRoutes);
  }
}

export default new App().app;
