import React from "react";
import { motion, Variants } from "framer-motion";
import manage from "../public/assets/young-woman-eating-croissants-cafe.jpg";
import Image from "next/image";
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

const Image2 = () => {
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
						src={manage}
						alt='/'
						className=' object-cover md:h-[720px] md:object-top rounded-xl xl:scale-100 md:scale-125'
						priority
					/>
					{/* If Screens > 768px else Mobile */}
					{isLarge ? (
						<div className='absolute top-[20%] right-[5%] w-[40%]'>
							<h2 className=' font-bowl text-5xl leading-snug mb-2 text-shadow-sm shadow-black'>
								Manage your orders easily with WhatsApp
							</h2>
							<p className='text-xl leading-snug xl:text-2xl text-shadow-sm shadow-black'>
								When chatbot converts sales for you, you just have to accept or
								reject those orders through our dashboard.
							</p>
						</div>
					) : (
						<div className='mt-5'>
							<h2 className=' font-bowl text-4xl leading-snug mb-2 '>
								Manage your orders easily with WhatsApp
							</h2>
							<p className='leading-snug'>
								When chatbot converts sales for you, you just have to accept or
								reject those orders through our dashboard.
							</p>
						</div>
					)}
				</motion.div>
			</motion.div>
		</section>
	);
};

export default Image2;
