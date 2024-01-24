import {
	json,
	type ActionFunctionArgs,
	type MetaFunction,
} from "@remix-run/cloudflare";
import { useActionData } from "@remix-run/react";
import { Button } from "~/components/Button";
import { Form } from "~/components/Form";
import { TextField } from "~/components/TextField";
import { validateUser } from "~/routes/validations";

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

	const errors = validateUser(String(username), String(password));

	if (errors) {
		return json({ ok: false, errors }, 400);
	}

	// const  = await logIn(username, password)
	return json({ ok: true, errors }, 200);
}

export default function Index() {
	const actionResult = useActionData<typeof action>();

	return (
		<div className="h-full flex flex-col gap-8">
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
					minLength={3}
					maxLength={256}
				/>
				<TextField
					name="password"
					type="password"
					label="Password"
					className="flex flex-col gap-2"
					isRequired
					minLength={6}
					maxLength={256}
					autoComplete="current-password"
				/>
				<Button type="submit">Enter</Button>
			</Form>
		</div>
	);
}
