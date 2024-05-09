import React from 'react'

export const Stats = () => {
    const stats = [
        {count:"900%",subtitle:'Increase in productivity'},
        {count:"60k+",subtitle:"Minutes dialed by AI"},
        {count:"300k+",subtitle:"SMS/MMS sent by AI"}
    ]
  return (
    <section className="p-[80px] text-center space-y-[36px]">
    <h4 className="text-[40px] font-normal leading-[44px]">500+ Brands already using AI Agents to automate calls.</h4>
    <div className=" flex flex-col md:flex-row gap-6 justify-center">
        {
            stats.map((item,idx)=> <div key={idx} className="flex gap-6">
            <div>
              <h1 className="font-extrabold text-[32px] md:text-[48px] lg:text-[96px] leading-[105.6px]">{item.count}</h1>
              <p className="font-normal text-2xl leading-[38.4px]">{item.subtitle}</p>
            </div>
            <div className="h-[100px] w-[2px] bg-[#B0A2A2]"></div>
          </div>)
        }
     
      
    </div>
  </section>
  )
}
