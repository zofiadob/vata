import React from 'react'
import Header from '../Header';

function ReviewSection() {

  const HeaderText = 'Opinions from our Clients'

  return (
    <section id='values' className='px-8 md:px-28 py-10'>
      <div className='grid sm:grid-cols-1 items-center gap-5 md:gap-12'>
        <div className='grid grid-cols-1'>
          <Header text={HeaderText} align='left' />
        </div>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8'>
          {/* {
            values.map(value => (
              <div key={value.name} className='bg-white text-main-violet text-center rounded-2xl p-4'>
                <div className='text-md font-bold md:text-xl lg:text-2xl mb-1 md:mb-4'>{value.name}</div>
                <div className='text-sm md:text-md'>{value.desc}</div>
              </div>
            ))
          } */}
        </div>
      </div>
    </section>
  )
}

export default ReviewSection;