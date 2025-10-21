export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "San José, Costa Rica",
      rating: 5,
      text: "APB Water Systems transformed our home's water quality. The difference in taste and clarity is remarkable. Highly recommend!",
      date: "2 weeks ago"
    },
    {
      name: "Carlos Méndez",
      location: "Heredia, Costa Rica",
      rating: 5,
      text: "Professional installation and excellent customer service. Our appliances last longer and our skin feels better after showers.",
      date: "1 month ago"
    },
    {
      name: "María Rodriguez",
      location: "Alajuela, Costa Rica",
      rating: 5,
      text: "Best investment for our family's health. The water tastes amazing and we save money on bottled water. Thank you APB!",
      date: "3 weeks ago"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied customers enjoying pure, clean water every day
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 italic mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author Info */}
              <div className="border-t border-gray-200 pt-4">
                <p className="font-semibold text-gray-800">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.location}</p>
                <p className="text-xs text-gray-500 mt-1">{testimonial.date}</p>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  )
}
