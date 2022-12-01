import React from 'react'
import Image from 'next/image'
import food from '../public/assets/Icon1Food.png'
import fitness from '../public/assets/Icon2Fitness.png'
import brands from '../public/assets/Icon3Brands.png'
import retail from '../public/assets/Icon4Retail.png'
import events from '../public/assets/Icon5Event.png'

const Ideal = () => {
  return (
    <section className='bg-black py-14 md:px-3 px-5 snap-center'>
        <div className='max-w-[1200px] mx-auto flex flex-col items-center gap-y-3'>
            <div className='flex items-center justify-center'>
                <h1 className='font-bowl md:text-5xl text-4xl leading-snug md:leading-snug text-center '>
                    Ideal for
                </h1>
            </div>
            <div className='grid lg:grid-cols-5 md:grid-cols-6 grid-cols-2 gap-3'>
                <div className='lg:col-auto md:col-start-1 md:col-end-3 flex flex-col items-center'>
                    <Image src={food} alt='/' width={200}/>
                    <h4 className='font-semibold text-center text-[17px]'>
                        Food & Beverage
                    </h4>
                </div>
                <div className='lg:col-auto md:col-start-3 md:col-end-5 flex flex-col items-center'>
                    <Image src={fitness} alt='/' width={200}/>
                    <h4 className='font-semibold text-center text-[17px]'>
                        Fitness
                    </h4>
                </div>
                <div className='lg:col-auto md:col-start-5 md:col-end-7 flex flex-col items-center'>
                    <Image src={brands} alt='/' width={200}/>
                    <h4 className='font-semibold text-center text-[17px]'>
                        E-commerce Brands
                    </h4>
                </div>
                <div className='lg:col-auto md:col-start-1 md:col-end-4 flex flex-col items-center'>
                    <Image src={retail} alt='/' width={200}/>
                    <h4 className='font-semibold text-center text-[17px]'>
                        Retail
                    </h4>
                </div>
                <div className='lg:col-auto md:col-start-4 md:col-end-7 flex flex-col items-center col-span-2'>
                    <Image src={events} alt='/' width={200}/>
                    <h4 className='font-semibold text-center text-[17px]'>
                        Events & Entertainment
                    </h4>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Ideal