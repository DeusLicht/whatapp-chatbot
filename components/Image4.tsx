import React from 'react'
import Image from 'next/image'
import useMediaQuery from '../public/hooks/useMediaQuery';
import shuttle from '../public/assets/Badminton.png'
const Image4 = () => {
    const isLarge = useMediaQuery("(min-width: 768px)");
    return (
      <section className='bg-black md:py-14 pb-14 xl:px-0 px-2'>
          <div className='max-w-[1440px] mx-auto'>
              <div className='relative border flex flex-col border-transparent overflow-hidden rounded-xl'>
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
                  
              </div>
          </div>
      </section>
    )
}

export default Image4