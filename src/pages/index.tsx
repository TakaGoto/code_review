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
                backgroundImage: `url(/images/landing_art.png)`,
                backgroundRepeat: 'no-repeat',
              }}
              ref={glitch.ref}
              className='blah min-h-screen w-full bg-[#0c0d0d] bg-cover bg-center opacity-100'
              onAnimationEnd={() => setIsAnimationDone(true)}
            >
              <Header />
              <div className='grid min-h-screen w-full place-items-center'>
                <div className='text-center font-orbitron text-9xl font-bold text-white'>
                  0N1Force
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </Layout>
  );
}
