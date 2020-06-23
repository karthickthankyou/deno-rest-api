import { FILE_PATH } from '../config.js';

export default async ({ response }) => {
	const decoder = new TextDecoder();
	try {
		const data = await Deno.readFile(FILE_PATH);
		const users = JSON.parse(decoder.decode(data));

		response.status = 200;
		response.body = { success: true, users };
	} catch (error) {
		console.log(error);
		response.status = 500;
		response.body = { success: false };
	}
};
