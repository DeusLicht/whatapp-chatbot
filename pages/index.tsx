import Head from 'next/head'
import Image from 'next/image'
import NavBar from '../components/NavBar'
import useMediaQuery from '../public/hooks/useMediaQuery'
import { useState, useEffect } from 'react'
import Hero from '../components/Hero'
import Image1 from '../components/Image1'
import Image2 from '../components/Image2'
import Image3 from '../components/Image3'
import Image4 from '../components/Image4'
import Ideal from '../components/Ideal'
import WhyWA from '../components/WhyWA'
import FAQ from '../components/FAQ'
import Form from '../components/Form'
import Footer from '../components/Footer'

export default function Home() {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true)

  const handleScroll = () => {
      const currentScrollPos = window.scrollY

      if(currentScrollPos > prevScrollPos){
          setVisible(false)
      }else{
          setVisible(true)
      }

      setPrevScrollPos(currentScrollPos)
  }

  useEffect( () => {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll)
  })

  return (
    <div>
      <Head>
        <title>WhatsApp Chatbot | Roughpaper</title>
        <meta name="description" content="Send and receive data in real-time on your favourite 3rd party apps from WhatsApp." />
        <link rel="icon" href="/" />
      </Head>
      <NavBar isVisible={visible}/>
      <Hero/>
      <Ideal/>
      <Image1/>
      <Image2/>
      <Image3/>
      <Image4/>
      <WhyWA/>
      <FAQ/>
      <Form/>
      <Footer/>
    </div>
  )
}
