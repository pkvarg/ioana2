import { useState } from 'react'
import axios from 'axios'
import { motion } from 'framer-motion'
import { BarChart3, Users, Bot, Mail } from 'lucide-react'

const Counter = () => {
  const [botsCount, setBotsCount] = useState<number>(0)
  const [visitorsCount, setVisitorsCount] = useState<number>(0)
  const [emailsCount, setEmailsCount] = useState<number>(0)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }

  const apiUrl = 'https://hono-api.pictusweb.com/api/stats/io'
  //const apiUrl = 'http://localhost:3013/api/stats/io'

  const getStats = async () => {
    try {
      const { data } = await axios.get(apiUrl, config)
      setBotsCount(data.bots)
      setVisitorsCount(data.visitors)
      setEmailsCount(data.emails)
    } catch (err) {
      setError('Failed to fetch bot statistics')
      console.error('Error fetching bots:', err)
    }
  }

  return (
    <div className="p-6 lg:p-10 bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 rounded-xl">
      <div className="max-w-2xl mx-auto h-screen">
        {/* Title */}
        <h2 className="text-3xl lg:text-4xl font-semibold text-purple-900 mb-6 text-center">
          Website Statistics
        </h2>

        {/* Display Stats Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={getStats}
          disabled={isLoading}
          className={`w-full p-4 mb-8 flex items-center justify-center gap-3 rounded-lg font-medium transition-all duration-200 ${
            isLoading
              ? 'bg-purple-300 cursor-not-allowed'
              : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg hover:shadow-xl'
          }`}
        >
          {isLoading ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              <span>Loading Statistics...</span>
            </>
          ) : (
            <>
              <BarChart3 className="w-5 h-5" />
              <span className="text-3xl">Click to Display Stats</span>
            </>
          )}
        </motion.button>

        {/* Error Message */}
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-red-50 border border-red-200 text-red-600 p-4 rounded-lg mb-6 text-center"
          >
            {error}
          </motion.div>
        )}

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-1 gap-4 lg:gap-6">
          {/* Bots Card */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-purple-100"
          >
            <div className="flex items-center gap-3 mb-2">
              <Bot className="w-6 h-6 text-purple-600" />
              <h3 className="text-2xl font-medium text-purple-900">Bots</h3>
            </div>
            <p className="text-3xl font-bold text-purple-700">{botsCount}</p>
          </motion.div>

          {/* Visitors Card */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-green-100"
          >
            <div className="flex items-center gap-3 mb-2">
              <Users className="w-6 h-6 text-indigo-600" />
              <h3 className="text-2xl font-medium text-green-900"> Total Visitors </h3>
            </div>
            <p className="text-3xl font-bold text-green-700">{visitorsCount}</p>
          </motion.div>

          {/* Emails Card */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-indigo-100"
          >
            <div className="flex items-center gap-3 mb-2">
              <Mail className="w-6 h-6 text-indigo-600" />
              <h3 className="text-2xl font-medium text-indigo-900">Emails sent</h3>
            </div>
            <p className="text-3xl font-bold text-indigo-700">{emailsCount}</p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Counter
