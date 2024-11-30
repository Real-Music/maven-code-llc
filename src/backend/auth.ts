import userData from "@/data/user-data";
import delay from "@/utils/delay";

interface LoginProps { username: string; password: string };

const db = { user: userData }

export default {
	login: async ({ username, password }: LoginProps) => {
		await delay(2000)
		if (username === db.user.username && password === db.user.password) return db.user;
		throw "Invalid credentials";
	}
}