'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Star } from 'lucide-react'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-saffron/10 to-forest/10 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-playfair font-bold text-forest leading-tight">
                Authentic Taste.
                <span className="text-gradient block">Pure Tradition.</span>
              </h1>
              <p className="text-lg text-gray-600 max-w-lg">
                Discover the rich flavors of traditional Indian cuisine with our handcrafted spices, 
                pickles, and chutneys made using age-old recipes and pure ingredients.
              </p>
            </div>

            {/* Rating */}
            <div className="flex items-center space-x-2">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-saffron text-saffron" />
                ))}
              </div>
              <span className="text-gray-600 font-medium">4.9/5 (500+ reviews)</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/products">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary flex items-center space-x-2 text-lg px-8 py-4"
                >
                  <span>Shop Now</span>
                  <ArrowRight size={20} />
                </motion.button>
              </Link>
              <Link href="/about">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary text-lg px-8 py-4"
                >
                  Our Story
                </motion.button>
              </Link>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Traditional South Indian spices and ingredients"
                className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl"
              />
            </div>
            
            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -left-4 bg-saffron text-white p-3 rounded-full shadow-lg"
            >
              <Star className="w-6 h-6" />
            </motion.div>
            
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-4 -right-4 bg-forest text-white p-3 rounded-full shadow-lg"
            >
              <span className="text-sm font-bold">100%</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-20 h-20 bg-saffron/20 rounded-full"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-forest/20 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-saffron/30 rounded-full"></div>
      </div>
    </section>
  )
}

export default Hero
