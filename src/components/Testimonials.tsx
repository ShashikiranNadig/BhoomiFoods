'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { useState, useEffect } from 'react'

interface Testimonial {
  id: number
  name: string
  location: string
  rating: number
  text: string
  image: string
}

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Priya Iyer",
      location: "Chennai, Tamil Nadu",
      rating: 5,
      text: "The mango pickle from Bhoomi Foods is absolutely divine! It tastes exactly like my grandmother used to make in our village. The quality and authenticity are unmatched.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 2,
      name: "Rajesh Nair",
      location: "Kochi, Kerala",
      rating: 5,
      text: "I've been ordering their spices for months now. The garam masala powder is so aromatic and fresh. It has completely transformed my cooking! Perfect for our traditional Kerala dishes.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 3,
      name: "Meera Krishnan",
      location: "Bangalore, Karnataka",
      rating: 5,
      text: "The coconut chutney powder is perfect for my morning idlis and dosas. My family loves it! The packaging is also very nice and the delivery is always on time.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 4,
      name: "Suresh Reddy",
      location: "Hyderabad, Telangana",
      rating: 5,
      text: "Authentic South Indian flavors! The sambar powder is exactly what I was looking for. It brings back memories of my childhood in Andhra Pradesh. Highly recommended!",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000)

    return () => clearInterval(interval)
  }, [testimonials.length])

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="py-16 bg-forest text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-playfair font-bold mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about our products.
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 lg:p-12 text-center">
            {/* Quote Icon */}
            <div className="flex justify-center mb-6">
              <Quote className="w-12 h-12 text-saffron" />
            </div>

            {/* Testimonial Text */}
            <blockquote className="text-lg lg:text-xl text-gray-100 mb-8 leading-relaxed">
              "{currentTestimonial.text}"
            </blockquote>

            {/* Customer Info */}
            <div className="flex flex-col items-center space-y-4">
              <div className="flex space-x-1">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-saffron text-saffron" />
                ))}
              </div>
              
              <div className="flex items-center space-x-4">
                <img
                  src={currentTestimonial.image}
                  alt={currentTestimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="text-left">
                  <p className="font-semibold text-white">{currentTestimonial.name}</p>
                  <p className="text-gray-300 text-sm">{currentTestimonial.location}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentIndex ? 'bg-saffron' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
