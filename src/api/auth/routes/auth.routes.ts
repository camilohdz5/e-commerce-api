import { Router } from 'express';

import * as authController from '../controllers/auth.controller';
import * as authMiddleware from '../../middlewares/auth.middlewares';

const router = Router();

export default router;
