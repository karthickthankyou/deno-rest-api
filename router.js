import { Router } from 'https://deno.land/x/oak/mod.ts';
import getUsers from './controllers/get.js';
import postUsers from './controllers/post.js';
import deleteUsers from './controllers/delete.js';

const router = new Router();

router.get('/', ({ response }) => {
	response.body = 'Welcome to deno!';
});

router.get('/users', getUsers);
router.post('/users', postUsers);
router.delete('/users/:id', deleteUsers);

export default router;
