import React from 'react'
import CardSer from '../Components/CardSer'

const Portfolio = () => {
  return (
    <div className='min-h-[100vh] px-[5rem] py-5'>
      <div>
        <h1 className='font-heading text-6xl mix-blend-difference'>
          Turn your ideas into impactful
        </h1>
        <h1 className='font-body text-6xl text-gray-400 mt-1.5 mix-blend-difference'>
          solutions like them!
        </h1>
      </div>

      <div className='grid grid-cols-2 gap-6'>
        <CardSer 
          title="Tournament-Sport management app" 
          link="./src/assets/sport.webp" 
        />
        <CardSer 
          title="UX for Crypto Trading platform" 
          link="./src/assets/Crypto.jpg" 
        />
        <CardSer 
          title="Modern fashion web design app" 
          link="./src/assets/beclothing.jpg" 
        />
        <CardSer 
          title="UX for Crypto Trading platform" 
          link="./src/assets/kaniro.jpg" 
        />
      </div>
    </div>
  )
}

export default Portfolio
