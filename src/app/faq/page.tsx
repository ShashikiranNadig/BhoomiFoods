'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react'

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "What makes Bhoomi Foods different from other brands?",
      answer: "Bhoomi Foods uses traditional recipes passed down through generations, with 100% natural ingredients and no artificial preservatives. Our products are made in small batches to ensure freshness and authenticity."
    },
    {
      question: "How long do your products last?",
      answer: "Our pickles have a shelf life of 12 months, spices last 6-24 months depending on the type, and chutney powders last 3-6 months. All products should be stored in a cool, dry place."
    },
    {
      question: "Do you offer free shipping?",
      answer: "Yes! We offer free shipping on all orders above ₹500. For orders below ₹500, a nominal shipping charge of ₹50 applies."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit/debit cards, UPI, net banking, and digital wallets through our secure Razorpay payment gateway."
    },
    {
      question: "How long does delivery take?",
      answer: "We deliver within 3-5 business days across India. For metro cities, delivery is usually within 2-3 days. You'll receive tracking information once your order is shipped."
    },
    {
      question: "Can I return or exchange products?",
      answer: "Yes, we offer a 7-day return policy for unopened products. If you're not satisfied with the quality, we'll provide a full refund or replacement."
    },
    {
      question: "Are your products suitable for vegetarians?",
      answer: "Yes, all our products are 100% vegetarian and made with plant-based ingredients. We don't use any animal-derived products in our manufacturing process."
    },
    {
      question: "Do you have any preservatives in your products?",
      answer: "No, we don't use any artificial preservatives. Our products are preserved using traditional methods like salt, oil, and natural fermentation processes."
    },
    {
      question: "Can I customize my order?",
      answer: "Yes, you can request custom spice blends or special packaging. Please contact us at support@bhoomifoods.com or call +91 98765 43210 for custom orders."
    },
    {
      question: "Do you ship internationally?",
      answer: "Currently, we only ship within India. We're working on international shipping and will announce it soon on our website and social media."
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

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
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-saffron/10 rounded-full flex items-center justify-center">
                <HelpCircle className="w-8 h-8 text-saffron" />
              </div>
            </div>
            <h1 className="text-4xl lg:text-6xl font-playfair font-bold text-forest">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our products, shipping, and services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-forest pr-4">
                    {faq.question}
                  </h3>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-saffron flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                
                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? 'auto' : 0,
                    opacity: openIndex === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16 text-center bg-gradient-to-r from-saffron/10 to-forest/10 rounded-xl p-8"
          >
            <h3 className="text-2xl font-playfair font-bold text-forest mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Can't find what you're looking for? Our team is here to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:support@bhoomifoods.com"
                className="btn-primary flex items-center justify-center space-x-2"
              >
                <span>Email Us</span>
              </a>
              <a
                href="tel:+919876543210"
                className="btn-secondary flex items-center justify-center space-x-2"
              >
                <span>Call Us</span>
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <span>WhatsApp</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default FAQPage
