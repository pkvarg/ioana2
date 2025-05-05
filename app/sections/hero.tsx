import React from 'react'
import { motion } from 'framer-motion'
import { planetVariants, staggerContainer, fadeIn } from './../motion'
import { TypingText } from './../components/CustomTexts'
import Navbar from '~/components/Navbar'

interface HeroProps {
  className?: string
}

const Hero: React.FC<HeroProps> = ({ className = '' }) => {
  return (
    <section
      className={`${className} relative pb-24 lg:pb-32 bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 overflow-hidden`}
    >
      <Navbar />
      {/* Decorative circles */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-40 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 mt-32"
      >
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center lg:items-start">
          <motion.div
            variants={fadeIn('right', 'tween', 0.2, 1)}
            className="flex-1 flex justify-center items-center flex-col lg:max-w-xl"
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="w-20 h-20 mb-8 text-pink-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-full h-full filter drop-shadow-md"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                />
              </svg>
            </motion.div>

            <h2 className="text-4xl lg:text-4xl font-light text-purple-900 mb-6 text-center lg:text-left">
              Welcome to
            </h2>
            <div className="text-black">
              <TypingText title="IoanaM Illustrations" />
            </div>

            <h2 className="text-3xl lg:text-[25px] font-medium text-pink-600 mt-8 text-center lg:text-left">
              Passion for photography
            </h2>
            <h2 className="text-3xl lg:text-[22.5px] font-medium text-pink-600 text-center lg:text-left">
              and digital design
            </h2>

            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="w-20 h-20 mt-8 text-purple-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-full h-full filter drop-shadow-md"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                />
              </svg>
            </motion.div>
          </motion.div>

          <motion.div
            variants={planetVariants('right')}
            className="flex-1 flex justify-center items-center"
          >
            <div className="relative">
              <img
                src="/ioana-hero.webp"
                alt="IoanaM Illustrations - Designer"
                className="w-full max-w-lg h-auto object-contain transform hover:scale-105 transition-transform duration-500 filter drop-shadow-xl"
              />
              {/* Decorative frame */}
              <div className="absolute -inset-6 border-2 border-pink-300 rounded-lg transform -rotate-6 pointer-events-none z-[-1]"></div>
              <div className="absolute -inset-8 border-2 border-purple-300 rounded-lg transform rotate-3 pointer-events-none z-[-1]"></div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
