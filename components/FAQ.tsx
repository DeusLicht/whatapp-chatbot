
import React from 'react'

const FAQ = () => {
  return (
    <section className='bg-black pt-28 pb-24 md:px-3 px-5 md:snap-center snap-start'>
      <div className='max-w-[1200px] mx-auto flex flex-col  gap-y-3'>
        <div className='flex items-center justify-center'>
          <p className='text-[#0071FF] text-center text-lg lg:text-xl font-semibold'>
          FAQs
          </p>
        </div>
        <div className='flex items-center justify-center'>
          <h1 className=' font-bowl md:text-6xl text-5xl leading-snug md:leading-snug text-center'>
          Frequently Asked Questions
          </h1>
        </div>
        <div className='flex md:flex-row flex-col md:gap-5 gap-4  justify-center'>
            <div className='flex flex-col gap-4 '>
                {/* 1st FAQ */}
                <div className=' relative w-full overflow-hidden'>
                <input type='checkbox' className='absolute top-0 inset-x-0 w-full h-14 opacity-0 z-10  cursor-pointer peer'/>
                <div className=' h-14 px-10 flex flex-col justify-center rounded-lg transition-all duration-500 text-black bg-white peer-checked:bg-[#0071FF] peer-checked:text-white'>
                    <h2 className='font-bowl'>
                        Is WhatsApp Business API free?
                    </h2>
                </div>
                <div className='absolute text-[#0077FF] top-4 right-4 transition-transform duration-500 rotate-0 peer-checked:rotate-90 peer-checked:text-white'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className='w-6 h-6'>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                </div>
                <div className='overflow-hidden bg-black  transition-all duration-500 max-h-0 peer-checked:max-h-60'>
                   <div className='p-5'>
                        <p className='lg:px-10 px-5'>
                            No, WhatsApp Business API isn't Free. Only Procurement of WhatsApp Business API is free. But, you'd need to pay WhatsApp Conversation charges for Business & User Initiated Conversations
                        </p>
                   </div>
                </div>
            </div>
            {/* 2nd FAQ */}
            <div className=' relative overflow-hidden '>
                <input type='checkbox' className='absolute top-0 inset-x-0 w-full h-14 opacity-0 z-10  cursor-pointer peer'/>
                <div className=' h-14 px-10 flex flex-col justify-center rounded-lg transition-all duration-500 text-black bg-white peer-checked:bg-[#0071FF] peer-checked:text-white'>
                    <h2 className='font-bowl'>
                        What is WhatsApp Conversation?
                    </h2>
                </div>
                <div className='absolute text-[#0077FF] top-4 right-4 transition-transform duration-500 rotate-0 peer-checked:rotate-90 peer-checked:text-white'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className='w-6 h-6'>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                </div>
                <div className='overflow-hidden bg-black  transition-all duration-500 max-h-0 peer-checked:max-h-60'>
                   <div className='p-5'>
                        <p className='lg:px-10 px-5'>
                        WhatsApp Conversation is a 24-hour messaging window initiated only when a business messages a user. Businesses and users can exchange any number of messages, including template messages, within a 24 hour conversation session without incurring additional charges. 
                        </p>
                   </div>
                </div>
            </div>
            {/* 3rd FAQ */}
            <div className=' relative w-full overflow-hidden '>
                <input type='checkbox' className='absolute top-0 inset-x-0 w-full h-14 opacity-0 z-10  cursor-pointer peer'/>
                <div className=' h-14 px-10 flex flex-col justify-center rounded-lg transition-all duration-500 text-black bg-white peer-checked:bg-[#0071FF] peer-checked:text-white'>
                    <h2 className='font-bowl'>
                        What is User Initiated Conversations (UIC)?
                    </h2>
                </div>
                <div className='absolute text-[#0077FF] top-4 right-4 transition-transform duration-500 rotate-0 peer-checked:rotate-90 peer-checked:text-white'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className='w-6 h-6'>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                </div>
                <div className='overflow-hidden bg-black  transition-all duration-500 max-h-0 peer-checked:max-h-60'>
                   <div className='p-5'>
                        <p className='lg:px-10 px-5'>
                        Whenever a business replies to a user within the 24 hour customer service window, that message initiates a user-initiated conversation.
                        </p>
                   </div>
                </div>
            </div>
            {/* 4th FAQ */}
            <div className=' relative w-full overflow-hidden '>
                <input type='checkbox' className='absolute top-0 inset-x-0 w-full h-14 opacity-0 z-10  cursor-pointer peer'/>
                <div className=' h-14 px-10 flex flex-col justify-center rounded-lg transition-all duration-500 text-black bg-white peer-checked:bg-[#0071FF] peer-checked:text-white'>
                    <h2 className='font-bowl'>
                    What is Business Initiated Conversations (BIC)?
                    </h2>
                </div>
                <div className='absolute text-[#0077FF] top-4 right-4 transition-transform duration-500 rotate-0 peer-checked:rotate-90 peer-checked:text-white'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className='w-6 h-6'>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                </div>
                <div className='overflow-hidden bg-black  transition-all duration-500 max-h-0 peer-checked:max-h-60'>
                   <div className='p-5'>
                        <p className='lg:px-10 px-5 '>
                        A conversation that initiates from a business sending a user a message outside the 24-hour customer service window. Messages that initiate a business-initiated conversation will require a template.
                        </p>
                   </div>
                </div>
            </div>
            </div>
            <div className='flex flex-col gap-4 '>
                {/* 5th FAQ */}
            <div className=' relative w-full overflow-hidden '>
                <input type='checkbox' className='absolute top-0 inset-x-0 w-full h-14 opacity-0 z-10  cursor-pointer peer'/>
                <div className=' h-14 px-10 flex flex-col justify-center rounded-lg transition-all duration-500 text-black bg-white peer-checked:bg-[#0071FF] peer-checked:text-white'>
                    <h2 className='font-bowl'>
                        Is WhatsApp Business API free?
                    </h2>
                </div>
                <div className='absolute text-[#0077FF] top-4 right-4 transition-transform duration-500 rotate-0 peer-checked:rotate-90 peer-checked:text-white'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className='w-6 h-6'>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                </div>
                <div className='overflow-hidden bg-black  transition-all duration-500 max-h-0 peer-checked:max-h-60'>
                   <div className='p-5'>
                        <p className='lg:px-10 px-5 '>
                            No, WhatsApp Business API isn't Free. Only Procurement of WhatsApp Business API is free. But, you'd need to pay WhatsApp Conversation charges for Business & User Initiated Conversations
                        </p>
                   </div>
                </div>
            </div>
            {/* 6th FAQ */}
            <div className=' relative w-full overflow-hidden '>
                <input type='checkbox' className='absolute top-0 inset-x-0 w-full h-14 opacity-0 z-10  cursor-pointer peer'/>
                <div className=' h-14 px-10 flex flex-col justify-center rounded-lg transition-all duration-500 text-black bg-white peer-checked:bg-[#0071FF] peer-checked:text-white'>
                    <h2 className='font-bowl'>
                        Is WhatsApp Business API free?
                    </h2>
                </div>
                <div className='absolute text-[#0077FF] top-4 right-4 transition-transform duration-500 rotate-0 peer-checked:rotate-90 peer-checked:text-white'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className='w-6 h-6'>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                </div>
                <div className='overflow-hidden bg-black  transition-all duration-500 max-h-0 peer-checked:max-h-60'>
                   <div className='p-5'>
                        <p className='lg:px-10 px-5 '>
                        WhatsApp Conversation is a 24-hour messaging window initiated only when a business messages a user. Businesses and users can exchange any number of messages, including template messages, within a 24 hour conversation session without incurring additional charges.
                        </p>
                   </div>
                </div>
            </div>
            {/* 7th FAQ */}
            <div className=' relative w-full overflow-hidden '>
                <input type='checkbox' className='absolute top-0 inset-x-0 w-full h-14 opacity-0 z-10  cursor-pointer peer'/>
                <div className=' h-14 px-10 flex flex-col justify-center rounded-lg transition-all duration-500 text-black bg-white peer-checked:bg-[#0071FF] peer-checked:text-white'>
                    <h2 className='font-bowl'>
                        Is WhatsApp Business API free?
                    </h2>
                </div>
                <div className='absolute text-[#0077FF] top-4 right-4 transition-transform duration-500 rotate-0 peer-checked:rotate-90 peer-checked:text-white'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className='w-6 h-6'>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                </div>
                <div className='overflow-hidden bg-black  transition-all duration-500 max-h-0 peer-checked:max-h-60'>
                   <div className='p-5'>
                        <p className='lg:px-10 px-5 '>
                            No, WhatsApp Business API isn't Free. Only Procurement of WhatsApp Business API is free. But, you'd need to pay WhatsApp Conversation charges for Business & User Initiated Conversations
                        </p>
                   </div>
                </div>
            </div>
            {/* 8th FAQ */}
            <div className=' relative w-full overflow-hidden '>
                <input type='checkbox' className='absolute top-0 inset-x-0 w-full h-14 opacity-0 z-10  cursor-pointer peer'/>
                <div className=' h-14 px-10 flex flex-col justify-center rounded-lg transition-all duration-500 text-black bg-white peer-checked:bg-[#0071FF] peer-checked:text-white'>
                    <h2 className='font-bowl'>
                        Is WhatsApp Business API free?
                    </h2>
                </div>
                <div className='absolute text-[#0077FF] top-4 right-4 transition-transform duration-500 rotate-0 peer-checked:rotate-90 peer-checked:text-white'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className='w-6 h-6'>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                </div>
                <div className='overflow-hidden bg-black  transition-all duration-500 max-h-0 peer-checked:max-h-60'>
                   <div className='p-5'>
                        <p className='lg:px-10 px-5 '>
                            No, WhatsApp Business API isn't Free. Only Procurement of WhatsApp Business API is free. But, you'd need to pay WhatsApp Conversation charges for Business & User Initiated Conversations
                        </p>
                   </div>
                </div>
            </div>
            </div>
        </div>
        {/* 9th FAQ */}
        <div className=' relative md:w-1/2 md:mx-auto w-auto overflow-hidden'>
                <input type='checkbox' className='absolute top-0 inset-x-0 w-full h-16 opacity-0 z-10  cursor-pointer peer'/>
                <div className=' sm:h-16 h-20 px-10 flex flex-col justify-center rounded-lg transition-all duration-500 text-black bg-white peer-checked:bg-[#0071FF] peer-checked:text-white'>
                    <h2 className='font-bowl'>
                        Can I use WhatsApp App & WhatsApp Business API on the same number? 
                    </h2>
                </div>
                <div className='absolute text-[#0077FF] top-4 right-4 transition-transform duration-500 rotate-0 peer-checked:rotate-90 peer-checked:text-white'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className='w-6 h-6'>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                </div>
                <div className='overflow-hidden bg-black  transition-all duration-500 max-h-0 peer-checked:max-h-60'>
                   <div className='p-5'>
                        <p className='lg:px-10 px-5 '>
                            No, you can’t! The number which is active on WhatsApp Business API can’t be registered on WhatsApp Apps. 
                        </p>
                   </div>
                </div>
            </div>
      </div>
    </section>
  )
}

export default FAQ