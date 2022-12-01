import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {FaFacebook} from 'react-icons/fa'
import {AiOutlineTwitter, AiOutlineInstagram} from 'react-icons/ai'
import {BsLinkedin} from 'react-icons/bs'

const Footer = () => {
  return (
    <section className='bg-black pt-10 snap-start'>
        <div className='mx-auto w-full max-w-[1600px] py-5 px-2'>
            <div className='flex md:flex-row flex-col justify-between mb-5 md:gap-0 '>
                <div className='flex flex-col gap-4 px-5 py-5'>
                    <>Logo</>
                    <h1 className='font-urban font-black text-6xl'>
                        Do & <br/> Inspire
                    </h1>
                </div>
                <div className='md:self-end md:text-right md:pb-5 md:px-0 px-5'>
                    <h4 className=' font-urban text-[28px] font-medium leading-snug text-[#5c5c5c]'>
                        Let’s work together. <Link href='/' className='text-[#7a7a7a] hover:text-[#3a3a73]'>Book a free consultation with us!</Link>
                    </h4>
                </div>
            </div>
            <div className='bg-white h-[1px] mb-3'/>
            <div className='flex justify-between px-5 gap-4'>
                <div>
                    <Link href='/' className='text-[#7a7a7a]'>
                        Copyright © 2022 Roughpaper Technologies | Proudly based in 🇦🇪 serving the world.
                    </Link>
                </div>
                <div className='flex gap-2'>
                    <Link href='/'>
                        <button className='rounded-full bg-[#0071FF] h-9 w-9 hover:bg-[#58a1fe] duration-500 flex justify-center items-center'>
                        <FaFacebook className='fill-black'/>
                        </button>
                    </Link>
                    <Link href='/'>
                        <button className='rounded-full bg-[#0071FF] h-9 w-9 hover:bg-[#58a1fe] duration-500 flex justify-center items-center'>
                        <AiOutlineTwitter size={'20px'} className='fill-black'/>
                        </button>
                    </Link>
                    <Link href='/'>
                        <button className='rounded-full bg-[#0071FF] h-9 w-9 hover:bg-[#58a1fe] duration-500 flex justify-center items-center'>
                            <BsLinkedin className='fill-black'/>
                        </button>
                    </Link>
                    <Link href='/'>
                        <button className='rounded-full bg-[#0071FF] h-9 w-9 hover:bg-[#58a1fe] duration-500 flex justify-center items-center'>
                            <AiOutlineInstagram size={'20px'} className='fill-black'/>
                        </button>
                    </Link>
                </div>
            </div>  
        </div>
    </section>
  )
}

export default Footer