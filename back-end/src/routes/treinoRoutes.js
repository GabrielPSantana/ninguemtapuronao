import { Router } from 'express';
import treinoController from '../controllers/TreinoController';

const router = new Router();

router.post('/', treinoController.store);
router.get('/', treinoController.index);
router.get('/:id', treinoController.show);
router.put('/:id', treinoController.update);
router.delete('/:id', treinoController.delete);

export default router;
