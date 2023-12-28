'use client'
import { useEffect } from 'react'

import HeaderSection from './components/Sections/HeaderSection';
import IntroductionSection from './components/Sections/IntroductionSection';
import ValueSection from './components/Sections/ValueSection';
import ReviewSection from './components/Sections/ReviewSection';
import FormSection from './components/Sections/FormSection';

export default function Home() {

  useEffect(() => {
    const sections = document.querySelectorAll("section > div");
    const observer = new IntersectionObserver((entires) => {
      entires.forEach(entry => {
        entry.target.classList.toggle('content-fade-out', !entry.isIntersecting);
      })
    })
    sections.forEach((section) => {
      observer.observe(section);
    });
  }, [])

  return (
    <main className="container max-w-full">
      <HeaderSection />
      <IntroductionSection />
      <ValueSection />
      <ReviewSection />
      <FormSection />
    </main>
  )
}
