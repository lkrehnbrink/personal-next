import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/header'
import Head from 'next/head'

import * as ga from '../lib/ga';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    if ('production' !== process.env.APP_ENV) {
      return;
    }

    const handleRouteChange = (url: string) => {
      ga.pageview(url)
    }
    
    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  },[router.events]);

  return <>
    {'production' === process.env.APP_ENV && <Head>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </Head>}
    <Header />
    <Component {...pageProps} />
  </>
}

export default MyApp
