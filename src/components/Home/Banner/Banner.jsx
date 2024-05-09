'use client'
import Image from 'next/image'
import React from 'react'
import avatar from "@/assets/svg/Avatar.svg"
import arrowRight from "@/assets/svg/arrow_righ.svg"
import bannerImg from "@/assets/svg/bannerImg.svg"
import {motion} from 'framer-motion'
const Banner = () => {
  return (
    <div className=" flex flex-col justify-center items-center py-[80px] gap-6">
      <motion.h1
      initial={{scale:0,y:-200}}
      animate={{scale:1,y:0,animationDelay:.5}}
      //whileInView={{scale:1,y:0}}
      transition={{duration:.5}}
      // viewport={{amount:'all'}}

      className="font-extrabold text-[32px] md:text-[48px] lg:text-[96px] leading-[105.6px] text-center">Scale Your Contact Center with Voice AI Agents</motion.h1>
      <p className=" w-full lg:w-[721px] text-2xl leading-[38.4px]">AI Call support scales your contact center with "Human-Like" Voice AI Agents.
        Achieve ZERO wait time for your callers and automate 80% of repeatable queries using the power of Generative AI
      </p>
      <div className="flex items-center gap-6">
        <Image className="" src={avatar} alt="avatar"></Image>
          <p className="">500+ Brands already using AI Agents to automate calls.</p>
      </div>
      <motion.button
      whileHover={{scaleX:1.1}}
      transition={{duration:.5}}
      type="button" className="px-6 py-5 border-[2px] border-[#2563EB] bg-[#2563EB] text-white rounded-lg text-2xl font-bold leading-[24px] tracking-[0.5px] flex items-center">
        <span className="px-6">Step in to future</span>
       <span> <Image src={arrowRight} alt='arrow sign'></Image></span>
      </motion.button>
      <motion.div 
        initial={{x:200,y:200}}
        whileInView={{x:0,y:0,animationDelay:1}}
        whileHover={{scale:1.1}}
        transition={{duration:1.5}}
        
        // viewport={{amount:'all'}}
      >
      <Image src={bannerImg} className='rounded-[36px]' alt='banner image'></Image>
      </motion.div>
      
    </div>
  )
}

export default Banner