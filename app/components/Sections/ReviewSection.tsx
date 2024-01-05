import React from 'react'
import Header from '../Header';

function ReviewSection() {

  const HeaderText = 'Opinions from our Clients'

  const reviews = [
    {
      owner: "Sarah Thompson - CEO",
      desc: "The data-driven solutions from Vata have been a game-changer for our business. Their insights have not only optimized our operations but also opened new avenues for growth.",
      company: "Tech Innovations Inc.",
    },
    {
      owner: "Mark Davis - Marketing Director",
      desc: "Working with Vata has been a revelation. Their analytics team provided us with actionable data that significantly enhanced the effectiveness of our marketing campaigns.",
      company: "Global Enterprises Ltd.",
    },
    {
      owner: "Emily Rodriguez - CFO",
      desc: "In the financial sector, accuracy is paramount. Vata not only met but exceeded our expectations, providing us with precise data analytics that have proven instrumental in our decision-making.",
      company: "Financial Horizon Inc.",
    },
    {
      owner: "David Miler - Operations Manager",
      desc: "Efficiency is the cornerstone of logistics. Vata optimized our operations through insightful data analysis, leading to streamlined processes and improved resource allocation.",
      company: "Logistics Solutions",
    },
  ]

  return (
    <section id='values' className='px-8 md:px-28 py-10'>
      <div className='grid sm:grid-cols-1 items-center gap-5 md:gap-12'>
        <div className='grid grid-cols-1'>
          <Header text={HeaderText} align='left' />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8'>
          {
            reviews.map(review => (
              <div key={review.company} className='bg-white text-main-violet rounded-2xl py-6 px-6 lg:px-14 text-left'>
                <div className='text-md font-bold md:text-xl lg:text-2xl mb-1 md:mb-4'>{review.owner}</div>
                <div className='text-sm md:text-md mb-4'>{review.desc}</div>
                <div className='text-xs text-light-violet text-right md:text-md'>{review.company}</div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default ReviewSection;