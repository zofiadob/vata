import React from 'react'
import Header from '../Header';
import Text from '../Text';
import Image from 'next/image';
import customizationImage from '../../../public/customization.svg'
import Form from '../Form';

function FormSection() {

  const headerText = "Ready to transform your business?";
  const desciptionText = "Contact us today and embark on a journey of strategic insights and informed decision-making.";

  return (
    <section id='form' className='px-8 md:px-28 py-10'>
      <div className='grid grid-cols-1'>
        <div className='mb-6 grid grid-cols-1 gap-4'>
          <Header text={headerText} align='left' />
          <div className='hidden md:flex'><Text text={desciptionText} /></div>
        </div>
        <div className='grid sm:grid-cols-1 lg:grid-cols-2 items-center gap-5 md:gap-12 lg:gap-20'>
          <Form />
          <div className='hidden lg:flex justify-center'>
            <Image className='w-3/4' src={customizationImage} alt='Customization image' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default FormSection;