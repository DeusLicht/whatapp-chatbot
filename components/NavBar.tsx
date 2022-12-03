import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import useMediaQuery from "../hooks/useMediaQuery";
import { HiOutlineDotsVertical } from "react-icons/hi";
import Image from "next/image";
import Link from "next/link";
import Logo from "../public/assets/RPLogoWhite.png";
import LogoB from "../public/assets/RPLogoBlack.png";
import useToggle from "../hooks/useToggle";

const nav = {
	hidden: {},
	visible: {
		transition: {
			duration: 0.1,
		},
	},
};

const side = {
	entry: {
		left: "-200vh",
	},

	animate: {
		left: 0,
		transition: {
			duration: 1,
			delayChildren: 5,
		},
	},
};

const NavBar = ({ isVisible }: any) => {
	const {status: isMenuToggled, toggleStatus:IsMenuToggled} = useToggle();
	const isDesktop = useMediaQuery("(min-width: 768px)");
	return (
		<motion.header
			className={`sticky ${
				isVisible ? "top-0" : ""
			} w-full md:h-[100px] h-[90px]  z-10 flex justify-center items-center`}
			layout
			variants={nav}
			initial='hidden'
			animate='visible'>
			<div className='flex items-center justify-between w-full h-full max-w-[1600px] mx-auto px-10 bg-opacity-80 shadow-sm bg-clip-padding blur-backdrop-filter '>
				<Link href='/'>
					<Image src={Logo} alt='/' className='h-[100px] w-auto' />
				</Link>
				{/*Desktop Version */}
				{isDesktop ? (
					<>
						<div className=''>
							<ul className='flex'>
								<li className='p-5 font-bold text-sm lg:text-lg '>
									{" "}
									<Link href='/' className='hover:text-[#0071FF] duration-200'>
										Home
									</Link>
								</li>
								<li className='p-5 font-bold text-sm lg:text-lg '>
									{" "}
									<Link href='/' className='hover:text-[#0071FF] duration-200'>
										About Us
									</Link>
								</li>
								<li className='p-5 font-bold text-sm lg:text-lg '>
									{" "}
									<Link href='/' className='hover:text-[#0071FF] duration-200'>
										Marketing
									</Link>
								</li>
								<li className='p-5 font-bold text-sm lg:text-lg '>
									{" "}
									<Link href='/' className='hover:text-[#0071FF] duration-200'>
										Tech
									</Link>
								</li>
								<li className='p-5 font-bold text-sm lg:text-lg '>
									{" "}
									<Link href='/' className='hover:text-[#0071FF] duration-200'>
										Blog
									</Link>
								</li>
							</ul>
						</div>
						<div className=''>
							<Link href='/'>
								<button className='border-2 border-[#0071FF] bg-[#0071FF] rounded-lg lg:py-2 py-1 lg:px-7 px-5 group hover:bg-white transition duration-200'>
									<span className='text-black font-semibold text-[13px] lg:text-[14px] group-hover:text-[#0071FF] transition duration-200'>
										Contact Us
									</span>
								</button>
							</Link>
						</div>
					</>
				) : (
					<button
						className='rounded-full p-2'
						onClick={IsMenuToggled}>
						<HiOutlineDotsVertical size={25} />
					</button>
				)}
			</div>
			{/*Mobile & Tablets Version <768px width screens */}
			<AnimatePresence>
				{!isDesktop && isMenuToggled && (
					<>
						<motion.div
							key='child1'
							className='fixed left-0 bottom-0 h-full w-full bg-[#191919] bg-opacity-25 shadow-sm bg-clip-padding blur-backdrop-filter z-15'
							onClick={IsMenuToggled}
							variants={side}
							initial={{ left: "-100vh" }}
							animate={{ left: 0, transition: { duration: 1 } }}
							exit={{
								left: "-200vh",
								transition: { duration: 1, delay: 0.5 },
							}}>
							<motion.div
								key='child2'
								className='fixed flex flex-col left-0 bottom-0 h-full w-[60%] bg-white'
								initial={{ left: "-100vh" }}
								animate={{ left: 0, transition: { duration: 1, delay: 0.5 } }}
								exit={{ left: "-200vh", transition: { duration: 1 } }}>
								<div className='mr-auto text-black font-bold text-xl'>
									<Link href='/'>
										<Image
											src={LogoB}
											alt='/'
											className='h-[150px] w-auto px-10 mt-10'
										/>
									</Link>
									<ul className=''>
										<li className='px-10 py-2 font-bold text-lg'>
											<Link
												href='/'
												className='hover:text-[#0071FF] duration-200'>
												Home
											</Link>
										</li>
										<li className='px-10 py-2 font-bold text-lg'>
											<Link
												href='/'
												className='hover:text-[#0071FF] duration-200'>
												About Us
											</Link>
										</li>
										<li className='px-10 py-2 font-bold text-lg'>
											<Link
												href='/'
												className='hover:text-[#0071FF] duration-200'>
												Marketing
											</Link>
										</li>
										<li className='px-10 py-2 font-bold text-lg'>
											<Link
												href='/'
												className='hover:text-[#0071FF] duration-200'>
												Tech
											</Link>
										</li>
										<li className='px-10 py-2 font-bold text-lg'>
											<Link
												href='/'
												className='hover:text-[#0071FF] duration-200'>
												Blog
											</Link>
										</li>
										<li className='px-10 py-2 font-bold text-lg'>
											<Link
												href='/'
												className='hover:text-[#0071FF] duration-200'>
												Contact Us
											</Link>
										</li>
									</ul>
								</div>
							</motion.div>
						</motion.div>
					</>
				)}
			</AnimatePresence>
		</motion.header>
	);
};

export default NavBar;
