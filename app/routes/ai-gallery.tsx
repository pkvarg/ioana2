// export default AIGallery
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ChevronLeft,
  ChevronRight,
  X,
  Heart,
  Sparkles,
  Star,
  Flame,
  Palette,
  Lock,
  Unlock,
} from 'lucide-react'

interface GalleryImage {
  src: string
  alt: string
  category: 'cuties' | 'sporties' | 'eleganties' | 'hotties' | 'arties'
}

const AIGallery = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0)
  const [currentCategory, setCurrentCategory] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  // Check if password was previously authenticated in this session
  useEffect(() => {
    const storedAuth = sessionStorage.getItem('galleryAuthenticated')
    if (storedAuth === 'true') {
      setIsAuthenticated(true)
    }
  }, [])

  // Sample images - replace with your actual AI-generated images
  const images: GalleryImage[] = [
    // Cuties
    // { src: '/gallery/cuties6.png', alt: 'AI cute portrait 1', category: 'cuties' },
    // { src: '/gallery/cool_web.jpg', alt: 'AI cute portrait 1', category: 'cuties' },
    { src: '/aigallery/cuties1.png', alt: 'AI cute portrait 1', category: 'cuties' },
    { src: '/aigallery/cuties2.png', alt: 'AI cute portrait 2', category: 'cuties' },
    { src: '/aigallery/cuties3.png', alt: 'AI cute portrait 3', category: 'cuties' },
    { src: '/aigallery/cuties4.png', alt: 'AI cute portrait 4', category: 'cuties' },
    { src: '/aigallery/cuties5.png', alt: 'AI cute portrait 4', category: 'cuties' },
    { src: '/aigallery/cuties6.png', alt: 'AI cute portrait 4', category: 'cuties' },
    { src: '/aigallery/cuties7.png', alt: 'AI cute portrait 4', category: 'cuties' },
    { src: '/aigallery/cuties8.png', alt: 'AI cute portrait 4', category: 'cuties' },
    { src: '/aigallery/cuties9.png', alt: 'AI cute portrait 4', category: 'cuties' },
    { src: '/aigallery/cuties10.png', alt: 'AI cute portrait 4', category: 'cuties' },
    { src: '/aigallery/cuties11.png', alt: 'AI cute portrait 4', category: 'cuties' },
    { src: '/aigallery/cuties12.png', alt: 'AI cute portrait 4', category: 'cuties' },
    { src: '/aigallery/cuties13.png', alt: 'AI cute portrait 4', category: 'cuties' },
    { src: '/aigallery/cuties14.png', alt: 'AI cute portrait 4', category: 'cuties' },
    { src: '/aigallery/cuties15.png', alt: 'AI cute portrait 4', category: 'cuties' },

    // Sporties
    { src: '/aigallery/sporties1.png', alt: 'AI sporty portrait 1', category: 'sporties' },
    { src: '/aigallery/sporties2.png', alt: 'AI sporty portrait 2', category: 'sporties' },
    { src: '/aigallery/sporties3.png', alt: 'AI sporty portrait 3', category: 'sporties' },
    { src: '/aigallery/sporties4.png', alt: 'AI sporty portrait 3', category: 'sporties' },

    // Eleganties
    { src: '/aigallery/eleganties1.png', alt: 'AI elegant portrait 1', category: 'eleganties' },
    { src: '/aigallery/eleganties2.png', alt: 'AI elegant portrait 2', category: 'eleganties' },
    { src: '/aigallery/eleganties3.png', alt: 'AI elegant portrait 3', category: 'eleganties' },
    { src: '/aigallery/eleganties4.png', alt: 'AI elegant portrait 4', category: 'eleganties' },
    { src: '/aigallery/eleganties5.png', alt: 'AI elegant portrait 5', category: 'eleganties' },

    // Hotties
    { src: '/aigallery/hotties1.png', alt: 'AI hot portrait 1', category: 'hotties' },
    { src: '/aigallery/hotties2.png', alt: 'AI hot portrait 2', category: 'hotties' },
    { src: '/aigallery/hotties3.png', alt: 'AI hot portrait 3', category: 'hotties' },
    { src: '/aigallery/hotties4.png', alt: 'AI hot portrait 3', category: 'hotties' },
    { src: '/aigallery/hotties5.png', alt: 'AI hot portrait 3', category: 'hotties' },
    { src: '/aigallery/hotties6.png', alt: 'AI hot portrait 3', category: 'hotties' },
    { src: '/aigallery/hotties7.png', alt: 'AI hot portrait 3', category: 'hotties' },
    { src: '/aigallery/hotties8.png', alt: 'AI hot portrait 3', category: 'hotties' },

    // Arties
    { src: '/aigallery/arties1.png', alt: 'AI artistic portrait 1', category: 'arties' },
    { src: '/aigallery/arties2.png', alt: 'AI artistic portrait 2', category: 'arties' },
    { src: '/aigallery/arties3.png', alt: 'AI artistic portrait 3', category: 'arties' },
    { src: '/aigallery/arties4.png', alt: 'AI artistic portrait 4', category: 'arties' },
    { src: '/aigallery/arties5.png', alt: 'AI artistic portrait 5', category: 'arties' },
    //{ src: '/aigallery/arties6.png', alt: 'AI artistic portrait 5', category: 'arties' },
  ]

  const categories = [
    {
      name: 'cuties',
      title: 'Cuties',
      color: 'from-pink-400 to-rose-400',
      icon: Heart,
      borderColor: 'border-pink-200',
      textColor: 'text-pink-600',
    },
    {
      name: 'sporties',
      title: 'Sporties',
      color: 'from-blue-400 to-indigo-400',
      icon: Sparkles,
      borderColor: 'border-blue-200',
      textColor: 'text-blue-600',
    },
    {
      name: 'eleganties',
      title: 'Eleganties',
      color: 'from-purple-400 to-pink-400',
      icon: Star,
      borderColor: 'border-purple-200',
      textColor: 'text-purple-600',
    },
    {
      name: 'hotties',
      title: 'Hotties',
      color: 'from-red-400 to-orange-400',
      icon: Flame,
      borderColor: 'border-red-200',
      textColor: 'text-red-600',
    },
    {
      name: 'arties',
      title: 'Arties',
      color: 'from-emerald-400 to-teal-400',
      icon: Palette,
      borderColor: 'border-emerald-200',
      textColor: 'text-emerald-600',
    },
  ]

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const pswrd = import.meta.env.VITE_AI

    if (password === pswrd) {
      setIsAuthenticated(true)
      setError('')
      // Save auth state to session storage
      sessionStorage.setItem('galleryAuthenticated', 'true')
    } else {
      setError('Incorrect password')
      setPassword('')
    }
  }

  const openModal = (index: number, category: string) => {
    const categoryImages = images.filter((img) => img.category === category)
    const imageIndexInCategory = categoryImages.findIndex((img) => img.src === images[index].src)
    const allCategoryIndexes = images
      .map((img, idx) => (img.category === category ? idx : -1))
      .filter((idx) => idx !== -1)

    setCurrentImageIndex(allCategoryIndexes[imageIndexInCategory])
    setCurrentCategory(category)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setCurrentCategory('')
  }

  const navigateImage = (direction: 'prev' | 'next') => {
    const categoryImages = images
      .map((img, idx) => ({ ...img, originalIndex: idx }))
      .filter((img) => img.category === currentCategory)

    const currentImageInCategory = categoryImages.findIndex(
      (img) => img.originalIndex === currentImageIndex,
    )

    let newIndex
    if (direction === 'prev') {
      newIndex =
        currentImageInCategory === 0 ? categoryImages.length - 1 : currentImageInCategory - 1
    } else {
      newIndex =
        currentImageInCategory === categoryImages.length - 1 ? 0 : currentImageInCategory + 1
    }

    setCurrentImageIndex(categoryImages[newIndex].originalIndex)
  }

  return (
    <section className="relative pb-24 lg:pb-32 bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-40 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 pt-24 lg:pt-32">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl lg:text-6xl font-bold text-center text-purple-900 mb-8 lg:mb-16"
        >
          My AI Gallery
        </motion.h1>

        {/* Authentication Section */}
        {!isAuthenticated ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="max-w-md mx-auto mb-16"
          >
            <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-purple-200">
              <div className="flex items-center gap-3 mb-6">
                <Lock className="w-6 h-6 text-purple-600" />
                <h2 className="text-4xl font-semibold text-purple-900">Private Gallery</h2>
              </div>

              <p className="text-gray-700 mb-6 text-2xl">
                This gallery is password protected. Please enter the password to view the content.
              </p>

              <form onSubmit={handlePasswordSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="password"
                    className="block text-lg font-medium text-gray-700 mb-1"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-purple-400 focus:outline-none transition-colors text-black text-2xl"
                    placeholder="Enter password"
                    required
                  />
                  {error && <p className="mt-2 text-lg text-red-600">{error}</p>}
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-2 px-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 text-2xl"
                >
                  <Unlock className="w-5 h-5" />
                  Unlock Gallery
                </motion.button>
              </form>
            </div>
          </motion.div>
        ) : (
          /* Categories - Only shown when authenticated */
          <div className="space-y-24">
            {categories.map((category, catIndex) => {
              const categoryImages = images
                .filter((img) => img.category === category.name)
                .slice(0, 3)
              const Icon = category.icon

              return (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: catIndex * 0.2 }}
                  className="relative"
                >
                  {/* Category Header */}
                  <div
                    className={`flex items-center gap-3 mb-8 pb-3 border-b-2 ${category.borderColor}`}
                  >
                    <Icon className={`w-8 h-8 ${category.textColor}`} />
                    <h2 className={`text-3xl lg:text-4xl font-semibold ${category.textColor}`}>
                      {category.title}
                    </h2>
                  </div>

                  {/* Images Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {categoryImages.map((image, index) => {
                      const originalIndex = images.findIndex(
                        (img) => img.src === image.src && img.category === image.category,
                      )

                      return (
                        <motion.div
                          key={`${category.name}-${index}`}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5, delay: catIndex * 0.2 + index * 0.1 }}
                          whileHover={{ y: -10 }}
                          className="relative group cursor-pointer"
                          onClick={() => openModal(originalIndex, category.name)}
                        >
                          <div className="relative overflow-hidden rounded-xl lg:rounded-2xl aspect-square">
                            <img
                              src={image.src}
                              alt={image.alt}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />

                            {/* Overlay */}
                            <div
                              className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-0 group-hover:opacity-80 transition-opacity duration-300`}
                            />

                            {/* View Icon */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300">
                                <svg
                                  className="w-8 h-8 text-white"
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
                      )
                    })}
                  </div>
                </motion.div>
              )
            })}
          </div>
        )}
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
                    {images
                      .filter((img) => img.category === currentCategory)
                      .findIndex((img) => img.src === images[currentImageIndex].src) + 1}{' '}
                    / {images.filter((img) => img.category === currentCategory).length}
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

export default AIGallery
