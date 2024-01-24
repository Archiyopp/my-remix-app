export async function logInAccount({
	db,
	username,
	password,
}: { db: D1Database; username: string; password: string }) {
	const user = await db
		.prepare("SELECT password FROM users WHERE username = ?")
		.bind(username)
		.first<{ password: string }>();
	if (!user || !user.password) {
		return false;
	}
	// const [userHash, salt] = user.password.split("$_|_$");

	// const hash = crypto
	// 	.pbkdf2Sync(password, salt, 1000, 64, "sha256")
	// 	.toString("hex");
	return user.password === password;
}
