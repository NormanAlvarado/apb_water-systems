import { Link } from 'react-router-dom'
import ScrollAnimation from './ScrollAnimation'


export default function UseCasesGrid() {
  const products = [
    {
      title: "Water Conditioning Systems",
      image: "https://c02.purpledshub.com/uploads/sites/41/2018/07/GettyImages-503847945-de8171f.jpg",
      description: "Transform hard water into soft, luxurious water throughout your entire home. Protect your appliances and enjoy better water quality.",
      link: "/products/water-conditioning"
    },
    {
      title: "Drinking Water Systems",
      image: "https://www.cdc.gov/environmental-health-tracking/media/images/DrinkingWater1200x675.jpg",
      description: "Experience crystal-clear, pure drinking water with advanced filtration technology. Remove contaminants and enjoy the best-tasting water.",
      link: "/products/drinking-water"
    },
    {
      title: "Problem Solving Filters",
      image: "https://olympianwatertesting.com/wp-content/uploads/2024/01/clean-tap-water.png",
      description: "Targeted solutions for specific water problems including iron, sulfur, and sediment removal. Custom filtration for your needs.",
      link: "/products/problem-solving-filters"
    },
    {
      title: "Constant Pressure Water Systems",
      image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=400&h=300&fit=crop",
      description: "Maintain consistent water pressure throughout your home with intelligent pump technology. Perfect for homes with varying water demand.",
      link: "/products/constant-pressure"
    }
  ]

  return (
    <section id="products-section" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-cyan-50">
      <div className="container mx-auto px-4">
        <ScrollAnimation animation="fade">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Products
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover our complete range of water treatment solutions designed for your home and business
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {products.map((product, index) => (
            <ScrollAnimation 
              key={index}
              animation="fade"
              delay={index * 100}
            >
              <div 
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group h-full flex flex-col"
              >
                {/* Image */}
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-6 bg-gradient-to-br from-blue-50 to-white flex-1 flex flex-col">
                  <h3 className="text-lg font-bold text-blue-600 mb-3">
                    {product.title}
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed mb-4 flex-1">
                    {product.description}
                  </p>
                  
                  {/* Learn More Button */}
                  <Link 
                    to={product.link}
                    className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold text-sm hover:bg-blue-700 transition text-center"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}
