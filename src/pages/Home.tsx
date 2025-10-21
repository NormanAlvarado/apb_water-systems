import Header from '../components/Header'
import Hero from '../components/Hero'
import UseCasesGrid from '../components/UseCasesGrid'
import KnowYourWater from '../components/KnowYourWater'
import FeaturesSection from '../components/FeaturesSection'
import ProductCards from '../components/ProductCards'
import Benefits from '../components/Benefits'
import Testimonials from '../components/Testimonials'
import UseCases from '../components/UseCases'
import Footer from '../components/Footer'

function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <UseCasesGrid />
      <KnowYourWater />
      <ProductCards />
      <FeaturesSection />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default Home
