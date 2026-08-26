import Header from './components/Header'
import Hero from './components/Hero'
import TrustSection from './components/TrustSection'
import Services from './components/Services'
import Areas from './components/Areas'
import LocationProcess from './components/LocationProcess'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

function App() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Header />

      <Hero />

      <TrustSection />

      <Services />

      <Areas />
      <LocationProcess />

      <Testimonials />

      <CTA />

      <Footer />

      <WhatsAppButton />
    </div>
  )
}

export default App