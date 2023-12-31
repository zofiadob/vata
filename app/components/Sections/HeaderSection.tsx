import React, { useEffect, useRef, useState } from 'react'
import Header from '../Header';
import Image from 'next/image';
import headerImage from '../../../public/analytics.svg';
import CustomButton from '../CustomButton';

function HeaderSection() {

  const text = "Empowering Decisions: Your Data-Driven Future Starts Here"

  return (
    <section className='px-8 md:px-28'>
      <div className='grid sm:grid-cols-1 md:grid-cols-2 items-center gap-20'>
        <div>
          <Header text={text}/>
          {/* <CustomButton /> */}
          </div>
        <div className='flex justify-center'>
          <Image className='w-2/3 md:w-full' src={headerImage} alt='Header image' />
        </div>
      </div>
    </section>
  )
}

export default HeaderSection;