import residencialImg from '../assets/Recidencial.png'
import comercialImg from '../assets/Comercial.png'
import biotechImg from '../assets/biotech.png'


export default function UseCasesGrid() {
  const useCases = [
    {
      title: "Residential",
      image: residencialImg,
      description: "We aim to guarantee healthy, great-tasting water throughout every point of use in your home, because proper hydration is the foundation of a healthy life."
    },
    {
      title: "Commercial & Industrial",
      image: comercialImg,
      description: "Backed by a comprehensive support team, APB Water Systems and our extensive commercial and industrial lines are designed to create perfect, high-quality water for consumption and use."
    },
    {
      title: "BioTech & Pharma",
      image: biotechImg,
      description: "Water is the most utilized raw material in the pharmaceutical and biotechnology industry. Our experience makes pharmaceutical water the ideal solution for the pharmaceutical and biotechnology industry."
    }
    
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-cyan-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Water Solutions for Every Need
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From residential homes to industrial facilities, we provide tailored water treatment solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto justify-items-center">
          {useCases.map((useCase, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group w-full max-w-sm"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={useCase.image} 
                  alt={useCase.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6 bg-gradient-to-br from-blue-50 to-white">
                <h3 className="text-xl font-bold text-blue-600 mb-3">
                  {useCase.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {useCase.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-all hover:shadow-xl transform hover:-translate-y-1">
            Explore All Solutions
          </button>
        </div>
      </div>
    </section>
  )
}
