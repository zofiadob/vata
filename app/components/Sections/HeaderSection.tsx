import React from 'react'
import Header from '../Header';
import Image from 'next/image';
import headerImage from '../../../public/analytics.svg';
import CustomButton from '../CustomButton';
import arrowIcon from '../../../public/arrow.svg'
import Link from 'next/link';

function HeaderSection() {

  const headertext = "Empowering Decisions: Your Data-Driven Future Starts Here"

  return (
    <section id='header' className='px-8 md:px-28 py-10 relative'>
      <div className='grid sm:grid-cols-1 md:grid-cols-2 items-center gap-5 md:gap-12 lg:gap-20'>
        <div className='flex justify-center'>
          <Image className='w-2/3 sm:max-w-72 md:max-w-full md:w-full' src={headerImage} alt='Header image' />
        </div>
        <div className='flex flex-wrap justify-center md:justify-end'>
          <div className='mb-12'><Header text={headertext} align='right' /></div>
          <div className='w-1/2 md:w-full lg:w-1/2'>
            <CustomButton variant='outline' text="Show more" clickTo='#introduction' />
          </div>
        </div>
      </div>
      <Link href='#introduction' className='hidden md:block absolute max-w-8 right-10 bottom-10 animate-pulse after:bg-transparent'>
        <Image src={arrowIcon} alt='Arrow icon' />
      </Link>
    </section>
  )
}

export default HeaderSection;