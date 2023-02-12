/* eslint-disable @next/next/google-font-display */
import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <link
        rel='stylesheet'
        href='https://fonts.googleapis.com/css?family=Inconsolata:400,700%7CLato:100,100italic,300,300italic,400,400italic,700,700italic,900,900italic%7COrbitron:regular,500,700%7CInter:regular'
        media='all'
      />
      <Head>
        <link
          rel='preload'
          href='/fonts/inter-var-latin.woff2'
          as='font'
          type='font/woff2'
          crossOrigin='anonymous'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
