import { maxLength, minLength, object, safeParse, string } from "valibot";

const UserSchema = object({
	username: string("Username is required.", [
		minLength(1, "Please enter a username."),
		minLength(3, "Username must be at least 3 characters."),
		maxLength(256, "Username must be at most 256 characters."),
	]),
	password: string("Password is required.", [
		minLength(1, "Please enter a password."),
		minLength(6, "Password must be at least 6 characters."),
		maxLength(256, "Password must be at most 256 characters."),
	]),
});

export function validateUser(username: string, password: string) {
	const result = safeParse(UserSchema, { username, password });
	if (result.success) return null;

	return Object.fromEntries(
		result.issues.map((issue) => [issue.path?.at(0)?.key, issue.message]),
	);
}
