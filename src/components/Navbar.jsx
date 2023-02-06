import React from "react";
import Link from "next/link";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";

const Navbar = ({ toggleMode }) => {
  return (
    <div className=" relative bg-slate-600 dark:bg-gray-900  py-5 lg:py-3">
      <div className=" portfolio-container">
        <nav className=" flex items-center justify-between">
          <div>
            <h1 className="font-burtons text-2xl">Logo</h1>
          </div>
          <div className=" flex items-center">
            <ul className=" flex items-center justify-center gap-3">
              <li
                className=" flex items-center cursor-pointer"
                onClick={toggleMode}
              >
                <BsFillMoonStarsFill />
              </li>
              <li className=" flex items-center">
                <BsFillSunFill />
              </li>
              <li className=" flex items-center">
                <Link
                  href="#"
                  className=" text-slate-100 font-bold text-xl bg-gradient-to-r from-cyan-500 to-teal-500 rounded-md p-2 "
                >
                  Hire Me
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
