import HeaderSection from './components/Sections/HeaderSection'
import IntroductionSection from './components/Sections/IntroductionSection'
import ValueSection from './components/Sections/ValueSection'
import ReviewSection from './components/Sections/ReviewSection'
import FormSection from './components/Sections/FormSection'

export default function Home() {
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
