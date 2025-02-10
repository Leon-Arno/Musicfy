'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);
  return (
    <header>
      <div className='container lg:max-w-screen-lg px-4'>
        <nav className='flex items-center justify-between py-4 flex-wrap'>
          <div>
            <Link className='font-medium text-xl' href='/'>
              Musicfy
            </Link>
          </div>

          <ul className='flex font-regular text-sm space-x-8'>
            <li>
              <Link href='/trending'>Trending</Link>
            </li>
            <li>
              <Link href='/artists'>Artists</Link>
            </li>
            <li>
              <Link href='/pricing'>Pricing</Link>
            </li>
            <li>
              <Link href='/about-us'>About us</Link>
            </li>
          </ul>

          <div className='flex items-center'>
            <Link className='text-sm mr-8' href=''>
              Log in
            </Link>
            <Link
              className='font-medium text-sm bg-black text-white px-5 py-2 rounded-sm'
              href=''
            >
              Get started
            </Link>
          </div>
        </nav>
      </div>
    </header>

    // <nav className='bg-blue-600 p-4'>
    //   <div className='max-w-7xl mx-auto flex justify-between items-center'>
    //     <div className='text-white text-2xl font-bold'>
    //       <Link href='/'>My Website</Link>
    //     </div>

    //     {/* Desktop menu */}
    //     <div className='hidden md:flex space-x-4'>
    //       <Link href='/' className='text-white hover:text-gray-200'>
    //         Home
    //       </Link>
    //       <Link href='/about' className='text-white hover:text-gray-200'>
    //         About
    //       </Link>
    //       <Link href='/services' className='text-white hover:text-gray-200'>
    //         Services
    //       </Link>
    //       <Link href='/contact' className='text-white hover:text-gray-200'>
    //         Contact
    //       </Link>
    //     </div>

    //     {/* Hamburger button (for mobile) */}
    //     <button className='md:hidden text-white' onClick={toggleMobileMenu}>
    //       <svg
    //         xmlns='http://www.w3.org/2000/svg'
    //         fill='none'
    //         viewBox='0 0 24 24'
    //         stroke='currentColor'
    //         className='h-6 w-6'
    //       >
    //         <path
    //           strokeLinecap='round'
    //           strokeLinejoin='round'
    //           strokeWidth={2}
    //           d='M4 6h16M4 12h16M4 18h16'
    //         />
    //       </svg>
    //     </button>
    //   </div>

    //   {/* Mobile Menu */}
    //   <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden`}>
    //     <Link href='/' className='block text-white p-2'>
    //       Home
    //     </Link>
    //     <Link href='/about' className='block text-white p-2'>
    //       About
    //     </Link>
    //     <Link href='/services' className='block text-white p-2'>
    //       Services
    //     </Link>
    //     <Link href='/contact' className='block text-white p-2'>
    //       Contact
    //     </Link>
    //   </div>
    // </nav>
  );
}
