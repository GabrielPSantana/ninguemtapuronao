import express from 'express';
import dotenv from 'dotenv';
import homeRoutes from './src/routes/homeRoutes';
import treinoRoutes from './src/routes/treinoRoutes';
import settreinoRoutes from './src/routes/settreinoRoutes';
import feedbackRoutes from './src/routes/feedbackRoutes';
import exercicioRoutes from './src/routes/exercicioRoutes';
import catemuscularRoutes from './src/routes/catemuscularRoutes';
import userRoutes from './src/routes/userRoutes';
import fotoRoutes from './src/routes/fotoRoutes';

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
  }

  routes() {
    this.app.use('/', homeRoutes);
    this.app.use('/users/', userRoutes);
    this.app.use('/treino/', treinoRoutes);
    this.app.use('/settreino/', settreinoRoutes);
    this.app.use('/feedback/', feedbackRoutes);
    this.app.use('/exercicio/', exercicioRoutes);
    this.app.use('/catemuscular/', catemuscularRoutes);
    this.app.use('/foto/', fotoRoutes);
  }
}

export default new App().app;
