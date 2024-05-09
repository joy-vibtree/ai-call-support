'use client'
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import nature1 from '@/assets/images/nature1.jpg'
import nature2 from '@/assets/images/nature2.jpg'
import nature3 from '@/assets/images/nature3.jpg'
import nature4 from '@/assets/images/nature4.jpg'
import nature5 from '@/assets/images/nature5.jpg'
import nature6 from '@/assets/images/nature6.jpg'
import Image from 'next/image'
gsap.registerPlugin(ScrollTrigger)

const Cards = () => {
    const image1 = useRef(null)
    const image2 = useRef(null)
    const image3 = useRef(null)
    const image4 = useRef(null)
    const image5 = useRef(null)
    const image6 = useRef(null)
    const image7= useRef(null)
    const image8 = useRef(null)
    useEffect(()=>{
        const image1El = image1.current
        const image2El = image2.current
        const image3El = image3.current
        const image4El = image4.current
        const image5El = image5.current
        const image6El = image6.current
        const image7El = image7.current
        const image8El = image8.current
        gsap.fromTo(image1El,{rotation:0,y:0},{rotation:30, x:90,y:-10, scale:.9,duration:3,scrollTrigger:{
            trigger:image1El,
            start:"top 60%",
            end:"top 20%",
            scrub:2,
            markers:true
        }})
        gsap.fromTo(image2El,{rotation:0,y:0},{rotation:-30,x:-90,y:-10, scale:.9,duration:3,scrollTrigger:{
          trigger:image2El,
          start:"top 60%",
          end:"top 20%",
          scrub:2,
          markers:true
      }})
      gsap.fromTo(image3El,{x:0},{x:-190,duration:3,scrollTrigger:{
        trigger:image3El,
        start:"top 60%",
        end:"top 20%",
        scrub:2,
        markers:true
    }})
    gsap.fromTo(image4El,{x:0},{x:190,duration:3,scrollTrigger:{
      trigger:image3El,
      start:"top 60%",
      end:"top 20%",
      scrub:2,
      markers:true
  }})
  gsap.fromTo(image5El,{scale:1},{scale:1.1,duration:3,scrollTrigger:{
    trigger:image3El,
    start:"top 60%",
    end:"top 20%",
    scrub:2,
    markers:true
}})
gsap.fromTo(image6El,{x:500,scale:.5},{x:0, scale:1,duration:3,scrollTrigger:{
  trigger:image6El,
  start:"top 60%",
  end:"top 20%",
  scrub:2,
  //markers:true
}})
gsap.fromTo(image7El,{x:500,scale:.5},{x:0, scale:1,duration:3,scrollTrigger:{
  trigger:image7El,
  start:"top 60%",
  end:"top 20%",
  scrub:2,
  // markers:true
}})
gsap.fromTo(image8El,{x:500,scale:.5},{x:0, scale:1,duration:3,scrollTrigger:{
  trigger:image8El,
  start:"top 60%",
  end:"top 20%",
  scrub:2,
  // markers:true
}})

    },[])
  return (
    <div className='flex justify-center gap-8 flex-col items-center'>
      <div className='w-[200px] h-[300px] rounded-md relative bg-slate-400'>
       <div className='absolute top-0 left-0' ref={image1}> <Image src={nature1} alt="image1" className='w-[200px] h-[300px] rounded-lg z-10' ></Image></div>
       <div className='absolute top-0 left-0 ' ref={image2}> <Image src={nature2} alt="image1" className='w-[200px] h-[300px] rounded-lg z-20'></Image></div>
       <div className='absolute top-0 left-0 '> <Image src={nature3} alt="image1" className='w-[200px] h-[300px] z-30 rounded-lg'></Image></div>
      </div>
      <div className='w-[200px] h-[300px] rounded-md relative bg-slate-400'>
       <div className='absolute top-0 left-0' ref={image3}> <Image src={nature1} alt="image1" className='w-[200px] h-[300px] rounded-lg z-10' ></Image></div>
       <div className='absolute top-0 left-0 ' ref={image4}> <Image src={nature2} alt="image1" className='w-[200px] h-[300px] rounded-lg z-20'></Image></div>
       <div className='absolute top-0 left-0 ' ref={image5}> <Image src={nature3} alt="image1" className='w-[200px] h-[300px] z-30 rounded-lg'></Image></div>
      </div>
      <div className='' ref={image6}> <Image src={nature4} alt="image1" className='w-[350px] h-[300px] rounded-lg z-10' ></Image></div>
      <div className='' ref={image7}> <Image src={nature5} alt="image1" className='w-[350px] h-[300px] rounded-lg z-10' ></Image></div>
      <div className='' ref={image8}> <Image src={nature6} alt="image1" className='w-[350px] h-[300px] rounded-lg z-10' ></Image></div>
      </div>
  )
}

export default Cards