import React from "react";

function Navbar() {
  return (
    <nav className="bg-white/10 backdrop-blur-md text-black px-15 py-6 fixed top-0 left-0 w-full z-50">
      <div className="flex place-content-between items-center">
        <div>
          <img
            className="w-30"
            src="https://netlinks.af/_astro/logo.DUySRYvR_2j5iRN.avif"
            alt="image of logo"
          />
        </div>
        <div className="flex gap-8 font-bold">
          <a
            className="hover:bg-violet-100 px-3 rounded-2xl transition-transform duration-300 hover:-translate-y-1 "
            href="#"
          >
            Solutions
          </a>
          <a
            className="hover:bg-violet-100 px-3 rounded-2xl transition-transform duration-300 hover:-translate-y-1"
            href="#"
          >
            Services
          </a>
          <a
            className="hover:bg-violet-100 px-3 rounded-2xl transition-transform duration-300 hover:-translate-y-1"
            href="#"
          >
            Industries
          </a>
          <a
            className="hover:bg-violet-100 px-3 rounded-2xl transition-transform duration-300 hover:-translate-y-1"
            href="#"
          >
            Partners
          </a>
          <a
            className="hover:bg-violet-100 px-3 rounded-2xl transition-transform duration-300 hover:-translate-y-1"
            href="#"
          >
            Company
          </a>
        </div>
        <div>
          <button className="bg-violet-300 p-2 px-6 rounded-4xl transition-transform duration-300 hover:-translate-y-1 shadow-xl/30 ">
            Get Start
          </button>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
