import knowBg from '../assets/knowBG.png'

export default function KnowYourWater() {
  const waterInsights = [
    {
      title: "What's In My Water?",
      image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=600&h=400&fit=crop",
      description: "Whether your water comes from a well or municipally treated source, it may contain impurities that cause it to taste or smell bad or create other problems in your home."
    },
    {
      title: "Why Should I Improve My Water?",
      image: "https://www.bruker.com/de/applications/microbiology-and-diagnostics/water-testing-microbiology/_jcr_content/root/herostage/backgroundImageVPL.coreimg.82.1920.jpeg/1733860544891/water-testing-microbiology-shutterstock-1753533839-md-web.jpeg",
      description: "Understanding your water quality is the first step to identifying the best treatment solutions for your household needs."
    },
    {
      title: "How Can I Get Better Water?",
      image: "https://www.cdc.gov/drinking-water/media/images/2024/06/GettyImages-1189589855-16x9-1.jpg",
      description: "Contact our water treatment experts to find the perfect filtration and conditioning system for your home, backed by our expertise and quality products."
    }
  ]

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${knowBg})` }}
      >
        <div className="absolute inset-0 bg-blue-900/30"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-4">
          <p className="text-white text-base font-semibold tracking-widest uppercase mb-2 drop-shadow-lg">
            Water Insights
          </p>
        </div>

        {/* Title with Icon */}
        <div className="flex items-center justify-center mb-12">
          <svg className="w-16 h-16 text-cyan-300" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z" />
          </svg>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
          Know Your Water
        </h2>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {waterInsights.map((insight, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-2xl hover:shadow-2xl transition-shadow group"
            >
                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden bg-gray-200">
                  <img 
                    src={insight.image} 
                    alt={insight.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-6 bg-gradient-to-b from-white to-blue-50">
                  <h3 className="text-xl font-bold text-cyan-600 mb-4">
                    {insight.title}
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {insight.description}
                  </p>
                </div>
              </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-all hover:shadow-2xl transform hover:-translate-y-1">
            Contact Us Today
          </button>
        </div>
      </div>
    </section>
  )
}
