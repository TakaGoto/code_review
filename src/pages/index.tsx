import * as React from 'react';

import Header from '@/components/layout/Header';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>
        <Header />
        <div
          style={{
            backgroundImage: `url(/landing_2.jpg)`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
          className='min-h-screen bg-[#0c0d0d] opacity-100'
        >
          {/* <div
            style={{
              backgroundImage: `url(/svg/nano_overlay.svg)`,
              backgroundRepeat: 'no-repeat',
            }}
            className='z-25 flex h-screen min-h-screen w-full flex-col bg-[#0c0d0d] p-5 opacity-40'
          >
            <div className='bg-slate-30 mt-auto mb-24 w-full p-10 text-center text-slate-400'>
              <Button className='rounded-none border border-[#ff494e] bg-transparent py-2 px-4 font-semibold text-white hover:border-transparent hover:bg-[#ff494e]'>
                ENTER THE 0N1VERSE
              </Button>
            </div>
          </div> */}
        </div>
      </main>
    </Layout>
  );
}
