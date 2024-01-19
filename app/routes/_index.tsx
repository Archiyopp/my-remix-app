import type { MetaFunction } from "@remix-run/cloudflare";
import { Button} from "~/components/Button";
import { Form } from "~/components/Form";
import { TextField } from "~/components/TextField";


export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <main className="bg-zinc-50 h-full flex flex-col gap-8">
      <header className="w-full h-16 bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 shadow" />
      <h1 className="text-2xl font-semibold text-center dark:text-white pt-8">Log in</h1>
      <Form className="flex flex-col gap-6 p-10 mx-auto min-w-72 md:min-w-[28rem] bg-white shadow-md rounded-lg">
        <TextField name="username" type="text" label="Username" className="flex flex-col gap-2" isRequired>
        </TextField>
        <TextField name="password" type="password" label="Password" className="flex flex-col gap-2" isRequired>
        </TextField>
        <Button type="submit">Enter</Button>
      </Form>
    </main >
  );
}
