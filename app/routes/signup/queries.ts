// import crypto from "crypto";

export async function accountExists({
	db,
	username,
}: { db: D1Database; username: string }) {
	const account = await db
		.prepare("SELECT username FROM users WHERE username = ?")
		.bind(username)
		.first();

	return Boolean(account);
}

export async function createAccount({
	username,
	password,
	db,
}: { db: D1Database; username: string; password: string }) {
	// const salt = crypto.randomBytes(16).toString("hex");
	// const hash = crypto
	// 	.pbkdf2Sync(password, salt, 1000, 64, "sha256")
	// 	.toString("hex");

	return await db
		.prepare("INSERT INTO users (username, password) VALUES (?1, ?2)")
		.bind(username, password)
		.run();
}
