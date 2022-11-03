import { Router } from 'express';
import exercicioController from '../controllers/ExercicioController';

const router = new Router();

router.post('/', exercicioController.store);

export default router;
