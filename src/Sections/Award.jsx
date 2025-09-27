import React from 'react'
import InnerCard from '../Components/InnerCard'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

const Award = () => {
  useGSAP(()=>{
    gsap.from(".gol",{
      x:-300,
      duration:1,
      scrollTrigger:{
        trigger:".gol",
        scroller:"body",
        start: "top bottom",   // wait until element comes near viewport
    end: "top center",
        scrub:2,
        markers:true,
      }
    })
  })
  useGSAP(()=>{
    gsap.from(".gor",{
      x:500,
      duration:1,
      scrollTrigger:{
        trigger:".gor",
        scroller:"body",
        start: "top bottom",   // wait until element comes near viewport
        end: "top center",
        scrub:2,
        markers:true,
      }
    })
  })
  return (
    <div className='min-h-[100vh] py-[8rem] px-[8rem]'>
      <div>
        <h1 className='gol text-[8vw] font-heading leading-[2.5rem] mix-blend-difference'>Our Award and</h1>
        <h1 className='gor text-[8vw] font-heading text-right mix-blend-difference'>Achievements</h1>
      </div>
      <div className='w-full h-[50vh] grid grid-cols-4 divide-x-5 mt-[5rem]'>
          <InnerCard para={"140+ design awards"} num={"01"}></InnerCard>
          <InnerCard para={"100M+ Global users reached"} num={"02"}></InnerCard>
          <InnerCard para={"300%+ Average conversion uplift"} num={"03"}></InnerCard>
          <InnerCard para={"100% Customer Satisfaction"} num={"04"}></InnerCard>
      </div>
    </div>
  )
}

export default Award