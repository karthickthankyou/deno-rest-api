import { FILE_PATH } from '../config.js';
import { v4 } from 'https://deno.land/std/uuid/mod.ts';

export default async ({ response, request }) => {
	const decoder = new TextDecoder();
	const encoder = new TextEncoder();
	try {
		const { value: userData } = await request.body();

		const data = await Deno.readFile(FILE_PATH);
		const users = JSON.parse(decoder.decode(data));
		const myUUID = v4.generate();

		users.push({ id: myUUID, ...userData, emailVerified: false });

		await Deno.writeFile(FILE_PATH, encoder.encode(JSON.stringify(users)));

		response.status = 200;
		response.body = { success: true, users };
	} catch (error) {
		console.log(error);
		response.status = 500;
		response.body = { success: false, error };
	}
};
