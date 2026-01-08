import PageLayout from './components/layout/PageLayout'
import Hero from './components/sections/Hero'
import TrustedBy from './components/sections/TrustedBy'
import Features from './components/sections/Features'
import FeatureCards from './components/sections/FeatureCards'
import Pricing from './components/sections/Pricing'
import CTA from './components/sections/CTA'

function App() {
  return (
    <PageLayout>
      <Hero />
      <TrustedBy />
      <Features />
      <FeatureCards />
      <Pricing />
      <CTA />
    </PageLayout>
  )
}

export default App