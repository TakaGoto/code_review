/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
import * as React from 'react';
import { useEffect } from 'react';
import { useGlitch } from 'react-powerglitch';

import Header from '@/components/layout/Header';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import Shift from '@/pages/shift';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

export default function HomePage() {
  const [isAnimationDone, setIsAnimationDone] = React.useState(false);
  const glitch = useGlitch();

  useEffect(() => {
    setTimeout(() => {
      setIsAnimationDone(true);
    }, 4000);
  }, []);

  return (
    <Layout>
      <Seo />

      <main className='w-full bg-black'>
        {isAnimationDone ? (
          <Shift />
        ) : (
          <div>
            <div
              style={{
                backgroundRepeat: 'no-repeat',
              }}
              ref={glitch.ref}
              className='z-1 absolute min-h-screen w-full bg-[#0c0d0d] bg-[url("/images/landing_art.png")] bg-cover bg-center opacity-100 md:w-full lg:block'
            >
              <div className='grid min-h-screen place-items-center'>
                <div className='text-center font-orbitron text-2xl font-bold text-white md:text-9xl'>
                  0N1Force
                </div>
              </div>
            </div>
            <Header />
          </div>
        )}
      </main>
    </Layout>
  );
}
