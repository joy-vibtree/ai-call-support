'use client'
import Image from 'next/image'
import React from 'react'
import logo from "@/assets/svg/logo.svg"
import ResponsiveAppBar from '../AppBar/ResponsiveAppBar'

const Navbar = () => {
  return (
  <>
  <ResponsiveAppBar></ResponsiveAppBar>
   <div className='flex justify-between p-6'>
      <div className='flex gap-2 items-center'>
      <Image src={logo} alt='logo'></Image>
        <h2 className='text-[#2563EB] text-[32px] font-bold'>aicallsupport</h2>
      </div>
      <div>
        <button className='px-6 py-5 border-[2px] border-[#2563EB] bg-[#2563EB] text-white rounded-lg text-2xl font-bold leading-[24px] tracking-[0.5px]'>step in to future</button>
      </div>
    </div>
  </>
   
  )
}

export default Navbar