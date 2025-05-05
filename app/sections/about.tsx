import { motion } from 'framer-motion'
import { staggerContainer, fadeIn, textVariant } from '../motion'

interface ServiceItem {
  text: string
  icon: string
  color: string
}

const serviceItems: ServiceItem[] = [
  { text: 'Portraits', icon: 'portrait', color: 'from-rose-400 to-pink-500' },
  { text: 'Logos', icon: 'logo', color: 'from-purple-400 to-indigo-500' },
  { text: 'Invitation Cards', icon: 'card', color: 'from-pink-400 to-rose-500' },
  { text: 'Business Cards', icon: 'business', color: 'from-blue-400 to-purple-500' },
  { text: 'Flyers', icon: 'flyer', color: 'from-purple-400 to-pink-500' },
  { text: 'Visual Identities', icon: 'identity', color: 'from-indigo-400 to-blue-500' },
]

const About = () => {
  const renderServiceIcon = (type: string) => {
    switch (type) {
      case 'portrait':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>
        )
      case 'logo':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
            />
          </svg>
        )
      case 'card':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            />
          </svg>
        )
      case 'business':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
            />
          </svg>
        )
      case 'flyer':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
            />
          </svg>
        )
      default:
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
            />
          </svg>
        )
    }
  }

  return (
    <motion.section
      id="about"
      className="py-16 lg:py-40 bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 relative overflow-hidden min-h-screen"
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.1 }}
    >
      {/* Enhanced Decorative elements */}
      <div className="absolute top-20 left-5 lg:left-10 w-52 h-52 lg:w-72 lg:h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-20 right-5 lg:right-10 w-52 h-52 lg:w-72 lg:h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-32 lg:left-40 w-52 h-52 lg:w-72 lg:h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Creative Header Layout */}
        <div className="mb-16 lg:mb-32 relative">
          <motion.div
            variants={textVariant(0.2)}
            className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16"
          >
            {/* Floating Profile Image */}
            <motion.div
              variants={fadeIn('right', 'tween', 0.3, 1)}
              whileHover={{ scale: 1.05, rotate: -5 }}
              transition={{ duration: 0.3 }}
              className="lg:w-1/3 w-full"
            >
              <div className="relative">
                <div className="relative z-10 transform -rotate-6">
                  <img
                    src="/ionuca-ai.jpeg"
                    alt="Ioana Mîndrilă - Graphic Designer"
                    className="w-56 h-56 lg:w-80 lg:h-80 object-cover rounded-3xl mx-auto border-8 border-white shadow-xl"
                  />
                </div>
                {/* Decorative frame elements */}
                <div className="absolute -top-6 -left-6 w-12 h-12 lg:w-16 lg:h-16 border-4 border-pink-400 rounded-lg -rotate-12 z-20"></div>
                <div className="absolute -bottom-6 -right-6 w-10 h-10 lg:w-12 lg:h-12 border-4 border-purple-400 rounded-lg rotate-12 z-20"></div>
                <div className="absolute -bottom-12 -left-12 w-16 h-16 lg:w-20 lg:h-20 border-2 border-pink-300 rounded-full animate-pulse"></div>
              </div>
            </motion.div>

            {/* Heading and Intro */}
            <motion.div
              variants={fadeIn('left', 'tween', 0.5, 1)}
              className="lg:w-2/3 text-center lg:text-left"
            >
              <h1 className="text-4xl lg:text-5xl font-light text-pink-600 mb-8">Meet Ioana</h1>
              <p className="text-xl lg:text-2xl text-purple-800 font-light leading-relaxed max-w-3xl">
                A creative designer with a passion for bringing ideas to life through visual art
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Bio Cards Layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-start">
          {/* Left Column - Bio */}
          <motion.div variants={fadeIn('up', 'tween', 0.3, 1)} className="space-y-8">
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="bg-white/70 backdrop-blur-sm p-6 lg:p-10 rounded-3xl shadow-lg border border-pink-200/50"
            >
              <h2 className="text-2xl lg:text-4xl text-purple-800 font-medium mb-6">My Story</h2>
              <div className="space-y-4 text-base lg:text-lg text-purple-800">
                <p>
                  I live in Romania and studied graphic design at George Enescu University of Arts
                  of Iași.
                </p>
                <p>My passions are photography, drawing, and digital art.</p>
                <p className="font-medium text-pink-600">Hope you enjoy my work :D</p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="bg-white/50 backdrop-blur-sm p-6 lg:p-10 rounded-3xl shadow-lg border border-pink-200/50"
            >
              <h2 className="text-2xl lg:text-4xl text-purple-800 font-medium mb-6">What I Love</h2>
              <div className="space-y-4 text-base lg:text-lg text-purple-800">
                <p>Creating vector portraits that capture personality</p>
                <p>Designing memorable visual identities</p>
                <p>Crafting elegant invitations and business cards</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Services */}
          <motion.div variants={fadeIn('up', 'tween', 0.5, 1)} className="relative">
            <h2 className="text-2xl lg:text-4xl text-pink-600 font-medium mb-8">Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
              {serviceItems.map((item, index) => (
                <motion.div
                  key={item.text}
                  variants={fadeIn('up', 'tween', 0.1 * index, 0.5)}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                  className={`relative overflow-hidden rounded-2xl p-4 lg:p-6 bg-gradient-to-br ${item.color} text-white shadow-lg`}
                >
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-10 h-10 lg:w-12 lg:h-12 bg-white/20 rounded-lg flex items-center justify-center">
                        {renderServiceIcon(item.icon)}
                      </div>
                    </div>
                    <p className="text-base lg:text-lg font-medium">{item.text}</p>
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute -top-8 -right-8 w-24 h-24 lg:w-32 lg:h-32 bg-white/10 rounded-full blur-sm"></div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Decorative quote section */}
        <motion.div variants={fadeIn('up', 'tween', 0.7, 1)} className="mt-24 lg:mt-32 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="text-pink-400 text-4xl lg:text-6xl absolute -top-8 -left-4 lg:-left-8 opacity-20">
                "
              </div>
              <p className="text-2xl lg:text-4xl font-light text-purple-900 italic leading-relaxed">
                Design is not just what it looks like, it's how it makes you feel
              </p>
              <div className="text-pink-400 text-4xl lg:text-6xl absolute -bottom-8 -right-4 lg:-right-8 opacity-20">
                "
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default About
