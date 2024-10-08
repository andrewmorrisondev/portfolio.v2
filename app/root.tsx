import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node"; // Corrected import
import tailwindStyles from "./tailwind.css"; // Import Tailwind CSS
import { SpeedInsights } from "@vercel/speed-insights/remix";
import { Analytics } from "@vercel/analytics/react";

// Define the links function to include the Tailwind CSS
export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: tailwindStyles }];
};

export function Layout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <SpeedInsights />
        <Analytics />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App(): JSX.Element {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}
