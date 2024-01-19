import type { MetaFunction } from "@remix-run/cloudflare";
import { Button, FieldError, Form, Input, Label, TextField } from "react-aria-components";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1 className="text-3xl dark:text-white">Welcome to my Remix App</h1>
      <Form className="flex flex-col gap-6 p-6 max-w-md mx-auto">
        <TextField name="username" type="text" className="flex flex-col gap-2" isRequired>
          <Label>Username</Label>
          <Input />
          <FieldError />
        </TextField>
        <TextField name="password" type="password" className="flex flex-col gap-2" isRequired>
          <Label>Password</Label>
          <Input />
          <FieldError />
        </TextField>
        <Button type="submit">Login</Button>
      </Form>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
          >
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
          >
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul>
    </div >
  );
}
