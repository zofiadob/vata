import React from 'react'
import Header from '../Header';
import Text from '../Text';

function ValueSection() {

  const HeaderText = 'Our values'
  const desciptionText = 'At Vata, we are committed to delivering unparalleled value to our clients through:'

  const values = [
    {
      name: "Precision",
      desc: "Harnessing the power of advanced analytics to provide you with accurate and reliable insights.",
    },
    {
      name: "Innovation",
      desc: "Staying at the forefront of technological advancements to keep your business ahead of the curve.",
    },
    {
      name: "Collaboration",
      desc: "Working closely with you to understand your unique challenges and tailor solutions that align with your goals.",
    },
    {
      name: "Integrity",
      desc: "Upholding the highest ethical standards to ensure the confidentiality and security of your data.",
    },
  ]

  return (
    <section id='values' className='px-8 md:px-28 py-10'>
      <div className='grid sm:grid-cols-1 items-center gap-5 md:gap-12 lg:gap-20'>
        <div className=''>
          <div className='grid grid-cols-1'>
            <Header text={HeaderText} align='left' />
            <Text text={desciptionText} />
          </div>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-4'>
          {
            values.map(value => (
              <div key={value.name}>
                {value.name}
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default ValueSection;