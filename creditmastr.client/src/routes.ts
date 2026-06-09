import { type RouteConfig, route, index } from "@react-router/dev/routes";
//import type { RouteConfig } from "@react-router/dev/routes";

/*export default [
    {
        path: "/",
        lazy: () => import("./routes/layout").then(convert),
        children: [
            {
                index: true,
                lazy: () => import("./routes/home").then(convert),
            },
            {
                path: "pricing",
                //lazy: () => import("./routes/pricing").then(convert),
                file: "./routes/pricing.tsx",
            },
            {
                path: 'how-it-works',
                // @ts-ignore
                //lazy: () => import("./routes/howItWorks").then(convert),
                file: "./routes/howItWorks.tsx",
            },
            {
                path: '*',
                // @ts-ignore
                //lazy: () => import("./routes/notFound").then(convert),
                file: "./routes/notFound.tsx",
            }
            
        ],
    },
    
] satisfies RouteConfig;

 */

export default [
    index("./App.jsx"),
    route("/pricing",       "./pages/landingPages/Pricing.jsx"),
    route("/how-it-works",  "./pages/landingPages/HowItWorks.jsx"),
    route("/about",         "./pages/About.jsx"),
    route("/contact",       "./pages/Contact.jsx"),
    route("/privacy-policy","./pages/PrivacyPolicy.jsx"),
    route("/terms",         "./pages/TermsOfUse.jsx"),
    route("*",              "./pages/NotFoundPage.jsx"),
] satisfies RouteConfig;