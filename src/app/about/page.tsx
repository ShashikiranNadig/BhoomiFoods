'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Award, Users, Heart, Leaf, Clock, Star } from 'lucide-react'

const AboutPage = () => {
  const stats = [
    { number: '500+', label: 'Happy Customers' },
    { number: '50+', label: 'Products' },
    { number: '15+', label: 'Years Experience' },
    { number: '100%', label: 'Natural' }
  ]

  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Made with Love",
      description: "Every product is crafted with love and care, just like our grandmothers used to make."
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Pure Ingredients",
      description: "We use only the finest, natural ingredients sourced from trusted local farmers."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Traditional Methods",
      description: "Our recipes follow traditional methods passed down through generations."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Quality First",
      description: "We never compromise on quality, ensuring every product meets our high standards."
    }
  ]

  const team = [
    {
      name: "Priya Iyer",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      description: "Passionate about preserving traditional South Indian cuisine and sharing authentic flavors from Tamil Nadu with the world."
    },
    {
      name: "Rajesh Nair",
      role: "Head Chef",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      description: "Master chef from Kerala with 20+ years of experience in traditional South Indian cooking and spice blending."
    },
    {
      name: "Meera Krishnan",
      role: "Quality Manager",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      description: "Ensures every product meets our strict quality standards and maintains the authentic taste of South Indian cuisine."
    }
  ]

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-saffron/10 to-forest/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            <h1 className="text-4xl lg:text-6xl font-playfair font-bold text-forest">
              Our Story
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Preserving the authentic taste of traditional Indian cuisine, one recipe at a time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-forest">
                A Journey of Tradition
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Bhoomi Foods was born from a simple desire to preserve the authentic flavors 
                  of traditional Indian cuisine. Our journey began in a small kitchen where 
                  grandmother's recipes were treasured and passed down through generations.
                </p>
                <p>
                  Today, we continue that legacy by using the same traditional methods, 
                  pure ingredients, and time-tested recipes to bring you the most authentic 
                  flavors of India. Every product we create is a tribute to our rich culinary heritage.
                </p>
                <p>
                  We believe that food is not just nourishment; it's a connection to our roots, 
                  our culture, and our loved ones. That's why we're committed to maintaining 
                  the highest standards of quality and authenticity in everything we do.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Image
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Traditional South Indian kitchen"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-forest text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl lg:text-4xl font-bold text-saffron mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-forest mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do at Bhoomi Foods
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center space-y-4"
              >
                <div className="w-16 h-16 bg-saffron/10 rounded-full flex items-center justify-center mx-auto text-saffron">
                  {value.icon}
                </div>
                <h3 className="text-xl font-playfair font-semibold text-forest">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gradient-to-br from-cream to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-forest mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The passionate people behind Bhoomi Foods
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg p-6 text-center"
              >
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-playfair font-semibold text-forest mb-2">
                  {member.name}
                </h3>
                <p className="text-saffron font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm">
                  {member.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-forest text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold">
              Ready to Experience Authentic Taste?
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Discover our complete range of traditional Indian foods and spices, 
              made with love and authentic recipes.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-saffron hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors duration-200"
            >
              Shop Now
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
