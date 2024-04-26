import React from 'react';
import blog1 from '../assets/blog1.png';
import Amit from '../assets/Amit.jpeg';

const Home = () => {
  return (
    <div className="relative flex items-center justify-between w-full px-5 mx-auto lg:max-w-7xl sm:px-10 md:px-12 lg:px-5 gap-x-5">
      <div className="overflow-x-hidden py-8 bg-slate-300">
        <div className="container flex justify-between mx-auto">
          <div className="w-full lg:w-8/12">
            <div className="relative flex w-full max-w-4xl flex-col p-2.5 rounded bg-white bg-clip-border text-gray-700 shadow-[0px_5px_20px_0px_#5459e861] ">
              <div className="relative overflow-hidden rounded-lg bg-blue-gray-500 bg-clip-border text-white max-h-52">
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
            <div className='my-5'>
              <div className="relative flex w-full max-w-4xl flex-col p-2.5 rounded bg-white bg-clip-border text-gray-700 shadow-[0px_5px_20px_0px_#5459e861]">
                <div class="md:flex gap-x-8 md:mr-0 mr-10 ml-2">
                  <div class="md:flex items-center">
                    <div class="pr-14">
                      <div class="flex items-center">
                        <img class="overflow-hidden object-cover w-4 h-4 md:w-6 md:h-6 rounded-full " src={Amit} alt="author image" />
                        <div class="flex ml-2 text-sm font-normal text-[#292929]">
                          <p>Amit Das</p>
                          <h5 className="block ml-2 text-sm font-light text-[#757575] antialiased">
                            4 days ago
                          </h5>
                        </div>
                      </div>
                      <h2 className='mt-4 font-semibold text-xl text-[#191919]'>Your portfolio is stopping you from getting that job</h2>
                      <p class="mt-2 text-base font-normal ">An intense way to learn about the process and practice your designs skills — My 1st hackathon have been on my mind since I heard it was a good way to gain experience as a junior UX designer. As my portfolio...</p>
                      <div className='my-5 flex justify-between items-center'>
                      <span class="inline-flex items-center gap-1 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-[#5459E8]">
                        #portfolio
                      </span>
                    </div>
                    </div>
                  </div>
                  <div class="max-w-52 md:flex  items-center hidden">
                    <img class="w-96" src={blog1} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Sidebar Starts */}
          <div className="hidden w-4/12 -mx-8 lg:block">
            <div className="flex flex-col max-w-sm px-6 py-4 mx-auto bg-white rounded-lg shadow-md">
              <ul className="-mx-4">
                <li className="flex items-center"><img
                  src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=731&amp;q=80"
                  alt="avatar" className="object-cover w-10 h-10 mx-4 rounded-full" />
                  <p><a href="#" className="mx-1 font-bold text-gray-700 hover:underline">Alex John</a><span
                    className="text-sm font-light text-gray-700">Created 23 Posts</span></p>
                </li>
                <li className="flex items-center mt-6"><img
                  src="https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=333&amp;q=80"
                  alt="avatar" className="object-cover w-10 h-10 mx-4 rounded-full" />
                  <p><a href="#" className="mx-1 font-bold text-gray-700 hover:underline">Jane Doe</a><span
                    className="text-sm font-light text-gray-700">Created 52 Posts</span></p>
                </li>
                <li className="flex items-center mt-6"><img
                  src="https://images.unsplash.com/photo-1531251445707-1f000e1e87d0?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=281&amp;q=80"
                  alt="avatar" className="object-cover w-10 h-10 mx-4 rounded-full" />
                  <p><a href="#" className="mx-1 font-bold text-gray-700 hover:underline">Lisa Way</a><span
                    className="text-sm font-light text-gray-700">Created 73 Posts</span></p>
                </li>
                <li className="flex items-center mt-6"><img
                  src="https://images.unsplash.com/photo-1500757810556-5d600d9b737d?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=735&amp;q=80"
                  alt="avatar" className="object-cover w-10 h-10 mx-4 rounded-full" />
                  <p><a href="#" className="mx-1 font-bold text-gray-700 hover:underline">Steve Matt</a><span
                    className="text-sm font-light text-gray-700">Created 245 Posts</span></p>
                </li>
                <li className="flex items-center mt-6"><img
                  src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=373&amp;q=80"
                  alt="avatar" className="object-cover w-10 h-10 mx-4 rounded-full" />
                  <p><a href="#" className="mx-1 font-bold text-gray-700 hover:underline">Khatab
                    Wedaa</a><span className="text-sm font-light text-gray-700">Created 332 Posts</span>
                  </p>
                </li>
              </ul>
            </div>
            <div className="px-8 mt-10">
              <h1 className="mb-4 text-xl font-bold text-gray-700">Categories</h1>
              <div className="flex flex-col max-w-sm px-4 py-6 mx-auto bg-white rounded-lg shadow-md">
                <ul>
                  <li><a href="#" className="mx-1 font-bold text-gray-700 hover:text-gray-600 hover:underline">-
                    AWS</a></li>
                  <li className="mt-2"><a href="#"
                    className="mx-1 font-bold text-gray-700 hover:text-gray-600 hover:underline">-
                    Laravel</a></li>
                  <li className="mt-2"><a href="#"
                    className="mx-1 font-bold text-gray-700 hover:text-gray-600 hover:underline">- Vue</a>
                  </li>
                  <li className="mt-2"><a href="#"
                    className="mx-1 font-bold text-gray-700 hover:text-gray-600 hover:underline">-
                    Design</a></li>
                  <li className="flex items-center mt-2"><a href="#"
                    className="mx-1 font-bold text-gray-700 hover:text-gray-600 hover:underline">-
                    Django</a></li>
                  <li className="flex items-center mt-2"><a href="#"
                    className="mx-1 font-bold text-gray-700 hover:text-gray-600 hover:underline">- PHP</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="px-8 mt-10">
              <h1 className="mb-4 text-xl font-bold text-gray-700">Recent Post</h1>
              <div className="flex flex-col max-w-sm px-8 py-6 mx-auto bg-white rounded-lg shadow-md">
                <div className="flex items-center justify-center"><a href="#"
                  className="px-2 py-1 text-sm text-green-100 bg-gray-600 rounded hover:bg-gray-500">Laravel</a>
                </div>
                <div className="mt-4"><a href="#" className="text-lg font-medium text-gray-700 hover:underline">Build
                  Your New Idea with Laravel Freamwork.</a></div>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center"><img
                    src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=731&amp;q=80"
                    alt="avatar" className="object-cover w-8 h-8 rounded-full" /><a href="#"
                      className="mx-3 text-sm text-gray-700 hover:underline">Alex John</a></div><span
                        className="text-sm font-light text-gray-600">Jun 1, 2020</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
