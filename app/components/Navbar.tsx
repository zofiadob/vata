import Image from 'next/image'
import React from 'react'
import Logo from '../../public/logo.svg'
import Link from 'next/link'

function Navbar() {
  return (
    <nav className='flex justify-between px-32 py-2 sticky'>
      <div className=''>
          <Image src={Logo} alt='Logo' />
      </div>

      <div className='flex gap-4 justify-center items-center'>
        <Link href="" className='px-7 font-bold'>About</Link>
        <Link href="" className='px-7 font-bold'>Values</Link>
        <Link href="" className='px-7 font-bold'>Pricing</Link>
        <Link href="" className='px-7 font-bold'>Contact</Link>
        </div>
    </nav>
  )
}

export default Navbar