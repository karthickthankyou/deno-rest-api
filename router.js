import { Router } from 'https://deno.land/x/oak/mod.ts';
import getUsers from './controllers/get.js';

const router = new Router();

router.get('/', ({ response }) => {
	response.body = 'Welcome to deno!';
});

router.get('/users', getUsers);

export default router;
