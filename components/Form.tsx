import React from 'react'
import Link from 'next/link'
import useMediaQuery from '../public/hooks/useMediaQuery'
import {FaFacebook} from 'react-icons/fa'
import {AiOutlineTwitter, AiOutlineInstagram} from 'react-icons/ai'
import {BsLinkedin} from 'react-icons/bs'

const Form = () => {
  const isDesktop = useMediaQuery("(min-width: 1200px)");
  return (
    <section className='bg-black py-28 md:px-3 px-5 md:snap-center snap-start'>
      {isDesktop ? (
        <div className='max-w-[1200px] mx-auto flex flex-row items-center gap-14'>
        <div className='h-[500px] w-[525px] bg-[#0071FF] flex justify-center rounded-lg py-10 '>
          <form className='flex flex-col px-5 gap-5'>
            <div className='flex gap-x-3'>
              <div className='flex flex-col'>
                <label className='font-bowl text-black text-xl py-1'>
                  Name
                </label>
                <input className='h-12 max-w-[200px] rounded-md text-black px-3 focus:outline-none' placeholder='Jeff'/>
              </div>
              <div className='flex flex-col'>
                <label className='font-bowl text-black text-xl py-1'>
                  Company Name
                </label>
                <input className='h-12 max-w-[200px] rounded-md text-black px-3 focus:outline-none' placeholder='Jeff Inc.'/>
              </div>
            </div>
            <div className='flex flex-col'>
              <label className='font-bowl text-black text-xl py-1'>
                    Email
              </label>
              <input className='h-12 rounded-md text-black px-3 focus:outline-none' placeholder='jeff@jeffinc.com'/>
            </div>
            <div className='flex flex-col'>
              <label className='font-bowl text-black text-xl py-1'>
                    Message
              </label>
              <textarea className='h-28 rounded-md text-black text-start px-3 py-3 focus:outline-none'  placeholder='Message'/>
            </div>
            <input type='submit' value='Send' className='h-12 w-32 rounded-md cursor-pointer bg-black hover:bg-white hover:text-[#0071FF] duration-200' />
          </form>
        </div>
        <div className='w-[600px] flex flex-col gap-3 ml-3'>
          <h4 className='text-lg text-[#0071FF]'>
            Our Contact
          </h4>
          <h1 className='text-4xl font-bowl leading-snug'>
            Want to unlock your sales through WhatsApp Automation?
          </h1>
          <p className='leading-snug text-[#7a7a7a] '>
          We are one of the leading chatbot solution provider in the UAE helping businesses to function smartly and efficiently and boost their sales.
          </p>
          <div className='grid grid-cols-2 gap-x-2 gap-y-5 pt-5'>
            <div className='flex'>
              <div className='mt-0.5'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 fill-[#0071FF]">
                  <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                </svg>
              </div>
              <div className='flex flex-col px-3 group cursor-pointer'>
                <Link href='/'>
                  <h3 className='font-bowl text-2xl leading-snug group-hover:text-[#0071FF] duration-500'>
                    Address
                  </h3>
                </Link>
                <p className='mt-2 text-[#7a7a7a] leading-snug'>
                  Burjuman Office Tower, Mankhool, Dubai, U.A.E
                </p>
              </div>
            </div>
            <div className=' flex'>
              <div className='mt-0.5'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 fill-[#0071FF]">
                  <path fill-rule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clip-rule="evenodd" />
                </svg>
              </div>
              <div className='flex flex-col px-3 group cursor-pointer'>
                <Link href='/'>
                  <h3 className='font-bowl text-2xl leading-snug group-hover:text-[#0071FF] duration-500'>
                    Contact
                  </h3>
                </Link>
                <p className='mt-2 text-[#7a7a7a] leading-snug'>
                  (+971) 50 423 1229 <br/>
                  (+971) 52 501 8033
                </p>
              </div>
            </div>
            <div className=' flex'>
              <div className=' mt-0.5'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className='w-6 h-6 fill-[#0071FF]'>
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>

              </div>
              <div className='group cursor-pointer flex flex-col px-3 '>
                <Link href='/'>
                  <h3 className='font-bowl text-2xl leading-snug group-hover:text-[#0071FF] duration-500'>
                    Email
                  </h3>
                </Link>
                <p className='mt-2   text-[#7a7a7a] leading-snug'>
                  hola@rough-paper.com
                </p>
              </div>
            </div>
            <div className='flex flex-col px-3 '>
                <h3 className='font-bowl text-2xl leading-snug'>
                  Follow Us
                </h3>
                <div className='flex gap-2 mt-3'>
                  <Link href ='/'>
                  <button className='rounded-full bg-[#0071FF] h-9 w-9 hover:bg-[#58a1fe] hover:translate-y-[-12px] duration-500 flex justify-center items-center'>
                    <FaFacebook className='fill-black'/>
                  </button>
                  </Link>
                  <Link href ='/'>
                  <button className='rounded-full bg-[#0071FF] h-9 w-9 hover:bg-[#58a1fe] hover:translate-y-[-12px] duration-500 flex justify-center items-center'>
                    <AiOutlineTwitter size={'20px'} className='fill-black'/>
                  </button>
                  </Link>
                  <Link href ='/'>
                  <button className='rounded-full bg-[#0071FF] h-9 w-9 hover:bg-[#58a1fe] hover:translate-y-[-12px] duration-500 flex justify-center items-center'>
                    <BsLinkedin className='fill-black'/>
                  </button>
                  </Link>
                  <Link href ='/'>
                  <button className='rounded-full bg-[#0071FF] h-9 w-9 hover:bg-[#58a1fe] hover:translate-y-[-12px] duration-500 flex justify-center items-center'>
                    <AiOutlineInstagram size={'20px'} className='fill-black'/>
                  </button>
                  </Link>
                </div>
              </div>
          </div>
        </div>
      </div>
      )
      :
      (
      <div className='mx-auto flex flex-col gap-14'>
        <div className='max-w-[900px] flex flex-col items-center self-center gap-3'>
          <h4 className='text-lg text-[#0071FF]'>
            Our Contact
          </h4>
          <h1 className='text-4xl font-bowl leading-snug text-center'>
            Want to unlock your sales through WhatsApp Automation?
          </h1>
          <p className='leading-snug text-[#7a7a7a] text-center'>
          We are one of the leading chatbot solution provider in the UAE helping businesses to function smartly and efficiently and boost their sales.
          </p>
          <div className='flex sm:gap-20'>
            <div className='flex flex-col gap-5 px-1'>
              <div className='flex mr-auto'>
                <div className='mt-0.5'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 fill-[#0071FF]">
                    <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className='flex flex-col px-3 group cursor-pointer'>
                  <Link href='/'>
                    <h3 className='font-bowl text-2xl leading-snug group-hover:text-[#0071FF] duration-500'>
                      Address
                    </h3>
                  </Link>
                  <p className='mt-2 text-[#7a7a7a] leading-snug'>
                    Burjuman Office Tower,<br/>Mankhool, Dubai, U.A.E
                  </p>
                </div>
              </div>
              <div className=' flex '>
                <div className='mt-0.5'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 fill-[#0071FF]">
                    <path fill-rule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clip-rule="evenodd" />
                  </svg>
                </div>
                <div className='flex flex-col px-3 group cursor-pointer'>
                  <Link href='/'>
                    <h3 className='font-bowl text-2xl leading-snug group-hover:text-[#0071FF] duration-500'>
                      Contact
                    </h3>
                  </Link>
                  <p className='mt-2 text-[#7a7a7a] leading-snug'>
                    (+971) 50 423 1229<br/>
                    (+971) 52 501 8033
                  </p>
                </div>
              </div>
            </div>
            <div className='flex flex-col gap-[42px] justify-center px-1'>
              <div className='flex mr-auto'>
                <div className=' mt-0.5'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className='w-6 h-6 fill-[#0071FF]'>
                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                  </svg>
                </div>
                <div className='group cursor-pointer flex flex-col px-3 '>
                  <Link href='/'>
                    <h3 className='font-bowl text-2xl leading-snug group-hover:text-[#0071FF] duration-500'>
                      Email
                    </h3>
                  </Link>
                  <p className='mt-2   text-[#7a7a7a] leading-snug'>
                    hola@rough-paper.com
                  </p>
                  </div>
              </div>
              <div className='flex flex-col mx-auto'>
                <h3 className='font-bowl text-2xl leading-snug'>
                  Follow Us
                </h3>
                <div className='flex gap-2 mt-3'>
                <Link href ='/'>
                  <button className='rounded-full bg-[#0071FF] h-9 w-9 hover:bg-[#58a1fe] hover:translate-y-[-12px] duration-500 flex justify-center items-center'>
                    <FaFacebook className='fill-black'/>
                  </button>
                  </Link>
                  <Link href ='/'>
                  <button className='rounded-full bg-[#0071FF] h-9 w-9 hover:bg-[#58a1fe] hover:translate-y-[-12px] duration-500 flex justify-center items-center'>
                    <AiOutlineTwitter size={'20px'} className='fill-black'/>
                  </button>
                  </Link>
                  <Link href ='/'>
                  <button className='rounded-full bg-[#0071FF] h-9 w-9 hover:bg-[#58a1fe] hover:translate-y-[-12px] duration-500 flex justify-center items-center'>
                    <BsLinkedin className='fill-black'/>
                  </button>
                  </Link>
                  <Link href ='/'>
                  <button className='rounded-full bg-[#0071FF] h-9 w-9 hover:bg-[#58a1fe] hover:translate-y-[-12px] duration-500 flex justify-center items-center'>
                    <AiOutlineInstagram size={'20px'} className='fill-black'/>
                  </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='h-[600px] sm:w-[600px] w-full bg-[#0071FF] rounded-lg py-10 mx-auto '>
        <form className='flex flex-col px-5 gap-5'>
              <div className='flex flex-col'>
                <label className='font-bowl text-black text-xl py-1'>
                  Name
                </label>
                <input className='h-12  rounded-md text-black px-3 focus:outline-none' placeholder='Jeff'/>
              </div>
              <div className='flex flex-col'>
                <label className='font-bowl text-black text-xl py-1'>
                  Company Name
                </label>
                <input className='h-12  rounded-md text-black px-3 focus:outline-none' placeholder='Jeff Inc.'/>
              </div>

            <div className='flex flex-col'>
              <label className='font-bowl text-black text-xl py-1'>
                    Email
              </label>
              <input className='h-12 rounded-md text-black px-3 focus:outline-none' placeholder='jeff@jeffinc.com'/>
            </div>
            <div className='flex flex-col'>
              <label className='font-bowl text-black text-xl py-1'>
                    Message
              </label>
              <textarea className='h-28 rounded-md text-black text-start px-3 py-3 focus:outline-none'  placeholder='Message'/>
            </div>
            <input type='submit' value='Send' className='h-12 w-32 rounded-md cursor-pointer bg-black hover:bg-white hover:text-[#0071FF] duration-200' />
          </form>
        </div>
      </div>
      )

      }
    </section>
  )
}

export default Form