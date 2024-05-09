import Image from 'next/image'
import React from 'react'
import logo from '@/assets/svg/logo.svg'
function Footer() {
  return (
    <section>
    <footer className="p-[80px] bg-[#0F172A] flex justify-between items-center">
    <div className='flex gap-2 items-center pt-12'>
      <Image src={logo} alt='logo'></Image>
        <h2 className='text-[#2563EB] text-[32px] font-bold'>aicallsupport</h2>
      </div>
      <div className="flex gap-6 text-white">
        <p>info@aicallsupport.com</p>
        <p>+1832-639-5556</p>
      </div>
    </footer>
  </section>
  )
}

export default Footer