import { Router } from 'express';
import catemuscularController from '../controllers/CatemuscularController';

const router = new Router();

router.post('/', catemuscularController.store);

export default router;
