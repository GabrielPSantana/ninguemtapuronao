import { Router } from 'express';
import feedbackController from '../controllers/FeedbackController';

const router = new Router();

router.post('/', feedbackController.store);
router.get('/', feedbackController.index);
router.get('/:id', feedbackController.show);
router.put('/:id', feedbackController.update);
router.delete('/:id', feedbackController.delete);

export default router;
