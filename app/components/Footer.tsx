import { motion } from 'framer-motion'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  const footerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  }

  return (
    <footer className="relative py-24 lg:py-32 bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
      <div className="absolute bottom-0 right-10 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>

      {/* Decorative bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-purple-300/10 rounded-t-[50%] transform -translate-y-1" />

      <motion.div
        variants={footerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12"
      >
        <div className="flex flex-col items-center justify-center gap-4 lg:gap-3">
          {/* Copyright */}
          <motion.div custom={0} variants={itemVariants} className="text-center">
            <p className="text-lg lg:text-xl text-purple-900 font-medium">
              Copyright © {currentYear} ioana-illustrations.eu
            </p>
          </motion.div>

          {/* Email */}
          <motion.div custom={1} variants={itemVariants} className="text-center">
            <a
              href="mailto:info@ioana-illustrations.eu"
              className="text-xl lg:text-2xl text-purple-900 hover:text-pink-600 transition-colors duration-300 font-medium"
            >
              info@ioana-illustrations.eu
            </a>
          </motion.div>

          {/* Development credit */}
          <motion.div custom={2} variants={itemVariants} className="text-center">
            <a
              href="https://pictusweb.sk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg lg:text-xl text-purple-900 hover:text-pink-600 transition-colors duration-300 font-medium"
            >
              &lt;/&gt; PICTUSWEB Development
            </a>
          </motion.div>
        </div>
      </motion.div>
    </footer>
  )
}

export default Footer
