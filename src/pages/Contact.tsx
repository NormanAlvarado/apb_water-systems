import Header from '../components/Header'
import Footer from '../components/Footer'
import PageLoader from '../components/PageLoader'
import waterBg from '../assets/water.png'

function Contact() {
  const handleWhatsApp = () => {
    const message = `Hello! I'd like to speak with a water systems expert at APB Water Systems.`
    window.open(`https://wa.me/50660339416?text=${encodeURIComponent(message)}`, '_blank')
  }

  const handleEmail = () => {
    window.location.href = 'mailto:cartapate@gmail.com'
  }

  const handleCall = () => {
    window.location.href = 'tel:+50660339416'
  }

  const handleFacebook = () => {
    window.open('https://www.facebook.com/share/1C3YDrXdTz/', '_blank')
  }

  return (
    <div className="min-h-screen">
      <PageLoader />
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center pt-20">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${waterBg})` }}
        >
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
              Let's Talk About Your<br />
              <span className="text-cyan-100">Perfect Water Solution</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/95 mb-8 leading-relaxed drop-shadow-lg">
              Connect with our water treatment experts today and discover how we can transform 
              your water quality. We're here to listen, advise, and deliver the perfect solution for you.
            </p>

            <div className="flex items-center justify-center gap-3 text-white/90">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-lg font-medium">Expert Advice • Fast Response • Personalized Solutions</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Options Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Choose Your Preferred Way to Connect
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                No matter how you reach out, you'll be speaking with a certified water treatment expert 
                who understands your needs and can provide immediate assistance.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {/* WhatsApp Card */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 flex flex-col">
                <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto flex-shrink-0">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">Chat on WhatsApp</h3>
                <p className="text-gray-600 mb-6 text-center flex-grow">
                  Get instant responses from our experts. Share photos, ask questions, and get real-time advice.
                </p>
                <button
                  onClick={handleWhatsApp}
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-xl transition-all transform hover:scale-105 shadow-md hover:shadow-lg"
                >
                  Start WhatsApp Chat
                </button>
                <p className="text-sm text-gray-500 text-center mt-4">
                  💬 Chat with an expert now
                </p>
              </div>

              {/* Phone Card */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 flex flex-col">
                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto flex-shrink-0">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">Call Us Directly</h3>
                <p className="text-gray-600 mb-6 text-center flex-grow">
                  Speak directly with a water specialist. Perfect for urgent inquiries or detailed consultations.
                </p>
                <button
                  onClick={handleCall}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-xl transition-all transform hover:scale-105 shadow-md hover:shadow-lg"
                >
                  Call +506 6033-9416
                </button>
                <p className="text-sm text-gray-500 text-center mt-4">
                  ☎️ Talk to an expert immediately
                </p>
              </div>

              {/* Email Card */}
              <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 flex flex-col">
                <div className="bg-cyan-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto flex-shrink-0">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">Send Us an Email</h3>
                <p className="text-gray-600 mb-6 text-center flex-grow">
                  Prefer to write? Send us detailed information and we'll respond with a comprehensive solution.
                </p>
                <button
                  onClick={handleEmail}
                  className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-4 px-6 rounded-xl transition-all transform hover:scale-105 shadow-md hover:shadow-lg"
                >
                  Email Our Experts
                </button>
                <p className="text-sm text-gray-500 text-center mt-4">
                  ✉️ Detailed response from specialists
                </p>
              </div>

              {/* Facebook Card */}
              <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 flex flex-col">
                <div className="bg-indigo-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto flex-shrink-0">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">Visit Our Facebook</h3>
                <p className="text-gray-600 mb-6 text-center flex-grow">
                  Follow us for updates, tips, and see what our customers are saying about their water solutions.
                </p>
                <button
                  onClick={handleFacebook}
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-6 rounded-xl transition-all transform hover:scale-105 shadow-md hover:shadow-lg"
                >
                  Visit Facebook Page
                </button>
                <p className="text-sm text-gray-500 text-center mt-4">
                  👍 Follow us for updates
                </p>
              </div>
            </div>

            {/* Trust Section */}
            <div className="rounded-2xl p-12 text-center bg-gradient-to-br from-blue-900 via-cyan-900 to-blue-800">
              <h3 className="text-3xl font-bold mb-4 text-white">Why Choose APB Water Systems?</h3>
              <div className="grid md:grid-cols-3 gap-8 mt-8">
                <div>
                  <div className="text-4xl font-bold mb-2 text-white">15+</div>
                  <p className="text-blue-100">Years of Experience</p>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2 text-white">100%</div>
                  <p className="text-blue-100">Guaranteed Quality</p>
                </div>
                <div>
                  <div className="flex justify-center mb-2">
                    <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <p className="text-blue-100">Expert Guidance & Support</p>
                </div>
              </div>
              <p className="text-xl mt-8 text-blue-100">
                Every conversation starts with an expert who cares about your water quality as much as you do.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Contact
