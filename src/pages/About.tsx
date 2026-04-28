import { useTranslation } from 'react-i18next'
import Header from '../components/Header'
import Footer from '../components/Footer'
import PageLoader from '../components/PageLoader'
import { useMetaTags } from '../hooks/useMetaTags'

function About() {
  const { t } = useTranslation()

  useMetaTags({
    title: t('seo.about.title'),
    description: t('seo.about.description'),
    keywords: 'APB Water Systems, RainSoft distributor, Costa Rica water treatment',
    ogTitle: t('seo.about.title'),
    ogDescription: t('seo.about.description'),
    canonicalUrl: 'https://apbwatersystems.com/about'
  })

  return (
    <div className="min-h-screen">
      <PageLoader />
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              {t('navigation.about')}
            </h1>
            <p className="text-xl text-blue-50 leading-relaxed">
              Your trusted partner for water treatment solutions in Costa Rica
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About APB Water Systems</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                APB Water Systems is a leading provider of premium water treatment and filtration solutions in Costa Rica. 
                As an authorized distributor of RainSoft products, we bring decades of expertise and commitment to quality 
                to every customer we serve.
              </p>
              
              <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Our Mission</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                To provide Costa Rican families and businesses with access to pure, safe, and clean water through innovative 
                water treatment solutions backed by professional installation and reliable customer support.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Why Choose Us?</h3>
              <ul className="list-disc list-inside space-y-3 text-gray-700 mb-6">
                <li>Authorized RainSoft distributor with proven expertise</li>
                <li>Professional installation and maintenance services</li>
                <li>Comprehensive warranty and customer support</li>
                <li>Solutions tailored to Costa Rica's unique water challenges</li>
                <li>Serving residential, commercial, and industrial clients</li>
              </ul>

              <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Our Commitment</h3>
              <p className="text-gray-700 leading-relaxed">
                We are committed to excellence in every aspect of our business—from the quality of our products and services 
                to the expertise of our team. Your satisfaction and the health of your water are our top priorities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default About
