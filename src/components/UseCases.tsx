export default function UseCases() {
  const useCases = [
    {
      title: "Tap Water",
      description: "Pure, clean water from every faucet in your home. Remove chlorine, sediment, and harmful contaminants for healthier cooking and drinking.",
      benefits: ["Better taste", "Remove chemicals", "Protect health"]
    },
    {
      title: "Shower & Bath",
      description: "Softer water means softer skin and hair. Reduce dryness, irritation, and enjoy a spa-like experience every day.",
      benefits: ["Softer skin", "Healthier hair", "Less soap scum"]
    },
    {
      title: "Laundry",
      description: "Cleaner, brighter clothes with less detergent. Soft water protects fabrics and makes your laundry last longer.",
      benefits: ["Brighter colors", "Less detergent", "Longer-lasting clothes"]
    },
    {
      title: "Drinking Water",
      description: "Crystal-clear, great-tasting water on demand. Save money and the environment by eliminating bottled water.",
      benefits: ["Great taste", "Save money", "Eco-friendly"]
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-cyan-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Water Solutions for Every Need
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience the benefits of premium water conditioning throughout your entire home
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="p-8">
                <div className="flex items-start mb-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <div className="ml-4 flex-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      {useCase.title}
                    </h3>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {useCase.description}
                </p>

                <div className="space-y-2 mb-6">
                  {useCase.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="flex gap-3">
                  <button className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all">
                    Learn More
                  </button>
                  <button className="flex-1 border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all">
                    Get Free Test
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
