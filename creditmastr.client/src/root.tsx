import {Links, Meta, Outlet, Scripts, ScrollRestoration,} from "react-router";
import "./index.css";
import {AudioPlayerContextProvider} from "./hooks/useAudioPlayer";

export function Layout({children,}: { children: React.ReactNode; }) {
    return (
        <html lang="en" data-theme="lighty">
        <head>
            <link rel="icon" type="image/svg+xml" href="/vite.svg"/>
            <link rel="preconnect" href="https://rsms.me/"/>
            <link rel="stylesheet" href="https://rsms.me/inter/inter.css"/>
            <meta charSet="UTF-8"/>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
            <title>creditmastr.client</title>
            <Meta/>
            <Links/>
        </head>
        <body className="bg-base-100 isolate">
            {children}
            <ScrollRestoration/>
            <Scripts/>
        </body>
        </html>
    );
}

export default function Root() {
    return (
        <AudioPlayerContextProvider>
            <Outlet />
        </AudioPlayerContextProvider>
    );
}
