import { AppProps } from 'next/app';
import { useEffect } from 'react';

import '@/styles/globals.css';
function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Handler to call on window resize
      // eslint-disable-next-line no-inner-declarations
      const handleResize = () => {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
      };

      // Add event listener
      window.addEventListener('resize', handleResize);

      // Call handler right away so state gets updated with initial window size
      handleResize();

      // Remove event listener on cleanup
      return () => window.removeEventListener('resize', handleResize);
    }
  });

  return <Component {...pageProps} />;
}

export default MyApp;
