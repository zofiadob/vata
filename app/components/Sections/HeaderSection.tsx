import React, { useEffect, useRef, useState } from 'react'
import Header from '../Header';
import Image from 'next/image';
import headerImage from '../../../public/analytics.svg';
import CustomButton from '../CustomButton';

function HeaderSection() {

  const text = "Empowering Decisions: Your Data-Driven Future Starts Here"

  return (
    <section className='px-8 md:px-28 py-10'>
      <div className='grid sm:grid-cols-1 md:grid-cols-2 items-center gap-20'>
        <div className='flex justify-center'>
          <Image className='w-2/3 md:w-full' src={headerImage} alt='Header image' />
        </div>
        <div className='flex flex-wrap justify-center md:justify-end'>
          <div className='mb-6'><Header text={text} align='right'/></div>
          <div className='w-full lg:w-1/2'>
          <CustomButton variant='normal' text="Show more" clickTo='#introduction' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeaderSection;