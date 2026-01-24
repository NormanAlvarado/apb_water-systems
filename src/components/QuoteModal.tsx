interface QuoteModalProps {
  isOpen: boolean
  onClose: () => void
  productName?: string
}

export default function QuoteModal({ isOpen, onClose, productName }: QuoteModalProps) {
  if (!isOpen) return null

  const handleWhatsApp = () => {
    const message = productName 
      ? `Hi APB Water Systems! I'm interested in getting a quote for: ${productName}`
      : `Hi APB Water Systems! I'm interested in learning more about your water solutions.`
    window.open(`https://wa.me/50660339416?text=${encodeURIComponent(message)}`, '_blank')
    onClose()
  }

  const handleEmail = () => {
    const subject = productName 
      ? `Quote Request for ${productName}`
      : 'Water Treatment Quote Request'
    const body = productName
      ? `Hello APB Water Systems,%0D%0A%0D%0AI'm interested in getting a quote for: ${productName}%0D%0A%0D%0APlease contact me with more information.%0D%0A%0D%0AThank you!`
      : `Hello APB Water Systems,%0D%0A%0D%0AI'm interested in learning more about your water solutions.%0D%0A%0D%0APlease contact me with more information.%0D%0A%0D%0AThank you!`
    window.location.href = `mailto:info@apbwatersystems.com?subject=${subject}&body=${body}`
    onClose()
  }

  const handleFacebook = () => {
    window.open('https://www.facebook.com/share/1C3YDrXdTz/', '_blank')
    onClose()
  }

  return (
    <div 
      className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-lg max-w-sm w-full shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 pb-4 relative">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <h2 className="text-xl font-bold text-gray-900">Contact Us</h2>
          {productName && (
            <p className="text-sm text-gray-500 mt-1">{productName}</p>
          )}
        </div>

        {/* Content */}
        <div className="px-6 pb-6 space-y-3">
          {/* WhatsApp Option */}
          <button
            onClick={handleWhatsApp}
            className="w-full bg-green-500 hover:bg-green-600 text-white rounded-lg py-3 px-4 flex items-center justify-center gap-2 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            <span className="font-medium">WhatsApp</span>
          </button>

          {/* Email Option */}
          <button
            onClick={handleEmail}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-lg py-3 px-4 flex items-center justify-center gap-2 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="font-medium">Email</span>
          </button>

          {/* Facebook Option */}
          <button
            onClick={handleFacebook}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-3 px-4 flex items-center justify-center gap-2 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            <span className="font-medium">Facebook</span>
          </button>

          {/* Phone Option */}
          <a
            href="tel:+50660339416"
            className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg py-3 px-4 flex items-center justify-center gap-2 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className="font-medium">+506 6033-9416</span>
          </a>
        </div>
      </div>
    </div>
  )
}
