import { Header } from './components/layout/Header'
import { Hero } from './components/sections/Hero'
import { ServiceCards } from './components/services/ServiceCards'
import { FeaturesGrid } from './components/sections/FeaturesGrid'
import { Testimonials } from './components/sections/Testimonials'
import { WhyChooseUs } from './components/sections/WhyChooseUs'
import { Team } from './components/about/Team'
import { Footer } from './components/layout/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Header />
      <main>
        <Hero />
        <Team />
        <ServiceCards />
        <FeaturesGrid />
        <Testimonials />
        <WhyChooseUs />
      </main>
      <Footer />
    </div>
  )
}

export default App
