import Head from 'next/head'
import Image from 'next/image'
import NavBar from '../components/NavBar'
import useMediaQuery from '../public/hooks/useMediaQuery'
import { useState, useEffect } from 'react'
import Hero from '../components/Hero'

export default function Home() {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <Head>
        <title>WhatsApp Chatbot | Roughpaper</title>
        <meta name="description" content="Send and receive data in real-time on your favourite 3rd party apps from WhatsApp." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar isTopOfPage={isTopOfPage}/>
      <Hero/>
    </div>
  )
}
