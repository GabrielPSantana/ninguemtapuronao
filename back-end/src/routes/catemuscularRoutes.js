import { Router } from 'express';
import catemuscularController from '../controllers/CatemuscularController';

const router = new Router();

router.post('/', catemuscularController.store);
router.get('/', catemuscularController.index);
router.get('/:id', catemuscularController.show);
router.put('/:id', catemuscularController.update);
router.delete('/:id', catemuscularController.delete);

export default router;
