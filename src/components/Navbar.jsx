import React, { useState } from "react";
import viteLogo from "../assets/vite.svg";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav className="h-25 w-full bg-bright-blue">
      <div className="flex flex-wrap justify-between items-center px-4 py-4 mx-auto max-w-screen-xl">
        <a href="/" className="mr-5 ml-5">
          <img
            src={viteLogo}
            className="w-30 h-18 md:block"
            alt="Devsafio Logo"
          />
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-300 rounded-lg md:hidden hover:bg-gray-100 hover:text-bright-blue focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={() => setOpenMenu(!openMenu)}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div className={`${!openMenu && "hidden"} w-full md:block md:w-auto`}>
          <div className="whitespace-nowrap font-medium flex flex-col items-center p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:gap-x-8 md:mt-0 md:border-0  dark:border-gray-700">
            <>
              <a
                href="/welcome"
                className="text-white w-full hover:bg-transparent hover:divide-amber-300 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 outline outline-orange-500 dark:hover:bg-slate-800 focus:outline-none flex-grow"
              >
                Dashboard
              </a>
              <a
                href="/welcome"
                className="text-white w-full hover:bg-gray-100 hover:text-blue-300 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2  dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 flex-grow"
              >
                Dashboard
              </a>
            </>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
