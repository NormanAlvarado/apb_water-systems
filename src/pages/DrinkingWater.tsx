import Header from '../components/Header'
import Footer from '../components/Footer'

export default function DrinkingWater() {

  const systems = [
    {
      name: "Ultrefiner II - Multi-Stage Reverse Osmosis System",
      description: "Multi-stage drinking water purifier that produces better than bottle-quality water",
      features: ["Three-stage filtration", "Carbon block pre-filter", "Advanced membrane", "Post-filter protection"],
      image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=600&h=400&fit=crop"
    },
    {
      name: "Hydrefiner II - Advanced Carbon Block Filter System",
      description: "Advanced carbon block filter for continuous supply of delicious drinking water",
      features: ["Advanced carbon block", "Continuous filtered water", "Removes chlorine", "Easy replacement"],
      image: "https://www.bruker.com/de/applications/microbiology-and-diagnostics/water-testing-microbiology/_jcr_content/root/herostage/backgroundImageVPL.coreimg.82.1920.jpeg/1733860544891/water-testing-microbiology-shutterstock-1753533839-md-web.jpeg"
    }
  ]

  const benefits = [
    {
      title: "Great-Tasting Water",
      description: "Enjoy crystal-clear, delicious water straight from your tap without the plastic bottle hassle."
    },
    {
      title: "Better Coffee & Tea",
      description: "Notice dramatic improvements in the coffee, tea, and soups you prepare with purified water."
    },
    {
      title: "Save Money",
      description: "Stop buying expensive bottled water. Get superior quality for pennies on the dollar."
    },
    {
      title: "Eco-Friendly",
      description: "Reduce plastic waste and your carbon footprint by eliminating bottled water purchases."
    },
    {
      title: "Convenient Access",
      description: "Round-the-clock access to purified water right in your own kitchen."
    },
    {
      title: "Peace of Mind",
      description: "Know that your family is drinking the highest quality water possible."
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
          style={{ backgroundImage: 'url(https://www.cdc.gov/environmental-health-tracking/media/images/DrinkingWater1200x675.jpg)' }}
        >
          <div className="absolute inset-0 bg-cyan-900/40"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <svg className="w-20 h-20 text-cyan-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z" />
              </svg>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Premium Drinking Water Systems
            </h1>
            <p className="text-xl md:text-2xl text-cyan-100 mb-8 leading-relaxed">
              Transform your kitchen tap into a fountain of delicious, pure drinking water
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
                <div className="inline-block bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  PREMIUM DRINKING WATER
                </div>
                <h2 className="text-4xl font-bold text-gray-800 mb-6">
                  Transform Your Kitchen Tap into a Fountain of Delicious Drinking Water
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Imagine never having to lug bottled water home from the store again, yet always having an abundant supply of premium drinking water available right from a special faucet conveniently installed at your kitchen sink.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  When you use purified water to make coffee, tea, lemonade, and other beverages, you'll immediately notice the improved taste. Even soups and other foods prepared with water will taste noticeably better.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To learn more about the wide selection of drinking water systems available from APB Water Systems, speak with your local authorized dealer.
                </p>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=600&fit=crop" 
                    alt="Drinking Water System"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-cyan-600 text-white p-6 rounded-xl shadow-xl">
                  <div className="text-2xl font-bold mb-1">🇺🇸</div>
                  <div className="text-sm font-semibold">Proudly Designed &</div>
                  <div className="text-sm font-semibold">Manufactured in USA</div>
                </div>
              </div>
            </div>

            {/* Benefits Grid */}
            <div className="mb-20">
              <div className="text-center mb-16">
                <div className="inline-block bg-cyan-100 text-cyan-700 px-5 py-2 rounded text-sm font-bold mb-4 uppercase tracking-wide">
                  Key Benefits
                </div>
                <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Why Choose Our Drinking Water Systems
                </h3>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Experience the difference that pure, delicious water makes in your daily life
                </p>
              </div>
              
              {/* Professional Grid Layout - 3 Columns */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {benefits.map((benefit, index) => (
                  <div 
                    key={index}
                    className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 hover:border-cyan-400"
                  >
                    {/* Cyan top bar */}
                    <div className="h-2 bg-gradient-to-r from-cyan-600 to-blue-500"></div>
                    
                    <div className="p-6">
                      {/* Content */}
                      <h4 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-cyan-600 transition-colors">
                        {benefit.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Stats Bar */}
              <div className="mt-16 bg-gradient-to-r from-cyan-900 to-blue-800 rounded-lg p-8 text-white">
                <div className="grid md:grid-cols-4 gap-8 text-center max-w-5xl mx-auto">
                  <div>
                    <div className="text-4xl font-bold mb-2">99%</div>
                    <div className="text-cyan-100 text-sm uppercase tracking-wide">Contaminant Removal</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold mb-2">$500+</div>
                    <div className="text-cyan-100 text-sm uppercase tracking-wide">Annual Savings vs Bottled</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold mb-2">5</div>
                    <div className="text-cyan-100 text-sm uppercase tracking-wide">Filtration Stages</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold mb-2">24/7</div>
                    <div className="text-cyan-100 text-sm uppercase tracking-wide">Pure Water On Demand</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Systems Section with Grid */}
      <section className="py-20 bg-gradient-to-br from-cyan-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold text-gray-800 mb-4">
                Our Drinking Water Systems
              </h3>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Choose the perfect system for your family's needs and enjoy premium drinking water every day
              </p>
            </div>
            
            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {systems.map((system, index) => (
                <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col h-full">
                  {/* Product Image */}
                  <div className="aspect-square overflow-hidden bg-gray-100 flex-shrink-0">
                    <img 
                      src={system.image} 
                      alt={system.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>

                  {/* Product Content */}
                  <div className="p-6 flex flex-col items-center text-center flex-grow">
                    <h3 className="text-xl font-bold text-cyan-600 mb-4 min-h-[3.5rem] flex items-center">
                      {system.name}
                    </h3>

                    <button className="bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 mt-auto">
                      Get Quote
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quality Assurance Section */}
      <section className="py-20 bg-gradient-to-br from-cyan-900 via-blue-900 to-cyan-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-4xl md:text-5xl font-bold mb-6">
                Uncompromising Quality & Performance
              </h3>
              <p className="text-xl text-cyan-100 leading-relaxed max-w-3xl mx-auto">
                Each of these premium products undergoes rigorous third-party testing, comes backed by an unsurpassed Limited Warranty, and is assembled in a modern, ISO 9001-certified Midwest facility.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="text-6xl font-bold text-white mb-3">🇺🇸</div>
                <div className="text-cyan-200 text-lg font-semibold">Proudly Made in USA</div>
                <p className="text-cyan-100 text-sm mt-2">Designed & manufactured domestically</p>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="text-6xl font-bold text-white mb-3">ISO</div>
                <div className="text-cyan-200 text-lg font-semibold">9001 Certified</div>
                <p className="text-cyan-100 text-sm mt-2">Quality management systems</p>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="text-6xl font-bold text-white mb-3">100%</div>
                <div className="text-cyan-200 text-lg font-semibold">Quality Guaranteed</div>
                <p className="text-cyan-100 text-sm mt-2">Unsurpassed limited warranty</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
