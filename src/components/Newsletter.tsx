'use client'

import { motion } from 'framer-motion'
import { Mail, Send } from 'lucide-react'
import { useState } from 'react'

const Newsletter = () => {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Simulate API call to Formspree or EmailJS
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Here you would integrate with Formspree or EmailJS
      // For now, we'll just show success message
      setIsSubscribed(true)
      setEmail('')
    } catch (error) {
      console.error('Error subscribing:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="py-16 bg-gradient-to-r from-saffron to-orange-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Header */}
          <div className="space-y-4">
            <div className="flex justify-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <Mail className="w-8 h-8 text-white" />
              </div>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-white">
              Stay Updated
            </h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Subscribe to our newsletter and be the first to know about new products, 
              special offers, and traditional recipes.
            </p>
          </div>

          {/* Newsletter Form */}
          {!isSubscribed ? (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            >
              <div className="flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="w-full px-4 py-3 rounded-lg border-0 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-white/50 focus:outline-none"
                />
              </div>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={isLoading}
                className="bg-white text-saffron font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2 disabled:opacity-50"
              >
                {isLoading ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-saffron"></div>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Subscribe</span>
                  </>
                )}
              </motion.button>
            </motion.form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white/20 backdrop-blur-sm rounded-lg p-6 max-w-md mx-auto"
            >
              <div className="flex items-center justify-center space-x-2 text-white">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="font-semibold">Thank you for subscribing!</span>
              </div>
              <p className="text-white/80 text-sm mt-2">
                You'll receive our latest updates and offers soon.
              </p>
            </motion.div>
          )}

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8"
          >
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                <span className="text-white font-bold">10%</span>
              </div>
              <p className="text-white/90 font-medium">Exclusive Discount</p>
            </div>
            
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                <span className="text-white font-bold">★</span>
              </div>
              <p className="text-white/90 font-medium">New Recipes</p>
            </div>
            
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                <span className="text-white font-bold">🚚</span>
              </div>
              <p className="text-white/90 font-medium">Free Shipping</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Newsletter
