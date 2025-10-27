'use client'

import { motion } from 'framer-motion'
import { Award, Leaf, Users, Clock } from 'lucide-react'
import Image from 'next/image'

const AboutSection = () => {
  const features = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Premium Quality",
      description: "Handpicked ingredients from trusted sources"
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "100% Natural",
      description: "No artificial preservatives or chemicals"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Family Recipe",
      description: "Traditional recipes passed down through generations"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Fresh Daily",
      description: "Made fresh every day with love and care"
    }
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-cream to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-forest">
                About Our Brand
              </h2>
              <p className="text-lg text-gray-600">
                At Bhoomi Foods, we believe in preserving the authentic taste of traditional Indian cuisine. 
                Our journey began in a small kitchen where grandmother's recipes were passed down through generations.
              </p>
              <p className="text-gray-600">
                Today, we continue that legacy by using the same traditional methods, pure ingredients, 
                and time-tested recipes to bring you the most authentic flavors of India.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center space-y-3"
                >
                  <div className="w-16 h-16 bg-saffron/10 rounded-full flex items-center justify-center mx-auto text-saffron">
                    {feature.icon}
                  </div>
                  <h3 className="font-playfair font-semibold text-forest">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Traditional Indian kitchen with spices"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
              
              {/* Decorative Elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-saffron/20 rounded-full"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-forest/20 rounded-full"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
