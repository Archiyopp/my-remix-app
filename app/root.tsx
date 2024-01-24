import type { LinksFunction } from "@remix-run/cloudflare";
import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from "@remix-run/react";
import stylesheet from "~/styles/global.css";

export const links: LinksFunction = () => [
	{ rel: "stylesheet", href: stylesheet },
];

export default function App() {
	return (
		<html lang="en" className="h-full">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<Meta />
				<Links />
			</head>
			<body className="h-full">
				<main className="bg-zinc-100 text-zinc-900 h-full flex flex-col gap-8">
					<header className="w-full h-16 bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 shadow" />
					<Outlet />
				</main>
				<ScrollRestoration />
				<Scripts />
				<LiveReload />
			</body>
		</html>
	);
}
