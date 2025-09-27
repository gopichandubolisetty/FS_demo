import React from 'react'
import { CgArrowTopRight } from "react-icons/cg";

const InnerCard = ({ num, para }) => {
  return (
    <div className="group bg-white flex flex-col p-6 justify-between border-r border-gray-500 relative overflow-hidden">
      <div className="flex justify-between items-start">
        <h1 className="text-gray-400 text-4xl">{num}</h1>
        
        {/* Arrow button */}
        <button 
          className="bg-blue-500 p-4 rounded-full text-3xl 
                     transform -translate-y-10 opacity-0 
                     transition-all duration-300 
                     group-hover:translate-y-0 group-hover:opacity-100"
        >
          <CgArrowTopRight />
        </button>
      </div>

      <p className="text-black text-4xl mt-4">
        {para}
      </p>
    </div>
  )
}

export default InnerCard
