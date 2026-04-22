import { Router } from 'express';
import { getProfile, getRepos } from '../controllers/githubController.js';

const router = Router();

router.get('/:username', getProfile);
router.get('/:username/repos', getRepos);

export default router;
