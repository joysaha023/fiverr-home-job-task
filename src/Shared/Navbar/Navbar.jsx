import React from "react";
import { TbWorld } from "react-icons/tb";
import { BiDollar } from "react-icons/bi";

const Navbar = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Join Fiverr</a>
              </li>
              <li>
                <a>Sign in</a>
              </li>
              <li>
                <a>Browse categories</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Explore</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Fiverr Pro</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>General</a>
              </li>
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>English <TbWorld /></a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a><BiDollar /> USD</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <a className="text-xl">
            <img
              className="w-24"
              src="https://i.ibb.co/CQyg2N4/images.png"
              alt=""
            />
          </a>
        </div>
        
        <div className="navbar-end gap-3">
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <details>
                <summary>Fiverr Pro</summary>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary>Explore</summary>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a className="hover:text-[#19A463]">
                <TbWorld /> English
              </a>
            </li>
            <li>
              <a className="hover:text-[#19A463]">Become a Seller</a>
            </li>
          </ul>
        </div>
          <a href="" className="hidden md:flex hover:text-[#19A463]">
            Sign In
          </a>
          <a className="btn btn-outline text-[#19A463] border-[#19A463] hover:bg-[#19A463] hover:border-none">Join</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
