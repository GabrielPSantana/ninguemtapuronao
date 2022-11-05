import { Router } from 'express';
import exercicioController from '../controllers/ExercicioController';

const router = new Router();

router.post('/', exercicioController.store);
router.get('/', exercicioController.index);
router.get('/:id', exercicioController.show);
router.put('/:id', exercicioController.update);
router.delete('/:id', exercicioController.delete);

export default router;
