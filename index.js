import { Application } from 'https://deno.land/x/oak/mod.ts';
// oak is express for node.
import { PORT } from './config.js';
import router from './router.js';

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

console.log(`Server running in ${PORT}`);

// await in global scope is awesome!
await app.listen({ port: PORT });
