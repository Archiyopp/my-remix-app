import {
	json,
	type ActionFunctionArgs,
	type MetaFunction,
} from "@remix-run/cloudflare";
import { useActionData } from "@remix-run/react";
import { Button } from "~/components/Button";
import { Form } from "~/components/Form";
import { TextField } from "~/components/TextField";

export const meta: MetaFunction = () => {
	return [
		{ title: "Trellix Clone" },
		{
			name: "description",
			content: "Trellix clone using react aria components!",
		},
	];
};

export async function action({ request }: ActionFunctionArgs) {
	const formData = await request.formData();

	const username = formData.get("username") ?? "";
	const password = formData.get("password") ?? "";

	const errors = await validate(String(username), String(password));

	if (errors) {
		return json({ ok: false, errors }, 400);
	}

	// const  = await logIn(username, password)
	return json({ ok: true, errors: null }, 200);
}

export default function Index() {
	const actionResult = useActionData<typeof action>();

	return (
		<main className="bg-zinc-50 h-full flex flex-col gap-8">
			<header className="w-full h-16 bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 shadow" />
			<h1 className="text-2xl font-semibold text-center dark:text-white pt-8">
				Log in
			</h1>
			<Form
				method="post"
				validationErrors={actionResult?.errors ?? {}}
				action="/?index"
				className="flex flex-col gap-6 p-10 mx-auto min-w-72 md:min-w-[28rem] bg-white shadow-md rounded-lg"
			>
				<TextField
					name="username"
					type="text"
					label="Username"
					className="flex flex-col gap-2"
					isRequired
					autoComplete="username"
				/>
				<TextField
					name="password"
					type="password"
					label="Password"
					className="flex flex-col gap-2"
					isRequired
					autoComplete="current-password"
				/>
				<Button type="submit">Enter</Button>
			</Form>
		</main>
	);
}

function validate(username: string, password: string) {
	const errors: { username?: string; password?: string } = {};

	if (!username) {
		errors.username = "Username is required.";
	}

	if (username.length < 3) {
		errors.username = "Username must be at least 3 characters.";
	}

	if (!password || typeof password !== "string") {
		errors.password = "Password is required.";
	}

	if (password.length < 6) {
		errors.password = "Password must be at least 6 characters.";
	}

	// if (!errors.username && (await accountExists(username))) {
	//   errors.username = "An account with this username already exists.";
	// }

	return Object.keys(errors).length ? errors : null;
}
