import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";

function BackHomeButton({ className = "" }) {
    return (
        <Link
            to="/"
            className={`btn min-h-11 rounded-full border-slate-200 px-5 text-slate-700 shadow-none hover:border-blue-500 hover:bg-blue-50 hover:text-blue-700 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-200 ${className}`}
        >
            <ArrowLeft aria-hidden="true" className="h-4 w-4"/>
            Back to home
        </Link>
    );
}

export default BackHomeButton;