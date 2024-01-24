import { ActionFunctionArgs, json } from "@remix-run/cloudflare";
import { createAccount } from "~/routes/signup/queries";
import { validateUser } from "~/routes/validations";

interface Env {
	remix: D1Database;
}

export async function action({ context, request }: ActionFunctionArgs) {
	const formData = await request.formData();
	const username = String(formData.get("username") ?? "");
	const password = String(formData.get("password") ?? "");
	const errors = validateUser(username, String(password));
	if (errors) {
		return json({ ok: false, errors }, 400);
	}

	const env = context.env as Env;

	const user = await createAccount({ db: env.remix, username, password });
	return json({ ok: true, user }, 200);
}

export default function SignUp() {
	return (
		<main className="bg-zinc-50 h-full flex flex-col gap-8">
			<header className="w-full h-16 bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 shadow" />
			<h1 className="text-2xl font-semibold text-center dark:text-white pt-8">
				Sign Up
			</h1>
		</main>
	);
}
