import { Router } from 'express';
import settreinoController from '../controllers/SettreinoController';

const router = new Router();

router.post('/', settreinoController.store);
router.get('/', settreinoController.index);
router.get('/:id', settreinoController.show);
router.put('/:id', settreinoController.update);
router.delete('/:id', settreinoController.delete);

export default router;
