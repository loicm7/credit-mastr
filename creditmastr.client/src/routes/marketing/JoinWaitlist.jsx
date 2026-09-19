import {useId} from "react";
import {Check, Mail} from "lucide-react";
import {data, useFetcher} from "react-router";
import FAQs from "@/components/FAQs.jsx";

export async function action({request}) {
    const formData = await request.formData();
    console.log('Request:' + formData);
    console.log('formData:' + formData);

    /* verify if the form data are valid */

    const fullname = formData.get("fullname")?.toString().trim()
        .replace(/\s+/g, " ") ?? "";
    const email = formData.get("email")?.toString().trim() ?? "";


    const NAME_REGEX = /^[\p{L} '-]+$/u; // Allow letters (including accented), spaces, hyphens, apostrophes
    const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Verifie si l'email est conforme

    // on crée un objet error qui va contenir toutes les erreurs possible du fullname et de email
    const errors = {};
    //exemple avec $ ou  $$$$$$$$$$$$$ et e ou eeeeeeeeeeee

    // error verification for full name
    if (!fullname) {

        errors.fullname = "Please enter your full name";
    } else if (!NAME_REGEX.test(fullname)) {
        errors.fullname = "Full name can only contain letters, spaces, hyphens, and apostrophes";
    } else if (fullname.length > 30) {
        errors.fullname = "Your full name must be less than 30 characters.";
    } else if (fullname.length < 3) {
        errors.fullname = "Your full name must be at least 3 characters long";
    }


    //error verification for email
    if (!email) {
        errors.email = "Please enter your email address";
    } else if (!EMAIL_REGEX.test(email)) {
        errors.email = "invalid email. Try again";
    }

    if (Object.keys(errors).length > 0) {
        return data({ok: false, errors}, {status: 400});
    }

    /* send form data to mailerlite if they are valid and return response*/
    try {
        const response = await fetch("https://connect.mailerlite.com/api/subscribers",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "Authorization": `Bearer ${process.env.MAILERLITE_API_KEY}`,
                },
                body: JSON.stringify({
                    email,
                    fields: {full_name: fullname},
                    groups: [process.env.MAILERLITE_WAITLIST_GROUP_ID]
                }),
            });

        if (!response.ok) {
            const errorBody = await response.json();
            console.log("Erreur MailerLite:");
            return data(
                {ok: false, errors: {form: errorBody.message ?? "Error occurred"}}, {status: response.status}
            )
        }

        return data({ok: true, fullname, email});
    } catch (err) {
        return data({ok: false, errors: {form: "Network error. Please try again later."}}, {status: 500});
    }

}


function JoinWaitlist() {
    const fullnameId = useId();
    const emailId = useId();

    // we use fetcher form because we do not want to redirect to another route
    const fetcher = useFetcher();
    const isSubscribing = fetcher.state !== "idle";
    const errors = fetcher.data?.errors;

    // min-h-[calc(100vh-6rem)] : attribut a remettre dans la className de la premier section tag en bas au cas ou
    // il un probleme

    return (
        <main className=" isolate  bg-white px-4 py-12 text-slate-900 sm:px-6 lg:px-8 lg:py-16">
            <div
                className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.11),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.08),transparent_28%),linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)]"
            />
            <div
                className="absolute left-1/2 top-10 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-100/60 blur-3xl"
            />
            <div className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-linear-to-b from-transparent to-white"/>

            <section
                className="relative overflow-hidden mx-auto flex  w-full max-w-4xl items-center justify-center mb-50 mt-10">
                <div className="w-full ">
                    <div className="mx-auto max-w-2xl text-center">
                        <span
                            className="relative inline-flex items-center overflow-hidden rounded-full p-[1.5px] bg-slate-100 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
  
                            {/* The real turning angle light element */}
                            <span
                                className="animate-glow-effect absolute -inset-full rounded-full [background:conic-gradient(from_var(--border-angle),transparent_75%,#4285f4_85%,#a142f4_92%,#ea4335_98%,transparent_100%)]"/>

                            {/* The content layer (Masking the center cleanly) */}
                            <span
                                className="z-10 inline-flex items-center rounded-[inherit] bg-white px-4 py-2 text-sm font-semibold text-slate-500 whitespace-nowrap">
                                Get early access
                            </span>
                        </span>

                        <h1 className="mt-6 font-poppins text-4xl font-semibold leading-[0.94] tracking-[-0.05em] text-slate-950 sm:text-5xl md:text-6xl">
                            You don't want to miss what's coming next.
                        </h1>
                        <p className="mx-auto mt-5 max-w-xl font-poppins text-base leading-7 text-slate-600 sm:text-lg">
                            Be the first to know when we launch. Sign up with your full name and email, and we&apos;ll
                            keep you posted on early access.
                        </p>
                    </div>

                    <div className="mx-auto mt-10 max-w-xl ">
                        <div className="rounded-3xl border border-slate-200 bg-white p-5  sm:p-7">
                            {fetcher.data?.ok ? (
                                <div
                                    role="status"
                                    aria-live="polite"
                                    className="flex flex-col items-center px-2 py-6 text-center sm:px-8 sm:py-8"
                                >
                                    <div
                                        className="relative flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 shadow-[0_0_0_12px_rgba(16,185,129,0.08)]">
                                        <Check className="h-10 w-10 stroke-3"/>
                                    </div>
                                    <h2 className="mt-8 font-poppins text-2xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-[2rem]">
                                        We&apos;ve added you to our waiting list!
                                    </h2>
                                    <p className="mt-3 max-w-lg text-sm leading-6 text-slate-600 sm:text-base">
                                        We&apos;ll let you know when Creditmastr is ready. Thank you.
                                    </p>

                                    <div
                                        className="mt-8 w-full rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:p-5">
                                        <div
                                            className="flex items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-sm">
                                            <div
                                                className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                                                <Mail className="h-4 w-4"/>
                                            </div>
                                            <div className="min-w-0 text-left">
                                                <p className="truncate font-medium text-slate-900">{fetcher.data.email}</p>
                                                <p className="text-xs uppercase  text-slate-500">
                                                    {fetcher.data.fullname}
                                                </p>
                                            </div>
                                            <div
                                                className="ml-auto inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700">
                                                Confirmed
                                            </div>
                                        </div>

                                        <p className="mt-4 text-sm leading-6 text-slate-500">
                                            You&apos;re on the list for launch updates and beta access.
                                        </p>
                                    </div>
                                    
                                </div>
                            ) : (
                                <fetcher.Form method="post" noValidate className="space-y-4">
                                    <div className="flex flex-col space-y-2">
                                        <label htmlFor={fullnameId}
                                               className="font-poppins text-md font-medium text-slate-700">
                                            Full name
                                        </label>
                                        <input
                                            id={fullnameId}
                                            name="fullname"
                                            type="text"
                                            autoComplete="name"
                                            minLength={3}
                                            maxLength={30}
                                            required
                                            placeholder="Your full name"
                                            aria-invalid={errors?.fullname ? "true" : undefined}
                                            aria-describedby={errors?.fullname ? "fullname-error" : undefined}
                                            className={`w-full rounded-xl border  bg-slate-50 px-4 py-3 text-slate-950 placeholder:text-slate-400 outline-none transition  focus:bg-white focus:ring-4  
                                            ${
                                                errors?.fullname
                                                    ? "border-red-500 focus:border-red-500 focus:ring-red-100"
                                                    : "border-slate-200 focus:border-blue-500 focus:ring-blue-100"
                                            }`}
                                        />
                                        {errors?.fullname && <p id="fullname-error"
                                                                className="text-sm font-medium text-red-600">{errors.fullname}</p>}
                                    </div>

                                    <div className="flex flex-col space-y-2">
                                        <label htmlFor={emailId}
                                               className="text-md font-poppins font-medium text-slate-700">
                                            Email
                                        </label>
                                        <input
                                            id={emailId}
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            required
                                            placeholder="you@example.com"
                                            aria-invalid={errors?.email ? "true" : undefined}
                                            aria-describedby={errors?.email ? "email-error" : undefined}
                                            className={`w-full rounded-xl border  bg-slate-50 px-4 py-3 text-slate-950 placeholder:text-slate-400 outline-none transition  focus:bg-white focus:ring-4  
                                            ${
                                                errors?.email
                                                    ? "border-red-500 focus:border-red-500 focus:ring-red-100"
                                                    : "border-slate-200 focus:border-blue-500 focus:ring-blue-100"
                                            }`}
                                        />
                                        {errors?.email && <p id="email-error"
                                                             className="text-sm font-medium text-red-600">{errors.email}</p>}
                                    </div>

                                    <button
                                        disabled={isSubscribing}
                                        type="submit"
                                        className="btn btn-primary mt-2 w-full rounded-full border-0 py-3.5 text-base font-semibold shadow-[0_18px_40px_-20px_rgba(37,99,235,0.7)]"
                                    >
                                        {isSubscribing ? "Submit..." : "Submit"}
                                    </button>
                                    {errors?.form && <p className="text-sm font-medium text-red-600">{errors.form}</p>}

                                </fetcher.Form>
                            )}
                        </div>
                    </div>

                </div>
            </section>
            <FAQs/>
        </main>
    );
}

export default JoinWaitlist