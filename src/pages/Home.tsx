import Header from '../components/Header'
import Hero from '../components/Hero'
import UseCasesGrid from '../components/UseCasesGrid'
import KnowYourWater from '../components/KnowYourWater'
import FeaturesSection from '../components/FeaturesSection'
import Footer from '../components/Footer'
import PageLoader from '../components/PageLoader'

function Home() {
  return (
    <div className="min-h-screen">
      <PageLoader />
      <Header />
      <Hero />
      <UseCasesGrid />
      <KnowYourWater />
      <FeaturesSection />
      <Footer />
    </div>
  )
}

export default Home
