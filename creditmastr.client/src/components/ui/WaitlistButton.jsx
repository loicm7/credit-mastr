import { Link } from "react-router";

function WaitlistButton() {
  return (
      <div className="flex justify-start sm:justify-center md:justify-center lg:justify-start">
          <Link to="/join-waitlist" className="btn btn-primary rounded-full py-6 px-7 shadow-none">
              Join the waitlist
          </Link>
      </div>
  );
}

export default WaitlistButton;
