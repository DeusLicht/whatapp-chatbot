import React from 'react'
import manage from '../public/assets/young-woman-eating-croissants-cafe.jpg'
import Image from 'next/image';
import useMediaQuery from '../public/hooks/useMediaQuery';

const Image2 = () => {
    const isLarge = useMediaQuery("(min-width: 768px)");
  return (
    <section className='bg-black py-14 xl:px-0 px-2'>
        <div className='max-w-[1440px] mx-auto'>
            <div className='relative border flex flex-col border-transparent overflow-hidden rounded-xl'>
                <Image src={manage} alt='/' className=' object-cover md:h-[720px] md:object-top rounded-xl xl:scale-100 md:scale-125'/>
                {/* If Screens > 768px else Mobile */}
                {isLarge ? (
                    <div className='absolute top-[20%] right-[5%] w-[40%]'>
                        <h2 className=' font-bowl text-5xl leading-snug mb-2 text-shadow-sm shadow-black'>
                            Manage your orders easily with WhatsApp
                        </h2>
                        <p className='text-xl leading-snug xl:text-2xl text-shadow-sm shadow-black'>
                            When chatbot converts sales for you, you just have to accept or reject those orders through our dashboard.
                        </p>
                </div>
                ) :
                (
                    <div className='mt-5'>
                        <h2 className=' font-bowl text-4xl leading-snug mb-2 '>
                            Manage your orders easily with WhatsApp
                        </h2>
                        <p className='leading-snug'>
                            When chatbot converts sales for you, you just have to accept or reject those orders through our dashboard.
                        </p>
                    </div>
                )
                }
                
            </div>
        </div>
    </section>
  )
}

export default Image2