import { useState } from 'react'

interface QuoteModalProps {
  isOpen: boolean
  onClose: () => void
  productName: string
}

export default function QuoteModal({ isOpen, onClose, productName }: QuoteModalProps) {
  const [showForm, setShowForm] = useState(false)

  if (!isOpen) return null

  const handleWhatsApp = () => {
    const message = `Hi APB Water Systems! I'm interested in getting a quote for: ${productName}`
    window.open(`https://wa.me/50660339416?text=${encodeURIComponent(message)}`, '_blank')
    onClose()
  }

  return (
    <div 
      className="fixed inset-0 bg-white/30 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-6 text-white relative">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:bg-white/20 rounded-full p-2 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <h2 className="text-2xl font-bold mb-2">Get a Quote</h2>
          <p className="text-blue-50">{productName}</p>
        </div>

        {/* Content */}
        <div className="p-6">
          {!showForm ? (
            /* Options View */
            <div className="space-y-4">
              <p className="text-gray-700 text-center mb-6">Choose how you'd like to get in touch:</p>
              
              {/* WhatsApp Option */}
              <button
                onClick={handleWhatsApp}
                className="w-full bg-green-600 hover:bg-green-700 text-white rounded-xl p-6 flex items-center justify-between transition-all hover:shadow-lg group"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-white/20 p-3 rounded-full">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-lg">Chat on WhatsApp</div>
                    <div className="text-sm text-green-50">Get immediate response</div>
                  </div>
                </div>
                <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Email Form Option */}
              <button
                onClick={() => setShowForm(true)}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-xl p-6 flex items-center justify-between transition-all hover:shadow-lg group"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-white/20 p-3 rounded-full">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-lg">Send Email Inquiry</div>
                    <div className="text-sm text-blue-50">Detailed quote via email</div>
                  </div>
                </div>
                <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Direct Contact Info */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600 text-center mb-3">Or contact us directly:</p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a href="tel:+50660339416" className="text-blue-600 hover:text-blue-700 font-semibold text-center">
                    📞 +506 6033-9416
                  </a>
                  <a href="mailto:info@apbwatersystems.com" className="text-blue-600 hover:text-blue-700 font-semibold text-center">
                    ✉️ info@apbwatersystems.com
                  </a>
                </div>
              </div>
            </div>
          ) : (
            /* Form View */
            <div>
              <button
                onClick={() => setShowForm(false)}
                className="text-blue-600 hover:text-blue-700 mb-4 flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to options
              </button>

              <form 
                action="https://formsubmit.co/n.alvarado.chaves@gmail.com" 
                method="POST" 
                className="space-y-4"
              >
                {/* Hidden fields for FormSubmit configuration */}
                <input type="hidden" name="_subject" value={`Quote Request: ${productName}`} />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="box" />
                
                {/* Product name as hidden field to ensure it's always sent */}
                <input type="hidden" name="Product_Selected" value={productName} />
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="+506 1234-5678"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Product of Interest *
                  </label>
                  <select
                    name="product"
                    defaultValue={productName}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value={productName}>{productName}</option>
                    <option value="Water Conditioning Systems">Water Conditioning Systems</option>
                    <option value="Drinking Water Systems">Drinking Water Systems</option>
                    <option value="Problem Solving Filters">Problem Solving Filters</option>
                    <option value="Constant Pressure Systems">Constant Pressure Systems</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message / Comment
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    placeholder="Tell us more about your needs..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 rounded-lg transition-colors"
                >
                  Send Quote Request
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
