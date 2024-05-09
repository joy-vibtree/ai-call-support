import React from 'react'
import servicelogo1 from '@/assets/svg/servicelogo1.svg'
import servicelogo2 from '@/assets/svg/servicelogo2.svg'
import servicelogo3 from '@/assets/svg/servicelogo3.svg'
import servicelogo4 from '@/assets/svg/servicelogo4.svg'
import servicelogo5 from '@/assets/svg/servicelogo5.svg'
import servicelogo6 from '@/assets/svg/servicelogo6.svg'
import Image from 'next/image'

const Services = () => {
    const services = [
        { name: 'AI Local Presence', img: servicelogo1 },
        { name: 'AI Contact Center', img: servicelogo2 },
        { name: 'Call Recordings', img: servicelogo3 },
        { name: 'AI SMS/MMS', img: servicelogo4 },
        { name: 'AI Assistant', img: servicelogo5 },
        { name: 'Advanced Analytics', img: servicelogo6 },
    ]
    return (
        <section className='p-[80px]'>
            <h3 className="text-[40px] font-medium leading-[44px] text-center mb-6">Unleash the power of AI in your business</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    services.map((service, idx) => <div key={idx} className="flex items-center justify-center flex-col gap-6 h-[240px]">
                        <div className="w-[96px] h-[96px] rounded-full bg-[#2563EB] flex items-center justify-center">
                            <Image src={service.img} alt='service logo'></Image>
                        </div>
                        <p className="font-medium text-[32px]">{service.name}</p>
                    </div>)
                }
            </div>


        </section>
    )
}

export default Services