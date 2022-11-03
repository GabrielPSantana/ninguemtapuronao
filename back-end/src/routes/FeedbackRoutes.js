import { Router } from 'express';
import feedbackController from '../controllers/FeedbackController';

const router = new Router();

router.post('/', feedbackController.store);

export default router;
