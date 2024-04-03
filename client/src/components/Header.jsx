import logo from '../assets/logo.png'
import { Search, AlignJustify, X } from 'lucide-react';
import { NavLink } from 'react-router-dom/dist/umd/react-router-dom.development'
import React, { useState, useEffect } from "react";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuToggle = () => {
        setIsOpen(!isOpen);
    };
      return (
        <nav className='p-5 bg-white shadow md:flex md:items-center md:justify-between'>
            <div className='flex justify-between items-center'>
                <span className='text-2xl cursor-pointer'>
                    <img src={logo} className='text-black h-16 inline' alt="Grow Geeky" />    
                </span> 
                <button className='text-3xl mx-2 cursor-pointer md:hidden block' onClick={menuToggle}>
                    {isOpen ? <X /> : <AlignJustify />}
                </button>  
            </div>    
            <ul className='md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500'>
                <li className='mx-4 my-6 md:my-0'>
                    <NavLink to="/" className='text-xl hover:text-[#5459E8] duration-500' >Home</NavLink>
                </li>    
                <li className='mx-4 my-6 md:my-0'>
                    <NavLink to="/category" className='text-xl hover:text-[#5459E8] duration-500' >Category</NavLink>
                </li>    
                <li className='mx-4 my-6 md:my-0'>
                    <NavLink to="/podcast" className='text-xl hover:text-[#5459E8] duration-500' >Podcast</NavLink>
                </li>    
                <li className='mx-4 my-6 md:my-0 cursor-pointer'>
                    <Search />
                </li>    
                <button className='bg-[#5459E8] hover:bg-[#989bf1] text-white duration-500 px-6 py-2 mx-4'>
                    Sign Up
                </button>
            </ul>    
        </nav>
      )
    
}

export default Header