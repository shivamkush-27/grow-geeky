import React from 'react';
import { Facebook, Twitter, Linkedin, Search, Circle } from 'lucide-react';
import Amit from '../assets/Amit.jpeg';
import { TAG_LINKS } from '../constant/site';
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const CTA_BTN = TAG_LINKS.slice(0, 8);
    return (
        <div className="bg-white">
            <div className='bg-[#5459E8] w-full text-white rounded-lg mb-4'>
                <div className='p-4'>
                    <h3 className='font-medium text-base leading-4'>Share with your community!</h3>
                    <div className='bg-#5459E8 flex gap-x-4 py-4'>
                        <button className='bg-white p-1 rounded text-[#5459E8]'><Facebook className='fill-[#5459E8] stroke-none' /></button>
                        <button className='bg-white p-1 rounded text-[#5459E8]'><Twitter className='fill-[#5459E8] stroke-none' /></button>
                        <button className='bg-white p-1 rounded text-[#5459E8]'><Linkedin className='fill-[#5459E8] stroke-none' /></button>
                    </div>
                </div>
            </div>
            <div className='mb-8'>
                <button className='w-full bg-[#5459E8] py-2 text-white font-medium rounded-full'>Get unlimited access</button>
            </div>
            <div class="relative mb-4">
                <label class="sr-only">Search</label>
                <div class="relative mt-1">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <Search className='text-black/80 w-4 h-4' />
                    </div>
                    <input type="text" id="table-search" class="border border-[#E6E6E6]/80 text-black text-base font-normal rounded-full w-full pl-10 p-2.5" placeholder="Search" />
                </div>
            </div>
            <div className='my-6'>
                <div className='flex gap-x-2 items-center mb-6'>
                    <Circle className='fill-[#1A8917] stroke-[#1A8917] w-3 h-3' />
                    <h4 className='font-medium text-base leading-4 text-[#292929]'>What We're Reading Today</h4>
                </div>
                <div>
                    <div className="flex items-center mb-3">
                        <img className="overflow-hidden object-cover w-4 h-4 md:w-6 md:h-6 rounded-full " src={Amit} alt="author image" />
                        <p className='ml-2 text-sm font-normal text-[#292929]'>Amit Das</p>
                    </div>
                    <p className='text-base font-medium text-[#191919] mb-3'>Your portfolio is stopping you from getting that job</p>
                    <div className="flex items-center mb-3">
                        <img className="overflow-hidden object-cover w-4 h-4 md:w-6 md:h-6 rounded-full " src={Amit} alt="author image" />
                        <p className='ml-2 text-sm font-normal text-[#292929]'>Amit Das</p>
                    </div>
                    <p className='text-base font-medium text-[#191919] mb-3'>Your portfolio is stopping you from getting that job</p>
                    <div className="flex items-center mb-3">
                        <img className="overflow-hidden object-cover w-4 h-4 md:w-6 md:h-6 rounded-full " src={Amit} alt="author image" />
                        <p className='ml-2 text-sm font-normal text-[#292929]'>Amit Das</p>
                    </div>
                    <p className='text-base font-medium text-[#191919] mb-3'>Your portfolio is stopping you from getting that job</p>
                </div>
                <button className='text-[#1A8917] text-sm font-light hover:underline-offset-2 hover:underline'>See the full list</button>
                <div className='my-4'>
                    <h3 className='font-normal text-base text-[#292929]'>Recommended Topic</h3>
                    <div className='flex flex-wrap gap-3 my-4'>
                        {TAG_LINKS.map((link, index)=>(
                            <span key={index} className='my-2'><NavLink to={link.href} className='bg-[#F2F2F2] py-[10px] px-4 rounded-full text-sm font-normal text-[#292929]'>{link.label}</NavLink></span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar