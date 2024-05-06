import React from 'react';
import blog1 from '../assets/blog1.png';
import Amit from '../assets/Amit.jpeg';
import Sidebar from '../components/Sidebar';
import BookmarkButton from '../components/BookmarkButton';
import { Ellipsis } from 'lucide-react';

const Home = () => {
  return (
    <div className="relative w-full px-2 mx-auto lg:max-w-7xl mt-4 sm:px-10 md:px-12 lg:px-5">
      <div className="overflow-x-hidden lg:py-8">
        <div className="lg:container flex justify-between mx-auto gap-x-8">
          <div className="w-full lg:w-9/12 lg:ml-2">
            <div className="relative flex w-full max-w-4xl flex-col p-2 rounded-[5px] bg-white bg-clip-border text-gray-700 shadow-[0px_5px_20px_0px_#5459e861] ">
              <div className="relative overflow-hidden rounded-[5px] bg-blue-gray-500 bg-clip-border text-white max-h-52">
                <img
                  src="https://blog.luyencode.net/wp-content/uploads/2018/11/baitap-javascript-11-1024x536.png" alt="Javascript" className='w-full object-cover' />
              </div>
              <div className="py-4">
                <div className="mb-3 flex items-center justify-between">
                  <h5 className="block text-xs font-medium leading-snug text-[#6E6E6E] antialiased">
                    3 Min Read
                  </h5>
                  <a href='#' className="flex items-center gap-1.5 text-xs font-bold leading-relaxed text-[#5459E8] antialiased">
                    Read Full
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-move-right"><path d="M18 8L22 12L18 16" /><path d="M2 12H22" /></svg>
                  </a>
                </div>
                <div className='flex mt-2 items-center'>
                  <a href="#" className='block text-xs font-medium text-[#5459E8] antialiased'>Front-end</a>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#6E6E6E" stroke="#6E6E6E" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-dot"><circle cx="12.1" cy="12.1" r="1" /></svg>
                  <h5 className="block text-xs font-medium text-[#6E6E6E] antialiased">
                    3 Min Read
                  </h5>
                </div>
                <h2 className='font-bold text-lg text-[#2C2C2C]'>CSS Grid</h2>
                <p className="block w-96 font-sans text-sm font-normal leading-relaxed text-[#6E6E6E] antialiased">
                  The CSS Grid Layout Module offers a grid-based layout system, with rows and columns, making it easier to design web pages without having to use floats and positioning.
                </p>
              </div>
            </div>
            <div className='my-6'>
              <div className="relative flex w-full max-w-4xl flex-col p-2.5 rounded bg-white bg-clip-border text-gray-700 shadow-[0px_5px_20px_0px_#5459e861]">
                <div className="md:flex gap-x-6 md:mr-0 lg:mr-10 md:ml-2">
                  <div className="md:flex items-center">
                    <div className="lg:pr-14">
                      <div className="flex items-center">
                        <img className="overflow-hidden object-cover w-4 h-4 md:w-6 md:h-6 rounded-full " src={Amit} alt="author image" />
                        <div className="flex ml-2 text-sm font-normal text-[#292929]">
                          <p>Amit Das</p>
                          <h5 className="block ml-2 text-sm font-light text-[#757575] antialiased">
                            4 days ago
                          </h5>
                        </div>
                      </div>
                      <h2 className='mt-4 font-semibold text-xl text-[#191919]'>Your portfolio is stopping you from getting that job</h2>
                      <p className="mt-2 text-base font-normal ">An intense way to learn about the process and practice your designs skills — My 1st hackathon have been on my mind since I heard it was a good way to gain experience as a junior UX designer. As my portfolio...</p>
                      <div className='my-5 flex justify-between items-center'>
                        <div className='flex items-center gap-x-3'>
                          <button className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-[#5459E8]">#portfolio</button>
                          <h5 className="block text-xs font-medium text-[#6E6E6E] antialiased">
                            3 Min Read
                          </h5>
                          <h6 className="block text-xs font-medium text-[#6E6E6E] antialiased">
                            Selected for you
                          </h6>
                        </div>
                        <div className='flex items-center gap-x-3'>
                          <BookmarkButton />
                          <span className='text-[#191919]'><Ellipsis /></span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="max-w-52 md:flex  items-center hidden">
                    <img className="w-96" src={blog1} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Sidebar*/}
          <div className="hidden w-3/12 lg:block">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
