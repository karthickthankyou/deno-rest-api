import { Router } from 'https://deno.land/x/oak/mod.ts';
import getUsers from './controllers/get.js';
import postUsers from './controllers/post.js';

const router = new Router();

router.get('/', ({ response }) => {
	response.body = 'Welcome to deno!';
});

router.get('/users', getUsers);
router.post('/users', postUsers);

export default router;
