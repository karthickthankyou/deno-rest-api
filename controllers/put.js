import { FILE_PATH } from '../config.js';

export default async ({ response, request, params }) => {
	const decoder = new TextDecoder();
	const encoder = new TextEncoder();
	try {
		const { value: userData } = await request.body();

		const data = await Deno.readFile(FILE_PATH);
		const users = JSON.parse(decoder.decode(data));

		const updatedUsers = users.map((user) =>
			user.id === params.id ? { ...user, ...userData } : user
		);

		await Deno.writeFile(
			FILE_PATH,
			encoder.encode(JSON.stringify(updatedUsers))
		);

		response.status = 200;
		response.body = { success: true, users: updatedUsers };
	} catch (error) {
		console.log(error);
		response.status = 500;
		response.body = { success: false };
	}
};
