import { type RouteConfig, route, index, layout} from "@react-router/dev/routes";
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

    // Marketing
    layout("routes/marketing/_layout.jsx", [
        index("routes/marketing/App.jsx"),
        route("/pricing",        "routes/marketing/Pricing.jsx"),
        route("/how-it-works",   "routes/marketing/HowItWorks.jsx"),
        route("/about",          "routes/marketing/About.jsx"),
        route("/contact",        "routes/marketing/Contact.jsx"),
        route("/privacy-policy", "routes/marketing/PrivacyPolicy.jsx"),
        route("/terms",          "routes/marketing/TermsOfUse.jsx"),
    ]),
    
    //index("./App.jsx"),
    //route("/pricing",       "./pages/landingPages/Pricing.jsx"),
    //route("/how-it-works",  "./pages/landingPages/HowItWorks.jsx"),
    //route("/about",         "./pages/About.jsx"),
    //route("/contact",       "./pages/Contact.jsx"),
    //route("/privacy-policy","./pages/PrivacyPolicy.jsx"),
    //route("/terms",         "./pages/TermsOfUse.jsx"),
    route("*",              "./pages/NotFoundPage.jsx"),
] satisfies RouteConfig;