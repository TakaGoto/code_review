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
        <div
          style={{
            backgroundImage: `url(/images/landing_art.png)`,
            backgroundRepeat: 'no-repeat',
          }}
          className='min-h-screen w-full bg-[#0c0d0d] bg-cover bg-center opacity-100'
        >
          <Header />
        </div>
      </main>
    </Layout>
  );
}
