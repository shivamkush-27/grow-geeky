import { useState } from "react";
import logo from '../assets/logo.png'
import { Search } from 'lucide-react';
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [navIsOpened, setNavIsOpened] = useState(false)
    const closeNavbar = () => {
        setNavIsOpened(false)
    }

    const toggleNavbar = () => {
        setNavIsOpened(navIsOpened => !navIsOpened)
    }
    return (
        <>
            <div aria-hidden={true} onClick={() => {
                closeNavbar()
            }} className={
                `fixed bg-gray-800/40 inset-0 z-30 ${navIsOpened ? "lg:hidden" : "hidden lg:hidden"}`
            } />
            <header className="sticky top-0 w-full flex items-center h-20 border-b border-b-gray-100 dark:border-b-gray-900 z-40 bg-white/80 dark:bg-gray-950/80 backdrop-filter backdrop-blur-xl">
                <nav className="relative mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex gap-x-5 justify-between items-center">
                    <div className="flex items-center min-w-max">
                        <NavLink to="/" className="relative flex items-center gap-2.5">
                            <span className='text-2xl cursor-pointer'>
                                <img src={logo} className='text-black h-16 inline' alt="Grow Geeky" />
                            </span>
                        </NavLink>
                    </div>
                    <div className={`
        absolute top-full left-0 bg-white lg:bg-transparent border-b border-gray-200 dark:border-gray-800 py-8 lg:py-0 px-5 sm:px-10 md:px-12 lg:px-0 lg:border-none w-full lg:top-0 lg:relative lg:w-max lg:flex lg:transition-none duration-300 ease-linear gap-x-6
        ${navIsOpened ? "visible opacity-100 translate-y-0" : "translate-y-10 opacity-0 invisible lg:visible lg:translate-y-0 lg:opacity-100"}
        `}>
                        <ul className="flex flex-col lg:flex-row gap-10 lg:items-center text-black lg:w-full lg:justify-center">
                            <li>
                                <NavLink to="/" className="relative py-2.5 duration-300 ease-linear hover:text-[#5459E8] after:absolute after:w-full after:left-0 after:bottom-0 after:h-px after:rounded-md after:origin-left after:ease-linear after:duration-300 after:scale-x-0 hover:after:scale-x-100 after:bg-[#5459E8]">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/category" className="relative py-2.5 duration-300 ease-linear hover:text-[#5459E8] after:absolute after:w-full after:left-0 after:bottom-0 after:h-px after:rounded-md after:origin-left after:ease-linear after:duration-300 after:scale-x-0 hover:after:scale-x-100 after:bg-[#5459E8]">Category </NavLink>
                            </li>
                            <li>
                                <NavLink to="/podcast" className="relative py-2.5 duration-300 ease-linear hover:text-[#5459E8] after:absolute after:w-full after:left-0 after:bottom-0 after:h-px after:rounded-md after:origin-left after:ease-linear after:duration-300 after:scale-x-0 hover:after:scale-x-100 after:bg-[#5459E8]">Podcast</NavLink>
                            </li>
                            <li>
                                <NavLink to="/search" className="relative py-2.5"><Search /></NavLink>
                            </li>
                            
                        </ul>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-4  lg:min-w-max mt-10 lg:mt-0">
                            <NavLink to="/signup" className="relative flex justify-center px-6 py-2 bg-[#5459E8] text-white">
                                <span className="relative">
                                    Sign Up
                                </span>
                            </NavLink>
                        </div>
                    </div>
                    <div className="flex items-center lg:hidden">
                        <button onClick={() => {
                            toggleNavbar()
                        }} aria-label='toggle navbar' className="outline-none border-l border-l-indigo-100 pl-3 relative py-3">
                            <span aria-hidden={true} className={`
            flex h-0.5 w-6 rounded bg-gray-800 transition duration-300
            ${navIsOpened ? "rotate-45 translate-y-[.324rem]" : ""}
        `}>
                            </span>
                            <span aria-hidden={true} className={`
            mt-1 flex h-0.5 w-6 rounded bg-gray-800 transition duration-300
            ${navIsOpened ? "hidden" : ""}
        `}>
                            </span>
                            <span aria-hidden={true} className={`
            mt-1 flex h-0.5 w-6 rounded bg-gray-800 transition duration-300
            ${navIsOpened ? "-rotate-45 -translate-y-[.054rem]" : ""}
            `} > </span>
                        </button>
                    </div>
                </nav>
            </header>
            <div className="bg-[#dfdffb] hidden lg:block z-40">
                <div className="mx-auto lg:max-w-7xl w-full px-5 py-8 flex gap-x-5 justify-between items-center">
                    <button class="bg-white text-[#5459E8] font-medium py-2 px-6 rounded-[10px]">
                        BUTTON CTA
                    </button>
                    <button class="bg-white text-[#5459E8] font-medium py-2 px-6 rounded-[10px]">
                        BUTTON CTA
                    </button>
                    <button class="bg-white text-[#5459E8] font-medium py-2 px-6 rounded-[10px]">
                        BUTTON CTA
                    </button>
                    <button class="bg-white text-[#5459E8] font-medium py-2 px-6 rounded-[10px]">
                        BUTTON CTA
                    </button>
                    <button class="bg-white text-[#5459E8] font-medium py-2 px-6 rounded-[10px]">
                        BUTTON CTA
                    </button>
                    <button class="bg-white text-[#5459E8] font-medium py-2 px-6 rounded-[10px]">
                        BUTTON CTA
                    </button>
                    <button class="bg-white text-[#5459E8] font-medium py-2 px-6 rounded-[10px]">
                        BUTTON CTA
                    </button>
                </div>
            </div>
        </>
    )
}
export default Navbar