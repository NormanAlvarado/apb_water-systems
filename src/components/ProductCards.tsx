export default function ProductCards() {
  const products = [
    { 
      id: 'ec5', 
      name: 'EC5 Series', 
      description: 'Premium whole-house water conditioner',
      image: 'https://placehold.co/400x300/0054A6/white?text=EC5+Series'
    },
    { 
      id: 'ec5-cab', 
      name: 'EC5-CAB', 
      description: 'Cabinet-style water softener',
      image: 'https://placehold.co/400x300/00ADEF/white?text=EC5-CAB'
    },
    { 
      id: 'ec4', 
      name: 'EC4 Series', 
      description: 'Efficient water treatment solution',
      image: 'https://placehold.co/400x300/0054A6/white?text=EC4+Series'
    },
    { 
      id: 'tc-m', 
      name: 'TC-M Series', 
      description: 'Compact conditioning system',
      image: 'https://placehold.co/400x300/00ADEF/white?text=TC-M+Series'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
          Our Premium Products
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Discover our range of advanced water conditioning systems designed for your home
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border border-gray-100"
            >
              {/* Product Image */}
              <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Product Content */}
              <div className="p-6 bg-gradient-to-br from-blue-50 to-white">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {product.description}
                </p>
                <a href={`/products/${product.id}`} className="text-blue-600 font-semibold group-hover:text-blue-700 inline-flex items-center">
                  Learn More
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
