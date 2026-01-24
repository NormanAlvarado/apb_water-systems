import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import QuoteModal from '../components/QuoteModal'
import PageLoader from '../components/PageLoader'

export default function ConstantPressure() {
  const [isModalOpen, setIsModalOpen] = useState(false)

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
      <PageLoader />
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-12 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://www.hotpropane.com/assets/uploads/images/water-faucet-sink.webp)' }}
        >
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-4">
              <svg className="w-16 h-16 text-cyan-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z" />
              </svg>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Constant Pressure Water Systems
            </h1>
            <p className="text-lg md:text-xl text-cyan-100 leading-relaxed">
              Maintain consistent water pressure throughout your home for optimal comfort and system protection
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Intro with image */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  PRESSURE MANAGEMENT
                </div>
                <h2 className="text-4xl font-bold text-gray-800 mb-6">
                  Stable Water Pressure, Every Time
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Experience the difference of constant water pressure with our HydroStart system. No more 
                  pressure drops during peak usage or annoying fluctuations that affect your daily comfort.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Constant pressure systems protect your plumbing infrastructure and water-using appliances 
                  from damaging pressure fluctuations. By maintaining steady pressure throughout your home, 
                  you'll enjoy better shower experiences, quieter operation, and extended appliance lifespan.
                </p>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://www.hotpropane.com/assets/uploads/images/water-faucet-sink.webp" 
                    alt="Constant Pressure System"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
 {/* Benefits Grid */}
            <div className="mb-20">
              <div className="text-center mb-16">
                <div className="inline-block bg-blue-100 text-blue-700 px-5 py-2 rounded text-sm font-bold mb-4 uppercase tracking-wide">
                  Key Benefits
                </div>
                <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Why Choose Constant Pressure?
                </h3>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Experience consistent water pressure throughout your home for optimal comfort and system protection
                </p>
              </div>
              
              {/* Professional Grid Layout - 4 Columns */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                {benefits.map((benefit, index) => (
                  <div 
                    key={index}
                    className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden border border-gray-200"
                  >
                    {/* Blue top bar */}
                    <div className="h-2 bg-gradient-to-r from-blue-600 to-cyan-500"></div>
                    
                    <div className="p-6">
                      {/* Content */}
                      <h4 className="text-lg font-bold text-gray-900 mb-3">
                        {benefit.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <QuoteModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        productName="Constant Pressure System"
      />

      <Footer />
    </div>
  )
}
