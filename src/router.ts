import { Router } from 'express';
import { CommentController } from './controllers';

const router = Router();

router.get('/comments', CommentController.getAll);
router.get('/comments/:id', CommentController.get);
router.post('/comments', CommentController.post);
router.patch('/comments/:id', CommentController.patch);
router.delete('/comments/:id', CommentController.delete);

export default router;