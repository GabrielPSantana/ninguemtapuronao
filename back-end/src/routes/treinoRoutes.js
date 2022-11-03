import { Router } from 'express';
import treinoController from '../controllers/TreinoController';

const router = new Router();

router.post('/', treinoController.store);

export default router;
