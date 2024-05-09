"use client"
import React from 'react'
import featureImg1 from "@/assets/svg/featureImg1.svg"
import featureImg2 from "@/assets/svg/featureImg2.svg"
import featureImg3 from "@/assets/svg/featureImg3.svg"
import featureImg4 from "@/assets/svg/featureImg4.svg"
import Image from 'next/image'
import { motion } from 'framer-motion'
export const Feature = () => {
    const featurecardData = [
        { title: "Optimize your customer interactions with AI Agent", content: "AI Agent is an AI employee who works 24X7X365 days to server your customer. This brings missed call ratio to 0% and increase customer satisfaction score by 10x. Elevating efficiency while reducing human effort by 1000x", img: featureImg1 },
        { title: 'Personalize and automate messaging with AI SMS and Whatsapp', content: 'Voice AI Agent integrates with SMS and Whatsapp to send any type of notification or confirmation after or before call.', img: featureImg2 },
        { title: "Personalize customer experience", content: "Voice AI Agents can integrate with any third party application to get details about the customers orders, profile, complaint, etc thus personalise conversation with customer which increases customers satisfaction score", img: featureImg3 },
        { title: "Leverage post-call recordings, analytics, and AI notes for strategic advantage", content: "AI-based post-call analytics and note generation provide critical insights into customer interactions, enabling informed and effective decision making for business growth.", img: featureImg4 }
    ]
    return (
        <section className="p-[80px] overflow-hidden">
            <div className='text-center mb-[80px]'>
                <h3 className="font-semibold text-[56px] leading-[61.6px] mb-6">Achieve Zero Missed calls in three easy steps</h3>
                <p className="text-2xl font-normal leading-[38.4px]">We only takes 3 minutes to set up, comes with instant support, and has 99.99% uptime.</p>
            </div>
            {
                featurecardData.map((feature, idx) => <motion.div
                    // initial={{ opacity: 0, scale: 0, y: 200 }}
                    // whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    // transition={{ duration: 0.6 }}
                    key={idx} className={idx % 2 == 0 ? 'flex   flex-col-reverse lg:flex-row gap-6 h-[420px items-center mb-[80px]' : 'flex flex-col-reverse lg:flex-row-reverse gap-6 h-[420px items-center mb-[80px]'}>
                    <motion.div
                      initial={{x:-500}}
                      whileInView={{x:0}}
                      transition={{duration:1}}
            
                   //   viewport={{amount:"all"}}
                    className="flex flex-col gap-6">
                        <h3 className="py-2 pl-[48px] font-medium text-2xl laptop:text-[32px] desktop:text-[40px] leading-[44px] border-l-[3px] border-[#CBD5E1]">{feature.title}</h3>
                        <p className="py-2 pl-[48px] font-normal leading-[28.8px] text-[18px] border-l-[3px] border-[#2563EB] text-justify">{feature.content}</p>
                        <div className="py-2 pl-[48px] border-l-[3px] border-[#CBD5E1]"> <motion.button
                        initial={{scale:1,rotate:0}}
                        whileTap={{scale:0.5,rotate:20}}
                        transition={{duration:.5}}
                        
                        className="border-[2px] rounded-lg px-3 py-2 border-[#2563EB] font-normal text-[20px]">Step in to future</motion.button></div>

                    </motion.div>
                    <motion.div 
                    
                    initial={{x:500}}
                    whileInView={{x:0}}
                    transition={{duration:1}}
                    //  viewport={{amount:"all"}}
                    >
                        <Image src={feature.img} className="max-w-[630px] laptop:w-[500px] rounded-[36px] h-auto" alt="feature image"></Image>
                    </motion.div>

                </motion.div>)
            }


        </section>
    )
}
