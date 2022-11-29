import '../styles/globals.css'
import type { AppProps } from 'next/app'
import useMediaQuery from '../public/hooks/useMediaQuery'
import { useState, useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {

  return <Component {...pageProps} />
}
