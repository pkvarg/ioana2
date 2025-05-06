import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

interface GalleryImage {
  src: string
  alt: string
}

const Gallery = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0)

  const images: GalleryImage[] = [
    { src: '/gallery/winter_web.webp', alt: 'Photo of a beautiful girl' },
    { src: '/gallery/ethereal_web.webp', alt: 'Photo of a beautiful girl' },
    { src: '/gallery/halftone_web.webp', alt: 'Photo of a beautiful girl' },
    { src: '/gallery/geometrical_web.webp', alt: 'Photo of a beautiful girl' },
    { src: '/gallery/b-a_web.webp', alt: 'Photo of a beautiful girl' },
    { src: '/gallery/autumn_web.webp', alt: 'Photo of a beautiful girl' },
    { src: '/gallery/birthday_web.webp', alt: 'Photo of a beautiful girl' },
    { src: '/gallery/cool_web.webp', alt: 'Photo of a beautiful girl' },
    { src: '/gallery/disco_web.webp', alt: 'Photo of a beautiful girl' },
    { src: '/gallery/hippie_web.webp', alt: 'Photo of a beautiful girl' },
    { src: 'gallery/pink_web.webp', alt: 'Photo of a beautiful girl' },
    { src: 'gallery/oriental_web.webp', alt: 'Photo of a beautiful girl' },
    { src: '/gallery/red_web.webp', alt: 'Photo of a beautiful girl' },
    { src: '/gallery/selfie_web.webp', alt: 'Photo of a beautiful girl' },
    { src: '/gallery/selfportrait_web.webp', alt: 'Photo of a beautiful girl' },
    { src: '/gallery/traditional1_web.webp', alt: 'Photo of a beautiful girl' },
    { src: '/gallery/traditional2_web.webp', alt: 'Photo of a beautiful girl' },
    { src: '/gallery/traditional3_web.webp', alt: 'Photo of a beautiful girl' },
    { src: '/gallery/traditional4_web.webp', alt: 'Photo of a beautiful girl' },
    { src: '/gallery/traditional5_web.webp', alt: 'Photo of a beautiful girl' },
    { src: '/gallery/traditional6_web.webp', alt: 'Photo of a beautiful girl' },
    { src: '/gallery/90s_web.webp', alt: 'Photo of a boy' },
  ]

  const featuredImages = images.slice(0, 6)

  const openModal = (index: number) => {
    setCurrentImageIndex(index)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const navigateImage = (direction: 'prev' | 'next') => {
    const maxIndex = images.length - 1
    if (direction === 'prev') {
      setCurrentImageIndex(currentImageIndex === 0 ? maxIndex : currentImageIndex - 1)
    } else {
      setCurrentImageIndex(currentImageIndex === maxIndex ? 0 : currentImageIndex + 1)
    }
  }

  return (
    <section
      className="relative pb-24 lg:pb-32 bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 overflow-hidden"
      id="gallery"
    >
      {/* Decorative circles - same as hero */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-40 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

      {/* Gallery Content */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 pt-24 lg:pt-32">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl lg:text-5xl font-bold text-center text-purple-900 mb-16 lg:mb-24"
        >
          Gallery
        </motion.h1>

        {/* Featured Images Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {featuredImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group cursor-pointer"
              onClick={() => openModal(index)}
            >
              <div className="relative overflow-hidden rounded-xl lg:rounded-2xl aspect-square">
                <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* View Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center text-purple-700 mt-12 lg:mt-16 text-xl lg:text-xl"
        >
          Click on any image to explore the full gallery
        </motion.p>
      </div>

      {/* Modal Slider */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center"
            onClick={closeModal}
          >
            {/* Close Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute top-6 right-6 z-10 text-white p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
              onClick={(e) => {
                e.stopPropagation()
                closeModal()
              }}
            >
              <X size={20} className="w-5 h-5 lg:w-6 lg:h-6" />
            </motion.button>

            {/* Previous Arrow */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-10 text-white p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
              onClick={(e) => {
                e.stopPropagation()
                navigateImage('prev')
              }}
            >
              <ChevronLeft size={24} className="w-6 h-6 lg:w-8 lg:h-8" />
            </motion.button>

            {/* Next Arrow */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-10 text-white p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
              onClick={(e) => {
                e.stopPropagation()
                navigateImage('next')
              }}
            >
              <ChevronRight size={24} className="w-6 h-6 lg:w-8 lg:h-8" />
            </motion.button>

            {/* Image Container */}
            <div
              className="relative w-full h-full flex items-center justify-center p-8 lg:p-12"
              onClick={(e) => e.stopPropagation()}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImageIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                  className="relative max-w-6xl w-full"
                >
                  <img
                    src={images[currentImageIndex].src}
                    alt={images[currentImageIndex].alt}
                    className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                  />

                  {/* Image Counter */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-white/70 text-sm"
                  >
                    {currentImageIndex + 1} / {images.length}
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Gallery
