import React from 'react'
import { FaInstagram,FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const Copywright = () => {
  return (
    <div className='h-[50vh] w-screen pl-[5rem] pr-[3rem] py-4 flex justify-between align-center bg-black'>
        <div className='w-1/3 flex flex-col align-center justify-between pb-[11rem] mr-[5rem]'>
          <h1 className='font-heading font-bold text-xl'>
            FrameStack
          </h1>
          <p className='font-para'>
            FrameStack is a global UI/UX design agency that boosts brand value with user-friendly, effective designs for web, mobile, and SaaS platforms.
          </p>
          <div className="icons w-[40%] flex justify-between pr-8">
            <FaInstagram className='text-2xl'/>
            <FaLinkedin className='text-2xl'/>
            <FaGithub className='text-2xl'/>
          </div>
        </div>
        <div className='w-1/3'>
          <h1 className='font-heading font-bold text-xl mb-1.5'>Services</h1>
          <ul>
            <li className='text-[1.1rem] hover:underline'>Web-Development</li>
            <li className='text-[1.1rem] hover:underline'>E-Commerce</li>
            <li className='text-[1.1rem] hover:underline'>UI-UX Design</li>
            <li className='text-[1.1rem] hover:underline'></li>
          </ul>
        </div>
        <div className='w-1/3'>
            <h1 className='font-heading font-bold text-xl mb-1.5'>Services</h1>
            <p>Subscribe to get the latest updates and tips.</p>
            <form action="" className='mt-3'>
              <input type="text" placeholder='Your Email' className='border-white rounded-md p-2 mr-3'/>
              <button className='bg-white text-black p-2.5 font-heading rounded-md cursor-pointer'>Subscribe</button>
            </form>
        </div>
    </div>
  )
}

export default Copywright