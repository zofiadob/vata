import React from 'react'
import Header from '../Header';
import Carousel from '../Carousel';

function ReviewSection() {

  const headerText = 'Opinions from our Clients'

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
      <div className='grid sm:grid-cols-1 items-center gap-5 md:gap-12 w-full'>
        <div className='grid grid-cols-1'>
          <Header text={headerText} align='left' />
        </div>
        <Carousel reviews={reviews} />
      </div>
    </section>
  )
}

export default ReviewSection;