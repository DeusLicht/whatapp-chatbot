import React from 'react'
import Image from 'next/image'
import integrate from '../public/assets/Integrate.png'
import partylogo from '../public/assets/logos4.png'
import useMediaQuery from '../public/hooks/useMediaQuery'

const Image3 = () => {
    const isLarge = useMediaQuery("(min-width: 768px)");
    return (
      <section className='bg-black py-14 xl:px-0 px-2'>
          <div className='max-w-[1440px] mx-auto'>
              <div className='relative border flex flex-col border-transparent overflow-hidden rounded-xl'>
                  <Image src={integrate} alt='/' className=' object-cover md:h-[720px] md:object-top md:ml-20 lg:ml-0 rounded-xl xl:scale-100 md:scale-125'/>
                  {/* If Screens > 768px else Mobile */}
                  {isLarge ? (
                      <div className='absolute top-[20%] right-[5%] w-[40%]'>
                          <h2 className=' font-bowl text-5xl leading-snug mb-2 text-shadow-sm shadow-black'>
                              Integrate your WhatsApp with 3rd party apps
                          </h2>
                          <p className='text-xl leading-snug xl:text-2xl text-shadow-sm shadow-black mb-5'>
                              Send and receive data in real-time on your favourite 3rd party apps from WhatsApp.
                          </p>
                          <Image src = {partylogo} alt='/'/>
                  </div>
                  ) :
                  (
                      <div className='mt-5'>
                          <h2 className=' font-bowl text-4xl leading-snug mb-2 '>
                              Integrate your WhatsApp with 3rd party apps
                          </h2>
                          <p className='leading-snug mb-5'>
                              Send and receive data in real-time on your favourite 3rd party apps from WhatsApp.
                          </p>
                          <Image src = {partylogo} alt='/' className=' '/>
                      </div>
                  )
                  }
                  
              </div>
          </div>
      </section>
    )
}

export default Image3