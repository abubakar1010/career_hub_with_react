import { NavLink } from "react-router-dom";


const Nav = () => {
    return (
        <>


    <nav className=" bg-gradient-to-r to-[rgba(126,144,254,0.05)] from-[rgba(152,115,255,0.05)] ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 py-14 ">
            <div>
                <h1 className=" text-2xl font-bold text-[#1A1919] ">CareerHub</h1>
            </div>
            <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                <button type="button" className="text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-6 py-3 text-center bg-gradient-to-r to-[#7E90FE]  from-[#9873FF]">Get started</button>
                <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden  focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400  dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
            </div>
            <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row">
                    <li>
                        <NavLink to="/" className="block py-2 px-3  rounded md:p-0 " aria-current="page">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/statistics" className="block py-2 px-3 rounded  md:p-0  ">Statistics</NavLink>
                    </li>
                    <li>
                        <NavLink to="/jobs" className="block py-2 px-3 rounded  md:p-0  ">Applied Jobs</NavLink>
                    </li>
                    <li>
                        <NavLink to="/blog" className="block py-2 px-3 rounded  md:p-0  ">Blog</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

        </>
    );
};

export default Nav;