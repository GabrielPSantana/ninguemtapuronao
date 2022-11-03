import { Router } from 'express';
import settreinoController from '../controllers/SettreinoController';

const router = new Router();

router.post('/', settreinoController.store);

export default router;
