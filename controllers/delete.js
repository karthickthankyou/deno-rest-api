import { FILE_PATH } from '../config.js';

export default async ({ response, params }) => {
	const decoder = new TextDecoder();
	const encoder = new TextEncoder();
	try {
		const data = await Deno.readFile(FILE_PATH);
		const users = JSON.parse(decoder.decode(data));
		let userFound = false;

		console.log(params);

		const updatedUsers = users.filter((user) => user.id !== params.id);

		if (users.length === updatedUsers.length) {
			response.status = 404;
			response.body = { success: false, error: 'user id not found' };
			return;
		}

		await Deno.writeFile(
			FILE_PATH,
			encoder.encode(JSON.stringify(updatedUsers))
		);

		response.status = 200;
		response.body = { success: true, users: updatedUsers };
	} catch (error) {
		console.log(error);
		response.status = 500;
		response.body = { success: false, error };
	}
};
