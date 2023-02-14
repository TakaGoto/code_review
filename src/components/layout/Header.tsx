import Image from 'next/image';
import * as React from 'react';

export default function Header() {
  return (
    <div className='z-100 absolute top-0 mx-auto w-full'>
      <nav className='mb-10 border-gray-200 px-2'>
        <div className='container mx-auto flex flex-wrap items-center justify-between'>
          <a href='#' className='flex pt-2'>
            <Image
              src='svg/0n1_logo.svg'
              alt='0n1 logo'
              height='45'
              width='45'
            />
          </a>
          <div
            className='hidden w-full items-center justify-between font-orbitron md:order-1 md:flex md:w-auto'
            id='mobile-menu-3'
          >
            <ul className='mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium'>
              <li>
                <a
                  href='#'
                  className='rounded px-4 py-2 text-slate-50 hover:text-[#ff494e] hover:underline'
                  aria-current='page'
                >
                  HOME
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='rounded py-2 text-slate-50 hover:text-[#ff494e] hover:underline'
                >
                  SHOP
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='rounded py-2 text-slate-50 hover:text-[#ff494e] hover:underline'
                >
                  LORE
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='rounded py-2 text-slate-50 hover:text-[#ff494e] hover:underline'
                >
                  BRAND
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='rounded py-2 text-slate-50 hover:text-[#ff494e] hover:underline'
                >
                  GALLERY
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='rounded py-2 text-slate-50 hover:text-[#ff494e] hover:underline'
                >
                  COLLECTION
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
