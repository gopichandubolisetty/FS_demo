import React from 'react'

const CardSer = ({ title, link }) => {
  return (
    <div className='m-[1.5rem]'>
      <img src={link} alt={title} />
      <p className='font-para mt-2 text-xl mix-blend-difference'>{title}</p>
    </div>
  )
}

export default CardSer
