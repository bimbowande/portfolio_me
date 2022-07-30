import '../styles/globals.scss'
import type { AppProps } from 'next/app';
import {lightTheme} from '../styles/Theme/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return  <Component {...pageProps} /> 
}

export default MyApp 
