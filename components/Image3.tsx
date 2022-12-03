import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import integrate from "../public/assets/Integrate.png";
import partylogo from "../public/assets/logos4.png";
import useMediaQuery from "../hooks/useMediaQuery";

const imgVariants = {
	offscreen: {
		y: 300,
		opacity: 0,
	},
	onscreen: {
		y: 0,
		opacity: 1,
		transition: {
			ease: "easeOut",
			duration: 1,
		},
	},
};

const Image3 = () => {
	const isLarge = useMediaQuery("(min-width: 768px)");
	return (
		<section className='bg-black py-14 xl:px-0 px-2 snap-center '>
			<motion.div
				className='max-w-[1440px] mx-auto overflow-hidden'
				initial='offscreen'
				whileInView='onscreen'
				viewport={{ amount: 0.5, once: true }}>
				<motion.div
					className='relative border flex flex-col border-transparent overflow-hidden rounded-xl'
					variants={imgVariants}>
					<Image
						src={integrate}
						alt='/'
						className=' object-cover md:h-[720px] md:object-top md:ml-20 lg:ml-0 rounded-xl xl:scale-100 md:scale-125'
						priority
					/>
					{/* If Screens > 768px else Mobile */}
					{isLarge ? (
						<div className='absolute top-[20%] right-[5%] w-[40%]'>
							<h2 className=' font-bowl text-5xl leading-snug mb-2 text-shadow-sm shadow-black'>
								Integrate your WhatsApp with 3rd party apps
							</h2>
							<p className='text-xl leading-snug xl:text-2xl text-shadow-sm shadow-black mb-5'>
								Send and receive data in real-time on your favourite 3rd party
								apps from WhatsApp.
							</p>
							<Image src={partylogo} alt='/' />
						</div>
					) : (
						<div className='mt-5'>
							<h2 className=' font-bowl text-4xl leading-snug mb-2 '>
								Integrate your WhatsApp with 3rd party apps
							</h2>
							<p className='leading-snug mb-5'>
								Send and receive data in real-time on your favourite 3rd party
								apps from WhatsApp.
							</p>
							<Image src={partylogo} alt='/' className=' ' />
						</div>
					)}
				</motion.div>
			</motion.div>
		</section>
	);
};

export default Image3;
