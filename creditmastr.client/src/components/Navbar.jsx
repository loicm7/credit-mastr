import { Link, NavLink } from "react-router";

const navLinkClass = ({ isActive }) => 
    isActive ? "bg-neutral text-neutral-content text-[15px] font-semibold pointer-events-auto" 
        : "text-[15px] font-semibold pointer-events-auto";

function Navbar({ logo }) {
    return (
        <header className=" flex justify-center sticky top-0 z-10 pointer-events-none">
            <nav className="navbar shadow-sm bg-base-100/60 backdrop-blur-sm rounded-[1.5vw] px-8 
            border-1 border-base-200/20 top-5 w-[780px] pointer-events-auto">
                <div className="navbar-start">


                    <div className="flex items-center">
                        <Link to="/">
                            <img
                                src={logo}
                                alt="Logo"
                                className=" w-auto object-contain h-8 sm:h-10 md:h-10"
                            />
                        </Link>
                        
                    </div>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 flex gap-3">
                        <li>
                            <NavLink className={navLinkClass} to="/pricing" >
                                Pricing
                            </NavLink>
                        </li>
                        {/*<li>
                                    <details>
                                        <summary className="pointer-events-auto">Parent</summary>
                                        <ul className="p-2 bg-base-100 w-40 z-1">
                                            <li><a className="pointer-events-auto">Submenu 1</a></li>
                                            <li><a className="pointer-events-auto">Submenu 2</a></li>
                                        </ul>
                                    </details>
                                </li>*/}
                        <li>
                            <NavLink className={navLinkClass} to="/how-it-works">
                            How it works
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">

                    <button className="pointer-events-auto hidden lg:flex btn bg-blue-600 border-blue-600 text-primary-content">Join the waitlist</button>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-7 w-7 stroke-current"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-4  shadow">
                            <li><a className="pointer-events-auto font-poppins font-medium">Pricing</a></li>
                            <li><a className="pointer-events-auto my-1 font-poppins font-medium">How it work</a></li>
                            <li><button className="btn bg-blue-600 text-primary-content">Join the waitlist</button></li>
                        </ul>
                    </div>


                </div>
            </nav>
        </header>
    );
}

export default Navbar;