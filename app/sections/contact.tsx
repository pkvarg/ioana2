import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import axios from 'axios'
import { motion } from 'framer-motion'
import { Send, CheckCircle2, AlertCircle } from 'lucide-react'

interface FormData {
  name: string
  email: string
  message: string
}

interface Message {
  type: 'success' | 'error'
  text: string
}

const Contact = () => {
  const form = useRef<HTMLFormElement>(null)
  const [message, setMessage] = useState<Message | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  })
  const [agreedToTerms, setAgreedToTerms] = useState(false)

  const x = import.meta.env.EMAIL_EXTRA_ONE
  const y = import.meta.env.EMAIL_EXTRA_TWO
  const [passwordGroupOne, setPasswordGroupOne] = useState(x)
  const [passwordGroupTwo, setPasswordGroupTwo] = useState(y)

  const increaseBots = async () => {
    try {
      await axios.put('https://api.pictusweb.com/api/bots/io/increase', {
        headers: { 'Content-Type': 'application/json' },
      })
    } catch (error) {
      console.error('Error increasing bots:', error)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage(null)

    if (passwordGroupOne !== x || passwordGroupTwo !== y) {
      setMessage({ type: 'error', text: 'Message failed! Try again later, please.' })
      setFormData({ name: '', email: '', message: '' })
      increaseBots()
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
      setIsSubmitting(false)
      return
    }

    try {
      const result = await emailjs.sendForm(
        import.meta.env.EMAILJS_SERVICE!,
        import.meta.env.EMAILJS_TEMPLATE!,
        form.current!,
        import.meta.env.EMAILJS_USER,
      )

      console.log(result.text)
      setMessage({ type: 'success', text: 'Message successfully sent!' })
      setFormData({ name: '', email: '', message: '' })
      setAgreedToTerms(false)
    } catch (error) {
      setMessage({ type: 'error', text: 'Error! Try again later, please.' })
      console.error(error)
    } finally {
      setIsSubmitting(false)
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
    }
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
          id="contact"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl lg:text-5xl font-bold text-center text-purple-900 mb-16 lg:mb-24"
        >
          Contact Me
        </motion.h1>

        <div className="flex flex-col lg:flex-row lg:justify-center items-center gap-8 lg:gap-48">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-[30%] 2xl:w-[20%] w-[85%]"
          >
            <div className="relative group">
              <img
                className="w-full h-auto rounded-xl transform transition-transform duration-300 hover:scale-103 shadow-lg"
                src="/ioana-contact.webp"
                alt="Photo of a beautiful girl"
              />
              {/* Decorative frame */}
              <div className="absolute -inset-4 border-2 border-pink-300 rounded-xl transform -rotate-3 pointer-events-none z-[-1] transition-transform duration-300 group-hover:rotate-0"></div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-[33%] w-[85%] lg:pt-0 pt-16"
          >
            {/* Message Display */}
            {message && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mb-6 p-4 rounded-xl flex items-center gap-3 ${
                  message.type === 'success'
                    ? 'bg-green-100 text-green-700 border border-green-200'
                    : 'bg-red-100 text-red-700 border border-red-200'
                }`}
              >
                {message.type === 'success' ? (
                  <CheckCircle2 className="w-5 h-5" />
                ) : (
                  <AlertCircle className="w-5 h-5" />
                )}
                <span>{message.text}</span>
              </motion.div>
            )}

            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              {/* Message Field */}
              <div>
                <label className="block text-purple-900 font-medium mb-2 text-lg">
                  Your message <span className="text-red-500">*</span>
                </label>
                <motion.textarea
                  whileFocus={{ scale: 1.01 }}
                  className="w-full px-4 py-3 rounded-xl border border-pink-200 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-200 transition-all duration-300 text-black "
                  rows={5}
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  placeholder="Write your message here..."
                />
              </div>

              {/* Name Field */}
              <div>
                <label className="block text-purple-900 font-medium mb-2 text-lg">
                  Name <span className="text-red-500">*</span>
                </label>
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  className="w-full px-4 py-3 rounded-xl border border-pink-200 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-200 transition-all duration-300 text-black"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Your name"
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-purple-900 font-medium mb-2 text-lg">
                  Email <span className="text-red-500">*</span>
                </label>
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  className="w-full px-4 py-3 rounded-xl border border-pink-200 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-200 transition-all duration-300 text-black"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Terms Checkbox */}
              <div className="flex items-center gap-3">
                <motion.input
                  whileTap={{ scale: 0.9 }}
                  type="checkbox"
                  id="terms"
                  checked={agreedToTerms}
                  onChange={(e) => setAgreedToTerms(e.target.checked)}
                  required
                  className="w-5 h-5 rounded border-pink-300 text-purple-600 focus:ring-2 focus:ring-purple-200 transition-all"
                />
                <label htmlFor="terms" className="text-purple-900 text-lg">
                  I agree to process my data
                </label>
              </div>

              {/* Hidden Bot Prevention Fields */}
              <input
                type="hidden"
                name="password_group_one"
                value={passwordGroupOne}
                onChange={(e) => setPasswordGroupOne(e.target.value)}
              />
              <input
                type="hidden"
                name="password_group_two"
                value={passwordGroupTwo}
                onChange={(e) => setPasswordGroupTwo(e.target.value)}
              />

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className={`w-full mt-6 py-4 px-6 rounded-xl font-semibold flex items-center justify-center gap-3 transition-all duration-300 ${
                  isSubmitting
                    ? 'bg-purple-300 cursor-not-allowed'
                    : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg hover:shadow-xl'
                }`}
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <Send className="w-5 h-5" />
                )}
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
