import React from 'react';
import { Facebook, Twitter, Linkedin, Search } from 'lucide-react';

const Sidebar = () => {
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
            </div>
    )
}

export default Sidebar