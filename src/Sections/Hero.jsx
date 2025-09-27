import React from 'react'

const Hero = () => {
  return (
    <div className='w-full min-h-screen flex flex-col items-center justify-center'>
        <button className='my-12 text-sm border-[#0092FF] rounded px-1 py-0.5 mix-blend-difference animate-bounce'><span className="mix-blend-difference px-2 py-1 text-xs font-semibold text-white bg-blue-600 rounded-full">
  New
</span>&nbsp;&nbsp;&nbsp;Meet design Pages</button>
        <h1 className='text-5xl lg:text-[9vw] font-body tracking-tighter leading-[0.7] mix-blend-difference'>
            Build better
        </h1>
        <h1 className='text-5xl lg:text-[9vw] font-body tracking-tighter leading-[1.25] mix-blend-difference'>sites, faster</h1>
        <h4 className='tracking-tighter leading-[1.25] text-xl lg:text-[2vw] font-para text-gray-300 mix-blend-difference'>FrameStack is the design tool for websites. </h4>
        <h4 className='tracking-tighter leading-[1.25] text-xl lg:text-[2vw] font-para text-gray-300 mix-blend-difference'> Design freely, publish fast, and scale </h4>
        <h4 className='tracking-tighter leading-[1.25] text-xl lg:text-[2vw] font-para text-gray-300 mix-blend-difference'>with CMS, SEO, analytics, and more.</h4>
    </div>
  )
}

export default Hero;