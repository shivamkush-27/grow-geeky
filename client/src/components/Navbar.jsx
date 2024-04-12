import { useState } from "react";
import logo from "../assets/logo.png";
import { Search } from "lucide-react";
import { NavLink } from "react-router-dom";
import '../App.css';

const Navbar = () => {
  const [navIsOpened, setNavIsOpened] = useState(false);
  const closeNavbar = () => {
    setNavIsOpened(false);
  };

  const toggleNavbar = () => {
    setNavIsOpened((navIsOpened) => !navIsOpened);
  };
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        aria-hidden={true}
        onClick={() => {
          closeNavbar();
        }}
        className={`fixed bg-gray-800/40 inset-0 z-30 ${navIsOpened ? "lg:hidden" : "hidden lg:hidden"}`}
      />
      <header className="sticky top-0 z-40 flex items-center w-full h-20 border-b border-b-gray-100 bg-white/80 backdrop-filter backdrop-blur-xl">
        <nav className="relative flex items-center justify-between w-full px-5 mx-auto lg:max-w-7xl sm:px-10 md:px-12 lg:px-5 gap-x-5">
          <div className="flex items-center min-w-max">
            <NavLink to="/" className="relative flex items-center gap-2.5">
              <span className="text-2xl cursor-pointer">
                <img src={logo} className="inline h-16 text-black" alt="Grow Geeky" />
              </span>
            </NavLink>
          </div>
          <div
            className={`
        absolute top-full left-0 bg-white lg:bg-transparent border-b border-gray-200 dark:border-gray-800 py-8 lg:py-0 px-5 sm:px-10 md:px-12 lg:px-0 lg:border-none w-full lg:top-0 lg:relative lg:w-max lg:flex lg:transition-none duration-300 ease-linear gap-x-6
        ${navIsOpened ? "visible opacity-100 translate-y-0" : "translate-y-10 opacity-0 invisible lg:visible lg:translate-y-0 lg:opacity-100"}
        `}
          >
            <ul className="flex flex-col gap-10 text-black lg:flex-row lg:items-center lg:w-full lg:justify-center">
              <li>
                <NavLink
                  to="/"
                  className="relative py-2.5 duration-300 ease-linear hover:text-[#5459E8] after:absolute after:w-full after:left-0 after:bottom-0 after:h-px after:rounded-md after:origin-left after:ease-linear after:duration-300 after:scale-x-0 hover:after:scale-x-100 after:bg-[#5459E8]"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/category"
                  className="relative py-2.5 duration-300 ease-linear hover:text-[#5459E8] after:absolute after:w-full after:left-0 after:bottom-0 after:h-px after:rounded-md after:origin-left after:ease-linear after:duration-300 after:scale-x-0 hover:after:scale-x-100 after:bg-[#5459E8]"
                >
                  Category{" "}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/podcast"
                  className="relative py-2.5 duration-300 ease-linear hover:text-[#5459E8] after:absolute after:w-full after:left-0 after:bottom-0 after:h-px after:rounded-md after:origin-left after:ease-linear after:duration-300 after:scale-x-0 hover:after:scale-x-100 after:bg-[#5459E8]"
                >
                  Podcast
                </NavLink>
              </li>
              <li className="block md:hidden">
                <div className="flex w-full rounded bg-white border">
                  <input className=" w-full bg-transparent px-2 py-1 text-black outline-none focus:outline-none " type="search" name="search" placeholder="Search Here..." />
                  <button type="submit" className="m-2 rounded bg-[#5459E8] px-4 py-2 text-white">
                    <Search />
                  </button>
                </div>
              </li>
              <li className="hidden md:block">
                <button onClick={() => setOpen(!open)} className="relative py-0 lg:py-2.5">
                  <Search />
                </button>
                {open && (
                  <div className="z-50 lg:w-80 w-full lg:absolute lg:left-[115px] lg:top-12 mt-4">
                    <form className="flex w-full text-black">
                      <input type="text" placeholder="Search Here" className="px-3 py-3 border border-[#5459E8] border-r-0 flex w-full bg-white" />
                      <button aria-label="search btn" className="text-white bg-[#5459E8] px-3 py-3 min-w-max">
                        <Search />
                      </button>
                    </form>
                  </div>
                )}
              </li>
            </ul>
            <div className="flex flex-col gap-4 mt-10 sm:flex-row sm:items-center lg:min-w-max lg:mt-0">
              <NavLink to="/signup" className="relative flex justify-center px-6 py-2 bg-[#5459E8] text-white">
                <span className="relative">Sign Up</span>
              </NavLink>
            </div>
          </div>
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => {
                toggleNavbar();
              }}
              aria-label="toggle navbar"
              className="relative py-3 pl-3 outline-none"
            >
              <span
                aria-hidden={true}
                className={`
            flex h-0.5 w-6 rounded bg-gray-800 transition duration-300
            ${navIsOpened ? "rotate-45 translate-y-[.324rem]" : ""}
        `}
              ></span>
              <span
                aria-hidden={true}
                className={`
            mt-1 flex h-0.5 w-6 rounded bg-gray-800 transition duration-300
            ${navIsOpened ? "hidden" : ""}
        `}
              ></span>
              <span
                aria-hidden={true}
                className={`
            mt-1 flex h-0.5 w-6 rounded bg-gray-800 transition duration-300
            ${navIsOpened ? "-rotate-45 -translate-y-[.054rem]" : ""}
            `}
              >
                {" "}
              </span>
            </button>
          </div>
        </nav>
      </header>
      <div className="bg-[#dfdffb] hidden lg:block z-40">
        <div className="flex items-center justify-between w-screen px-5 py-8 mx-auto overflow-x-auto lg:max-w-7xl gap-x-5">
          <button className="bg-white text-[#5459E8] font-medium py-2 px-6 rounded-[10px] shrink-0">BUTTON CTA</button>
          <button className="bg-white text-[#5459E8] font-medium py-2 px-6 rounded-[10px] shrink-0">BUTTON CTA</button>
          <button className="bg-white text-[#5459E8] font-medium py-2 px-6 rounded-[10px] shrink-0">BUTTON CTA</button>
          <button className="bg-white text-[#5459E8] font-medium py-2 px-6 rounded-[10px] shrink-0">BUTTON CTA</button>
          <button className="bg-white text-[#5459E8] font-medium py-2 px-6 rounded-[10px] shrink-0">BUTTON CTA</button>
          <button className="bg-white text-[#5459E8] font-medium py-2 px-6 rounded-[10px] shrink-0">BUTTON CTA</button>
          <button className="bg-white text-[#5459E8] font-medium py-2 px-6 rounded-[10px] shrink-0">BUTTON CTA</button>
          <button className="bg-white text-[#5459E8] font-medium py-2 px-6 rounded-[10px] shrink-0">BUTTON CTA</button>
          <button className="bg-white text-[#5459E8] font-medium py-2 px-6 rounded-[10px] shrink-0">BUTTON CTA</button>
          <button className="bg-white text-[#5459E8] font-medium py-2 px-6 rounded-[10px] shrink-0">BUTTON CTA</button>
          <button className="bg-white text-[#5459E8] font-medium py-2 px-6 rounded-[10px] shrink-0">BUTTON CTA</button>
          <button className="bg-white text-[#5459E8] font-medium py-2 px-6 rounded-[10px] shrink-0">BUTTON CTA</button>
          <button className="bg-white text-[#5459E8] font-medium py-2 px-6 rounded-[10px] shrink-0">BUTTON CTA</button>
        </div>
      </div>
    </>
  );
};
export default Navbar;
