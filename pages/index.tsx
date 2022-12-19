import Head from "next/head";
import Image from "next/image";
import NavBar from "../components/NavBar";
import useMediaQuery from "../hooks/useMediaQuery";
import { useState, useEffect } from "react";
import Hero from "../components/Hero";
import Ideal from "../components/Ideal";
import WhyWA from "../components/WhyWA";
import FAQ from "../components/FAQ";
import Form from "../components/Form";
import Footer from "../components/Footer";
import ImageSection from "../components/ImageSection";

import Accelerate from "../public/assets/Accelerate.png";
import Manage from "../public/assets/young-woman-eating-croissants-cafe.jpg";
import Integrate from "../public/assets/Integrate.png";
import PartyLogo from "../public/assets/logos4.png";

export default function Home() {
	const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

	const [prevScrollPos, setPrevScrollPos] = useState(0);
	const [visible, setVisible] = useState(true);

	const handleScroll = () => {
		const currentScrollPos = window.scrollY;

		if (currentScrollPos > prevScrollPos) {
			setVisible(false);
		} else {
			setVisible(true);
		}

		setPrevScrollPos(currentScrollPos);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<div>
			<Head>
				<title>WhatsApp Chatbot | Roughpaper</title>
				<meta
					name='description'
					content='Send and receive data in real-time on your favourite 3rd party apps from WhatsApp.'
				/>
				<link rel='icon' href='assets/HeaderIconRP.png' />
			</Head>
			<NavBar isVisible={visible} />
			<Hero />
			<Ideal />
			<ImageSection />
			<WhyWA />
			<FAQ />
			<Form />
			<Footer />
		</div>
	);
}
