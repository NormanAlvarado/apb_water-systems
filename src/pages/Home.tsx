import { useTranslation } from 'react-i18next'
import Header from '../components/Header'
import Hero from '../components/Hero'
import UseCasesGrid from '../components/UseCasesGrid'
import KnowYourWater from '../components/KnowYourWater'
import FeaturesSection from '../components/FeaturesSection'
import Footer from '../components/Footer'
import PageLoader from '../components/PageLoader'
import { useMetaTags } from '../hooks/useMetaTags'

function Home() {
  const { t } = useTranslation()

  useMetaTags({
    title: t('seo.home.title'),
    description: t('seo.home.description'),
    keywords: 'water softeners Costa Rica, water treatment systems, drinking water filters, UV disinfection, reverse osmosis',
    ogTitle: t('seo.home.title'),
    ogDescription: t('seo.home.description'),
    ogUrl: 'https://apbwatersystems.com',
    canonicalUrl: 'https://apbwatersystems.com'
  })

  return (
    <div className="min-h-screen">
      <PageLoader />
      <Header />
      <Hero />
      <UseCasesGrid />
      <FeaturesSection />
      <KnowYourWater />
      
      <Footer />
    </div>
  )
}

export default Home
