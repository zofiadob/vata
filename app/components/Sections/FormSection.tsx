import React from 'react'
import Header from '../Header';
import Text from '../Text';
import Image from 'next/image';
import customizationImage from '../../../public/customization.svg'

function FormSection() {

  const headerText = "Ready to transform your business with data-driven success?";
  const desciptionText = "Contact us today and embark on a journey of strategic insights and informed decision-making. Your data, your future—let's shape it together.";

  return (
    <section id='form' className='px-8 md:px-28 py-10'>
      <div className='grid grid-cols-1'>
        <div className='mb-6 grid grid-cols-1 gap-8'>
          <Header text={headerText} align='left' />
          <Text text={desciptionText} />
        </div>
        <div className='grid sm:grid-cols-1 md:grid-cols-2 items-center gap-5 md:gap-12 lg:gap-20'>
          <div className='flex flex-wrap justify-center md:justify-end'>
            form
          </div>
          <div className='hidden md:flex justify-center'>
            <Image className='w-3/4' src={customizationImage} alt='Customization image' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default FormSection;