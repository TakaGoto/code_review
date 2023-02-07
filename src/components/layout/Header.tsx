import Image from 'next/image';
import * as React from 'react';

export default function Header() {
  return (
    <header className='top-0 z-30 bg-black bg-opacity-0 px-2 py-4 sm:px-4'>
      <div className='mx-auto flex max-w-7xl items-center justify-between'>
        <a href='#'>
          <Image src='svg/0n1_logo.svg' alt='0n1 logo' height='45' width='45' />
        </a>
        <div className='flex items-center space-x-1 font-orbitron'>
          <ul className='Namehidden space-x-2 md:inline-flex'>
            <li className=''>
              <a
                href='#'
                className='rounded px-4 py-2 text-slate-50 hover:text-[#ff494e] hover:underline'
              >
                HOME
              </a>
            </li>
            <li>
              <a
                href='#'
                className='rounded px-4 py-2 text-slate-50 hover:text-[#ff494e] hover:underline'
              >
                SHOP
              </a>
            </li>
            <li>
              <a
                href='#'
                className='rounded px-4 py-2 text-slate-50 hover:text-[#ff494e] hover:underline'
              >
                LORE
              </a>
            </li>
            <li>
              <a
                href='#'
                className='rounded px-4 py-2 text-slate-50 hover:text-[#ff494e] hover:underline'
              >
                BRAND
              </a>
            </li>
            <li>
              <a
                href='#'
                className='rounded px-4 py-2 text-slate-50 hover:text-[#ff494e] hover:underline'
              >
                GALLERY
              </a>
            </li>
            <li>
              <a
                href='#'
                className='rounded px-4 py-2 text-slate-50 hover:text-[#ff494e] hover:underline'
              >
                COLLECTION
              </a>
            </li>
          </ul>
          <div className='inline-flex md:hidden'>
            <button className='flex-none px-2 '>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 8h16M4 16h16'
                />
              </svg>
              <span className='sr-only'>Open Menu</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
