import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import QuoteModal from '../components/QuoteModal'
import PageLoader from '../components/PageLoader'

export default function WaterConditioning() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState('')

  const handleGetQuote = (productName: string) => {
    setSelectedProduct(productName)
    setIsModalOpen(true)
  }

  const models = [
    {
      name: "EC5 Water Conditioning System",
      description: "Our newest and most premium water softener with computerized control and high efficiency",
      features: ["Computerized smart controls", "Premium performance", "Space-saving design", "Industry-leading efficiency"],
      image: "https://images.thdstatic.com/productImages/0a966ba0-79bb-4d66-abe0-eafff16c48bf/svn/rainsoft-water-softener-systems-hdinstiec5ws-64_600.jpg",
      brand: "RainSoft"
    },
    {
      name: "EC4 Water Conditioning System",
      description: "Previous premium model with proven technology and reliable performance",
      features: ["Dependable operation", "Proven technology", "Advanced controls", "Durable construction"],
      image: "https://images.thdstatic.com/productImages/7e580f9a-d5e7-4bc7-a8c9-31a5fe149632/svn/rainsoft-water-softener-systems-hdinstiec4ws-64_600.jpg",
      brand: "RainSoft"
    },
    {
      name: "TC-M Series Water Conditioning System",
      description: "Meter-controlled system as a more standard option for consistent soft water",
      features: ["Meter-controlled", "Standard reliability", "Cost-effective", "Simple operation"],
      image: "https://images.thdstatic.com/productImages/0201647d-ef4d-4e2d-8a79-20722d382a99/svn/rainsoft-water-softener-systems-hdinstitws-64_600.jpg",
      brand: "RainSoft"
    }
  ]

  return (
    <div className="min-h-screen">
      <PageLoader />
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://c02.purpledshub.com/uploads/sites/41/2018/07/GettyImages-503847945-de8171f.jpg)' }}
        >
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <svg className="w-20 h-20 text-cyan-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z" />
              </svg>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Premium Water Conditioning Systems
            </h1>
            <p className="text-xl md:text-2xl text-cyan-100 mb-8 leading-relaxed">
              Transform ordinary water into extraordinary water with RainSoft's technologically advanced water softeners
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
                  PREMIUM WATER SOFTENING
                </div>
                <h2 className="text-4xl font-bold text-gray-800 mb-6">
                  Transform Your Home's Water Quality
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Water conditioning systems are essential for homes with hard water, which contains high levels of minerals like calcium and magnesium. These minerals cause scale buildup in pipes and appliances, reduce soap effectiveness, and leave residue on fixtures and clothing. A quality water softener removes these minerals, protecting your home's plumbing infrastructure and extending the lifespan of water-using appliances.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  By transforming hard water into soft water, conditioning systems dramatically improve everyday household activities. You'll notice softer skin and hair after bathing, cleaner and softer laundry, spot-free dishes, and significantly reduced soap and detergent usage. Beyond comfort, these systems represent a smart investment that saves money through lower energy bills, reduced maintenance costs, and longer-lasting appliances.
                </p>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://c02.purpledshub.com/uploads/sites/41/2018/07/GettyImages-503847945-de8171f.jpg" 
                    alt="Water Softener System"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Benefits Grid - Business Professional Design */}
            <div className="mb-20">
              <div className="text-center mb-16">

                <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Key Benefits
                </h3>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Investing in water softening technology delivers measurable returns across multiple areas of your home and lifestyle
                </p>
              </div>
              
              

              {/* Stats Bar */}
              <div className="mt-16 bg-gradient-to-r from-blue-900 to-cyan-800 rounded-lg p-8 text-white">
                <div className="grid md:grid-cols-4 gap-8 text-center max-w-5xl mx-auto">
                  <div>
                    <div className="text-4xl font-bold mb-2">50%</div>
                    <div className="text-cyan-100 text-sm uppercase tracking-wide">Less Soap Usage</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold mb-2">30%</div>
                    <div className="text-cyan-100 text-sm uppercase tracking-wide">Energy Savings</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold mb-2">10+</div>
                    <div className="text-cyan-100 text-sm uppercase tracking-wide">Years Extended Appliance Life</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold mb-2">100%</div>
                    <div className="text-cyan-100 text-sm uppercase tracking-wide">Scale Prevention</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Models Section with Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold text-gray-800 mb-4">
                Our Water Conditioning Systems
              </h3>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Your local authorized APB Water Systems dealer will determine which system best fits the needs of your family
              </p>
            </div>
            
            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {models.map((model, index) => (
                <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-100 flex flex-col h-full">
                  {/* Product Image */}
                  <div className="aspect-square overflow-hidden bg-gray-100 flex-shrink-0">
                    <img 
                      src={model.image} 
                      alt={model.name}
                      className="w-full h-full object-contain p-4"
                    />
                  </div>

                  {/* Product Content */}
                  <div className="p-6 flex flex-col items-center text-center flex-grow">
                    <h3 className="text-xl font-bold text-blue-600 mb-4 min-h-[3.5rem] flex items-center">
                      {model.name}
                    </h3>

                    <button 
                      onClick={() => handleGetQuote(model.name)}
                      className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors mt-auto"
                    >
                      Get Quote
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <QuoteModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        productName={selectedProduct}
      />

      {/* Quality Assurance Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-cyan-900 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-4xl md:text-5xl font-bold mb-6">
                Uncompromising Quality & Performance
              </h3>
              <p className="text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
                Each of these premium products undergoes rigorous third-party testing, comes backed by an unsurpassed Limited Warranty, and is assembled in a modern, ISO 9001-certified Midwest facility.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="text-6xl font-bold text-white mb-3">🇺🇸</div>
                <div className="text-blue-200 text-lg font-semibold">Proudly Made in USA</div>
                <p className="text-blue-100 text-sm mt-2">Designed & manufactured domestically</p>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="text-6xl font-bold text-white mb-3">ISO</div>
                <div className="text-blue-200 text-lg font-semibold">9001 Certified</div>
                <p className="text-blue-100 text-sm mt-2">Quality management systems</p>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="text-6xl font-bold text-white mb-3">100%</div>
                <div className="text-blue-200 text-lg font-semibold">Quality Guaranteed</div>
                <p className="text-blue-100 text-sm mt-2">Unsurpassed limited warranty</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    

      <Footer />
    </div>
  )
}
