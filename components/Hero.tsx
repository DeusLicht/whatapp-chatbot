import Link from "next/link";
import React from "react";

const Hero = () => {
	return (
		<section className='bg-black pt-14 pb-24 md:px-3 px-5 snap-center'>
			<div className='max-w-[1200px] mx-auto flex flex-col items-center gap-y-3'>
				<div className='flex items-center justify-center'>
					<p className='text-[#0071FF] text-center text-lg lg:text-xl font-semibold'>
						Power an end-to-end shopping experience on your customers’ favorite
						channel.
					</p>
				</div>
				<div className='flex items-center justify-center'>
					<h1 className=' font-bowl md:text-6xl text-5xl leading-snug md:leading-snug text-center '>
						Boost your sales with the leading WhatsApp Solution provider in the
						UAE.
					</h1>
				</div>
				<div>
					<Link href='/'>
						<button className='h-[50px]  border-2 border-[#0071FF] bg-[#0071FF] px-10 rounded-full group hover:bg-white transition duration-200'>
							<span className='text-black font-semibold text-[15px] lg:text-[16px] group-hover:text-[#0071FF] transition duration-200'>
								Enquire Now
							</span>
						</button>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Hero;
