import React from 'react'
import logo from "../assets/logo.png";
import loginImg from "../assets/loginImg.png";
import { NavLink } from "react-router-dom";

const SignIn = () => {
  return (
    <div>
      <div className="flex flex-wrap justify-between sm:px-10 md:px-3 gap-x-4 w-full px-5 mb-6 mx-auto lg:max-w-7xl">
        <div className="flex w-full flex-col md:w-[50%]">
          <div className="flex justify-center pt-6 md:justify-start">
            <NavLink to="/" className="text-2xl font-bold text-blue-600">
              <img src={logo} className="inline h-16 text-black" alt="Grow Geeky" />
            </NavLink>
          </div>
          <div className="flex flex-col justify-center px-2 pt-4 md:px-4 md:pt-8 md:justify-start lg:w-full">
            <p className="text-center text-4xl font-semibold md:text-left md:leading-tight">Login</p>
            <p className="mt-3 text-center text-[#313131] text-base font-normal md:text-left">
              Login to access your Grow Geeky account
            </p>
            <form className="flex flex-col items-stretch pt-3 md:pt-8">

              <div className="grid gap-3">
                <div className='relative'>
                  <input type="email" id="email" className="border-1 peer block w-full appearance-none rounded-lg border border-[#79747E] bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-black focus:border-[#5459E8] focus:outline-none focus:ring-0" />
                  <label for="email" className="absolute top-2 left-1.5 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-1 text-sm text-black duration-300 peer-placeholder-shown:top-[30%] peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-[#5459E8]"> Email </label>
                </div>
              </div>
              <div className="flex flex-col pt-5">
                <div className="relative">
                  <input type="password" id="password" className="border-1 peer block w-full appearance-none rounded-lg border border-[#79747E] bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-black focus:border-[#5459E8] focus:outline-none focus:ring-0" />
                  <label for="password" className="absolute top-2 left-1.5 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-1 text-sm text-black duration-300 peer-placeholder-shown:top-[30%] peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-[#5459E8]"> Password </label>
                </div>
              </div>
              <div className="my-4">
                <label className="flex flex-wrap content-center">
                  <input type="checkbox" className="h-5 w-5 mr-2" /> 
                  <span className="mr-auto text-sm text-black font-medium">Remember me</span>
                  <NavLink to="#" className="text-sm font-medium text-[#FF8682] hover:underline-offset-2 hover:underline">Forgot password?</NavLink>
                </label>
              </div>
              <button type="submit" className="mt-6 rounded bg-[#515DEF] px-4 py-3 text-center text-base font-semibold text-[#F3F3F3] shadow-md outline-none transition hover:bg-blue-700">Login</button>
              <p className="my-4 text-center text-sm font-medium text-gray-900">Don't have an account? <NavLink to="/signup" className="text-[#ff8682] hover:underline-offset-2 hover:underline">Sign up</NavLink></p>
            </form>
            <div className="relative mt-8 flex h-px place-items-center bg-gray-200">
              <div className="absolute left-1/2 h-6 -translate-x-1/2 bg-white px-4 text-center text-sm text-gray-500">Or login with</div>
            </div>
            <div className='my-12'>
              <div className="grid grid-cols-3 gap-3">
                <button type="button" className="transition duration-200 border border-[#515DEF] w-full py-2 md:py-4 px-8 rounded text-sm shadow-sm hover:shadow-md font-normal text-center flex justify-center">
                  <svg className='h-6 w-6 md:h-8 md:w-8' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 509 509"><g fill-rule="nonzero"><path fill="#0866FF" d="M509 254.5C509 113.94 395.06 0 254.5 0S0 113.94 0 254.5C0 373.86 82.17 474 193.02 501.51V332.27h-52.48V254.5h52.48v-33.51c0-86.63 39.2-126.78 124.24-126.78 16.13 0 43.95 3.17 55.33 6.33v70.5c-6.01-.63-16.44-.95-29.4-.95-41.73 0-57.86 15.81-57.86 56.91v27.5h83.13l-14.28 77.77h-68.85v174.87C411.35 491.92 509 384.62 509 254.5z" /><path fill="#fff" d="M354.18 332.27l14.28-77.77h-83.13V227c0-41.1 16.13-56.91 57.86-56.91 12.96 0 23.39.32 29.4.95v-70.5c-11.38-3.16-39.2-6.33-55.33-6.33-85.04 0-124.24 40.16-124.24 126.78v33.51h-52.48v77.77h52.48v169.24c19.69 4.88 40.28 7.49 61.48 7.49 10.44 0 20.72-.64 30.83-1.86V332.27h68.85z" /></g></svg>
                </button>
                <button type="button" className="transition duration-200 border border-[#515DEF] w-full py-2 md:py-4 px-8 rounded text-sm shadow-sm hover:shadow-md font-normal text-center flex justify-center">
                  <svg className='h-6 w-6 md:h-8 md:w-8' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 326667 333333"><path d="M326667 170370c0-13704-1112-23704-3518-34074H166667v61851h91851c-1851 15371-11851 38519-34074 54074l-311 2071 49476 38329 3428 342c31481-29074 49630-71852 49630-122593m0 0z" fill="#4285f4" /><path d="M166667 333333c44999 0 82776-14815 110370-40370l-52593-40742c-14074 9815-32963 16667-57777 16667-44074 0-81481-29073-94816-69258l-1954 166-51447 39815-673 1870c27407 54444 83704 91852 148890 91852z" fill="#34a853" /><path d="M71851 199630c-3518-10370-5555-21482-5555-32963 0-11482 2036-22593 5370-32963l-93-2209-52091-40455-1704 811C6482 114444 1 139814 1 166666s6482 52221 17777 74814l54074-41851m0 0z" fill="#fbbc04" /><path d="M166667 64444c31296 0 52406 13519 64444 24816l47037-45926C249260 16482 211666 1 166667 1 101481 1 45185 37408 17777 91852l53889 41853c13520-40185 50927-69260 95001-69260m0 0z" fill="#ea4335" /></svg>
                </button>
                <button type="button" className="transition duration-200 border border-[#515DEF] w-full py-2 md:py-4 px-8 rounded text-sm shadow-sm hover:shadow-md font-normal text-center flex justify-center">
                  <svg className='h-6 w-6 md:h-8 md:w-8' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M494.782 340.02c-.803-81.025 66.084-119.907 69.072-121.832-37.595-54.993-96.167-62.552-117.037-63.402-49.843-5.032-97.242 29.362-122.565 29.362-25.253 0-64.277-28.607-105.604-27.85-54.32.803-104.4 31.594-132.403 80.245C29.81 334.457 71.81 479.58 126.816 558.976c26.87 38.882 58.914 82.56 100.997 81 40.512-1.594 55.843-26.244 104.848-26.244 48.993 0 62.753 26.245 105.64 25.406 43.606-.803 71.232-39.638 97.925-78.65 30.887-45.12 43.548-88.75 44.316-90.994-.969-.437-85.029-32.634-85.879-129.439l.118-.035zM414.23 102.178C436.553 75.095 451.636 37.5 447.514-.024c-32.162 1.311-71.163 21.437-94.253 48.485-20.729 24.012-38.836 62.28-33.993 99.036 35.918 2.8 72.591-18.248 94.926-45.272l.036-.047z" /></svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="relative hidden pl-3.5 pr-3 mt-12 select-none flex-col justify-center md:flex md:w-[45%]">
          <div className="mx-auto h-full">
            <img src={loginImg} className="inline h-full bg-[#D9D9D9] rounded-[30px]" alt="Register to Grow Geeky" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn
