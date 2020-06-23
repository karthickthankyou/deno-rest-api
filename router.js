import { Router } from 'https://deno.land/x/oak/mod.ts';
import getUsers from './controllers/get.js';
import postUsers from './controllers/post.js';
import deleteUsers from './controllers/delete.js';
import updateUsers from './controllers/put.js';

const router = new Router();

router.get('/', ({ response }) => {
	response.body = 'Welcome to deno!';
});

router.get('/users', getUsers);
router.post('/users', postUsers);
router.delete('/users/:id', deleteUsers);
router.put('/users/:id', updateUsers);

export default router;
