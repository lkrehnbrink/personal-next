import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/header'

function MyApp({ Component, pageProps }: AppProps) {
  return <div style={{display: 'grid', padding: '1rem'}}>
    <Header/>
    <Component {...pageProps} />
  </div>
}

export default MyApp
