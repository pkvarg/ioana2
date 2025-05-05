import { useState } from 'react'
import axios from 'axios'
import { motion } from 'framer-motion'
import { BarChart3, TrendingUp, Users, Bot } from 'lucide-react'

interface VisitorData {
  agreed: number
  declined: number
}

const Counter = () => {
  const [botsCount, setBotsCount] = useState<number>(0)
  const [visitorsData, setVisitorsData] = useState<VisitorData>({
    agreed: 0,
    declined: 0,
  })
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }

  const getBots = async () => {
    try {
      const { data } = await axios.get('https://api.pictusweb.com/api/bots/io/counter', config)
      setBotsCount(data)
    } catch (err) {
      setError('Failed to fetch bot statistics')
      console.error('Error fetching bots:', err)
    }
  }

  const getVisitors = async () => {
    try {
      const { data } = await axios.get('https://api.pictusweb.com/api/visitors/io/counter', config)
      setVisitorsData({
        agreed: data.agreed,
        declined: data.declined,
      })
    } catch (err) {
      setError('Failed to fetch visitor statistics')
      console.error('Error fetching visitors:', err)
    }
  }

  const fetchAllStats = async () => {
    setIsLoading(true)
    setError(null)
    try {
      await Promise.all([getBots(), getVisitors()])
    } catch (err) {
      setError('Failed to fetch statistics')
    } finally {
      setIsLoading(false)
    }
  }

  const totalVisitors = visitorsData.agreed + visitorsData.declined

  return (
    <div className="p-6 lg:p-10 bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 rounded-xl">
      <div className="max-w-2xl mx-auto h-screen">
        {/* Title */}
        <h2 className="text-2xl lg:text-3xl font-semibold text-purple-900 mb-6 text-center">
          Website Statistics
        </h2>

        {/* Display Stats Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={fetchAllStats}
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
              <span>Display Stats</span>
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
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
          {/* Bots Card */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-purple-100"
          >
            <div className="flex items-center gap-3 mb-2">
              <Bot className="w-6 h-6 text-purple-600" />
              <h3 className="text-lg font-medium text-purple-900">Bots</h3>
            </div>
            <p className="text-3xl font-bold text-purple-700">{botsCount}</p>
          </motion.div>

          {/* Visitors Declined Card */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-pink-100"
          >
            <div className="flex items-center gap-3 mb-2">
              <TrendingUp className="w-6 h-6 text-pink-600 transform rotate-180" />
              <h3 className="text-lg font-medium text-pink-900">Visitors (Declined)</h3>
            </div>
            <p className="text-3xl font-bold text-pink-700">{visitorsData.declined}</p>
          </motion.div>

          {/* Visitors Agreed Card */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-green-100"
          >
            <div className="flex items-center gap-3 mb-2">
              <TrendingUp className="w-6 h-6 text-green-600" />
              <h3 className="text-lg font-medium text-green-900">Visitors (Accepted)</h3>
            </div>
            <p className="text-3xl font-bold text-green-700">{visitorsData.agreed}</p>
          </motion.div>

          {/* Total Visitors Card */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-indigo-100"
          >
            <div className="flex items-center gap-3 mb-2">
              <Users className="w-6 h-6 text-indigo-600" />
              <h3 className="text-lg font-medium text-indigo-900">Total Visitors</h3>
            </div>
            <p className="text-3xl font-bold text-indigo-700">{totalVisitors}</p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Counter
