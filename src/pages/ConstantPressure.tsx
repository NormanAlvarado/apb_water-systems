import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import QuoteModal from '../components/QuoteModal'

export default function ConstantPressure() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const product = {
    name: "HydroStart Pressure Relief Valve/System",
    description: "Advanced pressure management system that maintains constant water pressure throughout your home",
    features: [
      "Maintains constant pressure",
      "Protects plumbing system",
      "Reduces water hammer",
      "Extends appliance life",
      "Quiet operation",
      "Easy installation"
    ],
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=600&fit=crop",
    brand: "RainSoft"
  }

  const benefits = [
    {
      title: "Consistent Pressure",
      description: "Enjoy steady water pressure at every faucet, shower, and appliance regardless of usage."
    },
    {
      title: "System Protection",
      description: "Prevent damage from pressure fluctuations and water hammer throughout your plumbing."
    },
    {
      title: "Extended Appliance Life",
      description: "Protect water heaters, washing machines, and dishwashers from pressure-related wear."
    },
    {
      title: "Quieter Operation",
      description: "Eliminate banging pipes and noisy fixtures caused by pressure variations."
    }
  ]

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=1600&h=900&fit=crop)' }}
        >
          <div className="absolute inset-0 bg-blue-900/50"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <svg className="w-20 h-20 text-blue-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Constant Pressure Water Systems
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              Maintain consistent water pressure throughout your home for optimal comfort and system protection
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Intro */}
            <div className="text-center mb-16">
              <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                PRESSURE MANAGEMENT
              </div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Stable Water Pressure, Every Time
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                Experience the difference of constant water pressure with our HydroStart system. No more 
                pressure drops during peak usage or annoying fluctuations that affect your daily comfort.
              </p>
            </div>

            {/* Product Showcase */}
            <div className="mb-20">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <img 
                      src={product.image}
                      alt={product.name}
                      className="rounded-2xl shadow-2xl w-full h-auto"
                    />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-blue-600 mb-2">{product.brand}</div>
                    <h3 className="text-3xl font-bold text-gray-800 mb-4">
                      {product.name}
                    </h3>
                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                      {product.description}
                    </p>
                    <div className="space-y-3">
                      {product.features.map((feature, index) => (
                        <div key={index} className="flex items-start">
                          <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefits Grid */}
            <div className="mb-20">
              <h3 className="text-3xl font-bold text-gray-800 text-center mb-12">
                Why Choose Constant Pressure?
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                    <h4 className="text-xl font-bold text-gray-800 mb-3">
                      {benefit.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* How It Works */}
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8 md:p-12 mb-20">
              <h3 className="text-3xl font-bold text-gray-800 text-center mb-8">
                How It Works
              </h3>
              <div className="max-w-3xl mx-auto">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">
                      1
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-800 mb-2">Monitors Pressure</h4>
                      <p className="text-gray-700">
                        The HydroStart system continuously monitors your home's water pressure in real-time.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">
                      2
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-800 mb-2">Adjusts Automatically</h4>
                      <p className="text-gray-700">
                        When pressure fluctuates, the system instantly adjusts to maintain your desired pressure level.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">
                      3
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-800 mb-2">Delivers Consistently</h4>
                      <p className="text-gray-700">
                        You enjoy perfect pressure at every fixture, every time, with complete protection for your plumbing system.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-12 text-white">
              <h3 className="text-3xl font-bold mb-4">
                Ready for Consistent Water Pressure?
              </h3>
              <p className="text-xl mb-8 text-blue-100">
                Contact us today for a free consultation and water pressure assessment
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-colors"
                >
                  Get Quote
                </button>
                <a 
                  href="tel:+50660339416"
                  className="inline-block bg-blue-700 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-800 transition-colors"
                >
                  Call +506 6033-9416
                </a>
                <a 
                  href="https://wa.me/50660339416?text=Hi%20APB%20Water%20Systems!%20I'm%20interested%20in%20learning%20more%20about%20your%20Constant%20Pressure%20Water%20Systems."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-green-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-600 transition-colors"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <QuoteModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        productName="HydroStart Pressure Relief Valve/System"
      />

      <Footer />
    </div>
  )
}
