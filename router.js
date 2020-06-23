import { Router } from 'https://deno.land/x/oak/mod.ts';

const router = new Router();

router.get('/', ({ response }) => {
	response.body = 'Welcome to deno!';
});

export default router;
