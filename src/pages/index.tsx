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
              className='z-1 absolute min-h-screen w-fit bg-[#0c0d0d] bg-[url("/images/landing_art.png")] bg-cover bg-center opacity-100 md:w-full lg:block'
            >
              <div className='grid min-h-screen w-full place-items-center'>
                <div className='invisible text-center font-orbitron text-9xl font-bold text-white sm:invisible md:visible lg:visible xl:visible 2xl:visible'>
                  0N1Force
                </div>
              </div>
            </div>
            {/* <img
              //ref={glitch.ref}
              className='z-1 bg-opacity-1 overlay-item absolute bottom-0 h-full w-full transform object-cover object-center lg:hidden'
              src='images/mobile_landing_art.png'
              alt=''
            /> */}
            <Header />
          </div>
          // <div>
          //   <div
          //     style={{
          //       backgroundRepeat: 'no-repeat',
          //     }}
          //     // ref={glitch.ref}
          //     className='z-100 invisible min-h-screen w-fit bg-[#0c0d0d] bg-[url("/images/landing_art.png")] bg-cover bg-center opacity-100 md:visible md:w-full'
          //     onAnimationEnd={() => setIsAnimationDone(true)}
          //   >
          //     <Header />
          //     <img
          //       src='/images/mobile_landing_art.png'
          //       width='375'
          //       height='2788'
          //       className='visible -z-10 lg:hidden'
          //       alt='mobile_landing_art'
          //     />
          //     <div className='grid min-h-screen w-full place-items-center'>
          //       <div className='invisible text-center font-orbitron text-9xl font-bold text-white sm:invisible md:visible lg:visible xl:visible 2xl:visible'>
          //         0N1Force
          //       </div>
          //     </div>
          //   </div>
          // </div>
        )}
      </main>
    </Layout>
  );
}
