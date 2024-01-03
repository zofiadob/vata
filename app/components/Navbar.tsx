'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import Logo from '../../public/logo.svg'
import Link from 'next/link'
import mobileMenuIcon from '../../public/mobileMenu.svg'

function Navbar() {

  const [isOpen, setIsOpen] = useState(true);

  const closeOpenMobileMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <nav className='bg-menu-violet flex justify-between px-8 md:px-28 py-2 sticky min-h-16 font-krub z-10'>
      <div>
        <Link href="">
          <Image src={Logo} alt='Logo' />
        </Link>
      </div>

      {isOpen &&
        <div className='bg-menu-violet md:bg-transparent duration-500 md:static absolute md:min-h-fit left-0 top-[100%] md:w-auto w-full flex justify-center md:justify-normal items-center px-5'>
          <ul className='flex gap-8 md:gap-2 justify-between items-center lg:w-1/3 md:flex-row flex-col py-4 md:py-0'>
            <li><Link href="#introduction" className='link px-4 font-bold xl:text-lg md:text-md'>About</Link></li>
            <li><Link href="" className='link px-4 font-bold xl:text-lg md:text-md'>Values</Link></li>
            <li><Link href="" className='link px-4 font-bold xl:text-lg md:text-md'>Pricing</Link></li>
            <li><Link href="" className='link px-4 font-bold xl:text-lg md:text-md'>Contact</Link></li>
          </ul>
        </div>
      }

      <div className='flex items-center md:hidden'>
        <Image onClick={closeOpenMobileMenu} className='cursor-pointer' src={mobileMenuIcon} alt={'Menu icon'} width='40' height="40" />
      </div>
    </nav>
  )
}

export default Navbar