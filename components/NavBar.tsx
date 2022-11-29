import React, {useState} from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import useMediaQuery from '../public/hooks/useMediaQuery'
import {HiOutlineDotsVertical} from 'react-icons/hi'
import Image from 'next/image'


const nav = {

  hidden: {
    y:-50,
  },
  visible:{
    y:0,
    transition:{
      duration:0.2
    }
  }

}

const side = {

  entry: {
    left: '-200vh'
  },

  animate: {
    left: 0,
    transition:{
      duration:1,
      delayChildren: 5
    },
  }

}

const NavBar = ( {isTopOfPage}: any) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const navbarBackground = isTopOfPage ? "bg-[#101010]" : "bg-[#101010]";
  return (
    <motion.header className={`${navbarBackground} md:sticky top-0 w-full md:h-[115px] h-[90px]  z-10 flex justify-center items-center `} layout variants={nav} initial='hidden' animate='visible'>
    <div className='flex items-center justify-between w-full h-full max-w-[1440px] mx-auto px-10 bg-opacity-80 shadow-sm bg-clip-padding blur-backdrop-filter '>
      <>Logo</>
      {/*Desktop Version */}
      {isDesktop ? (
          <><div className='xl:ml-[100px] md:ml-12'>
            <ul className='flex'>
              <li className='p-5 font-bold text-sm lg:text-lg hover:text-[#0071FF] duration-200 cursor-pointer'>Home</li>
              <li className='p-5 font-bold text-sm lg:text-lg hover:text-[#0071FF] duration-200 cursor-pointer'>About Us</li>
              <li className='p-5 font-bold text-sm lg:text-lg hover:text-[#0071FF] duration-200 cursor-pointer'>Marketing</li>
              <li className='p-5 font-bold text-sm lg:text-lg hover:text-[#0071FF] duration-200 cursor-pointer'>Tech</li>
              <li className='p-5 font-bold text-sm lg:text-lg hover:text-[#0071FF] duration-200 cursor-pointer'>Blog</li>
            </ul>
          </div><div className=''>
              <button className='border-2 border-[#0071FF] bg-[#0071FF] rounded-lg lg:py-2 py-1 lg:px-7 px-5 group hover:bg-white transition duration-200'>
                <span className='text-black font-semibold text-[13px] lg:text-[14px] group-hover:text-[#0071FF] transition duration-200'>Contact Us</span>
              </button>
            </div></>
      ) : (
        <button
            className="rounded-full bg-red p-2"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            <HiOutlineDotsVertical size={25}/>
          </button>
      )
      }
      </div>
      <AnimatePresence>
      {!isDesktop && isMenuToggled && (
        <>
          <motion.div key='child1' className="fixed left-0 bottom-0 h-full w-full bg-[#191919] bg-opacity-25 shadow-sm bg-clip-padding blur-backdrop-filter z-15" onClick={() => setIsMenuToggled(!isMenuToggled)} variants={side} initial={{left: '-100vh'}} animate={{left: 0,transition:{duration:1}}} exit={{left: '-200vh',transition:{duration:1,delay:0.5}}}>
            <motion.div key='child2' className='fixed flex flex-col left-0 bottom-0 h-full w-[60%] bg-white' initial={{left: '-100vh'}} animate={{left: 0,transition:{duration:1, delay:0.5}}} exit={{left: '-200vh', transition:{duration:1}}}>
              <div className='mr-auto text-black font-bold text-xl'>
                <>
                Logo
                </>
                <ul className='mt-20'>
                  <li className='px-10 py-2 font-bold text-lg hover:text-[#0071FF] duration-200 cursor-pointer'>Home</li>
                  <li className='px-10 py-2 font-bold text-lg hover:text-[#0071FF] duration-200 cursor-pointer'>About Us</li>
                  <li className='px-10 py-2 font-bold text-lg hover:text-[#0071FF] duration-200 cursor-pointer'>Marketing</li>
                  <li className='px-10 py-2 font-bold text-lg hover:text-[#0071FF] duration-200 cursor-pointer'>Tech</li>
                  <li className='px-10 py-2 font-bold text-lg hover:text-[#0071FF] duration-200 cursor-pointer'>Blog</li>
                  <li className='px-10 py-2 font-bold text-lg hover:text-[#0071FF] duration-200 cursor-pointer'>Contact Us</li>
                </ul>
              </div>
            </motion.div>
          </motion.div>

        </>
      )
      }
      </AnimatePresence>
    </motion.header>
    )
}

export default NavBar