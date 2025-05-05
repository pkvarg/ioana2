import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import axios from 'axios'

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('cookieConsent')
    if (!cookieConsent) {
      setIsVisible(true)
    }
  }, [])

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }

  const increaseVisitorsDeclined = async () => {
    try {
      const { data } = await axios.put(
        'https://api.pictusweb.com/api/visitors/io/increase',
        {},
        config,
      )
      console.log('vstrsDec:', data.visitorsDeclinedIo)
    } catch (error) {
      console.error('Error tracking declined visitors:', error)
    }
  }

  const increaseVisitorsAgreed = async () => {
    try {
      const { data } = await axios.put(
        'https://api.pictusweb.com/api/visitors/io/agree/increase',
        {},
        config,
      )
      console.log('vstrsAgr:', data.visitorsAgreedIo)
    } catch (error) {
      console.error('Error tracking agreed visitors:', error)
    }
  }

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted')
    setIsVisible(false)
    increaseVisitorsAgreed()
  }

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined')
    setIsVisible(false)
    increaseVisitorsDeclined()
  }

  // Don't render on server side
  if (!isClient) return null

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-6 bg-gradient-to-r from-slate-100 to-slate-200 border-t border-slate-300 shadow-lg"
        >
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Message */}
            <div className="flex-1 text-center sm:text-left">
              <p className="text-slate-800 text-sm sm:text-base">
                This website uses analytical and operation necessary cookies. We use neither
                functional nor marketing cookies.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex gap-3">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleDecline}
                className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors duration-200"
              >
                Decline
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleAccept}
                className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors duration-200"
              >
                Agree
              </motion.button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default CookieConsent
