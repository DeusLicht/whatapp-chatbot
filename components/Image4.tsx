import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion';
import useMediaQuery from '../public/hooks/useMediaQuery'
import shuttle from '../public/assets/Badminton.png'

const imgVariants = {
    offscreen: {
      y: 300,
      opacity:0
    },
    onscreen: {
      y: 0,
      opacity:1,
      transition: {
      ease: 'easeOut',
      duration:1
      }
    }
  };

const Image4 = () => {
    const isLarge = useMediaQuery("(min-width: 768px)");
    return (
      <section className='bg-black py-14 xl:px-0 px-2 snap-center '>
          <motion.div className='max-w-[1440px] mx-auto overflow-hidden' initial='offscreen' whileInView='onscreen' viewport={{amount:0.5, once:true}}>
              <motion.div className='relative border flex flex-col border-transparent overflow-hidden rounded-xl'  variants={imgVariants}>
                  <Image src={shuttle} alt='/' className=' object-cover md:h-[720px] md:object-bottom md:ml-20 md:mb-4 lg:mb-0 lg:ml-0 rounded-xl xl:scale-100 md:scale-125'/>
                  {/* If Screens > 768px else Mobile */}
                  {isLarge ? (
                      <div className='absolute top-[20%] right-[10%] lg:w-[35%] md:w-[45%]'>
                          <h2 className=' font-bowl text-5xl leading-snug mb-2 text-shadow-sm shadow-black'>
                              Bookings & reservations made simple
                          </h2>
                          <p className='text-xl leading-snug xl:text-2xl text-shadow-sm shadow-black'>
                              Improve customer satisfaction by automating customer servicing, appointment bookings, reservations and account management.
                          </p>
                  </div>
                  ) :
                  (
                      <div className='mt-5'>
                          <h2 className=' font-bowl text-4xl leading-snug mb-2 '>
                              Bookings & reservations made simple
                          </h2>
                          <p className='leading-snug'>
                              Improve customer satisfaction by automating customer servicing, appointment bookings, reservations and account management.
                          </p>
                      </div>
                  )
                  }
                  
              </motion.div>
          </motion.div>
      </section>
    )
}

export default Image4