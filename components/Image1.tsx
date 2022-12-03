import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import img1 from "../public/assets/Accelerate.png";
import useMediaQuery from "../hooks/useMediaQuery";

const imgVariants: Variants = {
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

const Image1 = () => {
	const isLarge = useMediaQuery("(min-width: 768px)");
	return (
		<section className='bg-black py-14 xl:px-0 px-2 snap-center'>
			<motion.div
				className='max-w-[1440px] mx-auto overflow-hidden'
				initial='offscreen'
				whileInView='onscreen'
				viewport={{ amount: 0.5, once: true }}>
				<motion.div
					className='relative border flex flex-col border-transparent overflow-hidden rounded-xl'
					variants={imgVariants}>
					<Image
						src={img1}
						alt='/'
						className=' object-cover md:h-[720px] md:object-center rounded-xl xl:scale-100 md:scale-125'
						priority
					/>
					{/* If Screens > 768px else Mobile */}
					{isLarge ? (
						<div className='absolute top-[10%] left-[5%] w-[35%]'>
							<h2 className=' font-bowl text-5xl leading-snug mb-2 text-shadow-sm shadow-black'>
								Accelerate commerce with WhatsApp
							</h2>
							<p className='text-xl leading-snug xl:text-2xl text-shadow-sm shadow-black'>
								Answer leads, recommend products, or personalise your clients’
								shopping experience with an automated custom chatbot to maximise
								revenue.
							</p>
						</div>
					) : (
						<div className='mt-5'>
							<h2 className=' font-bowl text-4xl leading-snug mb-2'>
								Accelerate commerce with WhatsApp
							</h2>
							<p className='leading-snug'>
								Answer leads, recommend products, or personalise your clients’
								shopping experience with an automated custom chatbot to maximise
								revenue.
							</p>
						</div>
					)}
				</motion.div>
			</motion.div>
		</section>
	);
};

export default Image1;
