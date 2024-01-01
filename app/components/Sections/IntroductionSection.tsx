import React from 'react'
import Header from '../Header';
import aboutImage from '../../../public/visualization.svg'
import Image from 'next/image';
import Text from '../Text';

function IntroductionSection() {

  const HeaderText = 'Who are we?'
  const desciptionText = 'Welcome to Vata, where we pioneer data analysis solutions to fuel your business growth. Our mission is to transform raw data into actionable intelligence, guiding you toward informed decisions and unprecedented success in the digital age.'

  return (
    <section id='introduction' className='px-8 md:px-28 py-10'>
      <div className='grid sm:grid-cols-1 md:grid-cols-2 items-center gap-20'>
        <div className='flex flex-wrap justify-center md:justify-end'>
          <div className='mb-6'>
            <Header text={HeaderText} align='left' />
            <Text text={desciptionText} />
          </div>
        </div>
        <div className='flex justify-center'>
          <Image className='w-2/3 md:w-full' src={aboutImage} alt='About image' />
        </div>
      </div>
    </section>
  )
}

export default IntroductionSection;