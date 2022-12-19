import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import img1 from "../public/assets/Accelerate.png";
import useMediaQuery from "../hooks/useMediaQuery";

import Accelerate from "../public/assets/Accelerate.png";
import Manage from "../public/assets/young-woman-eating-croissants-cafe.jpg";
import Integrate from "../public/assets/Integrate.png";
import PartyLogo from "../public/assets/logos4.png";
import Shuttle from "../public/assets/Badminton.png";

const Cards = [
	{
		id: 1,
		img: Accelerate ,
		contentImgExist : false,
		header: "Accelerate commerce with WhatsApp",
		content:
			"Answer leads, recommend products, or personalise your clients’ shopping experience with an automated custom chatbot to maximise revenue.",
		imgLayout:
			"object-cover md:h-[720px] md:object-center rounded-xl xl:scale-100 md:scale-125",
		textLayout: "absolute top-[10%] left-[5%] w-[35%]",
	},
	{
		id: 2,
		img: Manage ,
		contentImgExist : false,
		header: "Manage your orders easily with WhatsApp",
		content:
			"When chatbot converts sales for you, you just have to accept or reject those orders through our dashboard.",
		imgLayout:
			"object-cover md:h-[720px] md:object-top rounded-xl xl:scale-100 md:scale-125",
		textLayout: "absolute top-[20%] right-[5%] w-[40%]",
	},
	{
		id: 3,
		img: Integrate ,
		contentImgExist : true,
		header: "Integrate your WhatsApp with 3rd party apps",
		content:
			"Send and receive data in real-time on your favourite 3rd party apps from WhatsApp.",
		imgLayout:
			"object-cover md:h-[720px] md:object-top md:ml-20 lg:ml-0 rounded-xl xl:scale-100 md:scale-125",
		textLayout: "absolute top-[20%] right-[5%] w-[40%]",
	},
	{
		id: 4,
		img: Shuttle ,
		contentImgExist : false,
		header: "Bookings & reservations made simple",
		content:
			"Improve customer satisfaction by automating customer servicing, appointment bookings, reservations and account management.",
		imgLayout:
			"object-cover md:h-[720px] md:object-bottom md:ml-20 md:mb-4 lg:mb-0 lg:ml-0 rounded-xl xl:scale-100 md:scale-125",
		textLayout: "absolute top-[20%] right-[10%] lg:w-[35%] md:w-[45%]",
	},

];

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

const ImageSection = () => {
	const isLarge = useMediaQuery("(min-width: 768px)");
	return (
		<section className='bg-black py-14 xl:px-0 px-2 snap-center flex flex-col gap-28'>
			{Cards.map((cards) => (
				<motion.div
				className='max-w-[1440px] mx-auto overflow-hidden'
				initial='offscreen'
				whileInView='onscreen'
				viewport={{ amount: 0.5, once: true }} key={cards.id}>
				<motion.div
					className='relative border flex flex-col border-transparent overflow-hidden rounded-xl'
					variants={imgVariants}>
					<Image src={cards.img} alt='/' className={cards.imgLayout} priority />
					{/* If Screens > 768px else Mobile */}
					{isLarge ? (
						<div className={cards.textLayout}>
							<h2 className=' font-bowl text-5xl leading-snug mb-2 text-shadow-sm shadow-black'>
								{cards.header}
							</h2>
							<p className='text-xl leading-snug xl:text-2xl text-shadow-sm shadow-black'>
								{cards.content}
							</p>
							{cards.contentImgExist ? <Image src={PartyLogo} alt='' className="mt-4" /> : <></>}
						</div>
					) : (
						<div className='mt-5'>
							<h2 className=' font-bowl text-4xl leading-snug mb-2'>
								{cards.header}
							</h2>
							<p className='leading-snug'>{cards.content}</p>
							{cards.contentImgExist ? <Image src={PartyLogo} alt='' className="mt-4"/> : <></>}
						</div>
					)}
				</motion.div>
			</motion.div>
			))
				
			}
		</section>
	);
};

export default ImageSection;
