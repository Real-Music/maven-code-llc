import userData from "@/data/user-data";

interface LoginProps { username: string; password: string };

const db = { user: userData }
const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export default {
	login: async ({ username, password }: LoginProps) => {
		await delay(2000)
		if (username === db.user.username && password === db.user.password) return db.user;
		throw "Invalid credentials";
	}
}