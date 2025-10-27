'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { CheckCircle, Package, Truck, Home } from 'lucide-react'
import Link from 'next/link'

const OrderSuccessPage = () => {
  const searchParams = useSearchParams()
  const [orderDetails, setOrderDetails] = useState({
    paymentId: '',
    orderId: '',
    amount: 0
  })

  useEffect(() => {
    const paymentId = searchParams.get('payment_id')
    const orderId = searchParams.get('order_id')
    
    if (paymentId && orderId) {
      setOrderDetails({
        paymentId,
        orderId,
        amount: 0 // In real app, get from order data
      })
    }
  }, [searchParams])

  return (
    <div className="min-h-screen bg-cream py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8"
        >
          {/* Success Icon */}
          <div className="flex justify-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center"
            >
              <CheckCircle className="w-12 h-12 text-green-600" />
            </motion.div>
          </div>

          {/* Success Message */}
          <div className="space-y-4">
            <h1 className="text-4xl lg:text-5xl font-playfair font-bold text-forest">
              Order Placed Successfully!
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Thank you for your order! We've received your payment and will start preparing your items right away.
            </p>
          </div>

          {/* Order Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto"
          >
            <h2 className="text-2xl font-playfair font-semibold text-forest mb-6">
              Order Details
            </h2>
            
            <div className="space-y-4 text-left">
              <div className="flex justify-between items-center py-2 border-b border-gray-200">
                <span className="font-medium text-gray-600">Order ID:</span>
                <span className="font-mono text-forest">{orderDetails.orderId}</span>
              </div>
              
              <div className="flex justify-between items-center py-2 border-b border-gray-200">
                <span className="font-medium text-gray-600">Payment ID:</span>
                <span className="font-mono text-forest">{orderDetails.paymentId}</span>
              </div>
              
              <div className="flex justify-between items-center py-2 border-b border-gray-200">
                <span className="font-medium text-gray-600">Status:</span>
                <span className="text-green-600 font-semibold">Confirmed</span>
              </div>
              
              <div className="flex justify-between items-center py-2">
                <span className="font-medium text-gray-600">Estimated Delivery:</span>
                <span className="text-forest">3-5 business days</span>
              </div>
            </div>
          </motion.div>

          {/* Next Steps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto"
          >
            <h3 className="text-xl font-playfair font-semibold text-forest mb-6">
              What's Next?
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-saffron/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Package className="w-5 h-5 text-saffron" />
                </div>
                <div>
                  <h4 className="font-semibold text-forest mb-1">Order Processing</h4>
                  <p className="text-gray-600 text-sm">
                    We're preparing your order with care and will notify you when it's ready to ship.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-saffron/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Truck className="w-5 h-5 text-saffron" />
                </div>
                <div>
                  <h4 className="font-semibold text-forest mb-1">Shipping</h4>
                  <p className="text-gray-600 text-sm">
                    Your order will be shipped within 1-2 business days. You'll receive tracking information via email.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-saffron/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-saffron" />
                </div>
                <div>
                  <h4 className="font-semibold text-forest mb-1">Delivery</h4>
                  <p className="text-gray-600 text-sm">
                    Your order will be delivered to your address within 3-5 business days.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/products">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary flex items-center space-x-2 px-8 py-4 text-lg"
              >
                <Package className="w-5 h-5" />
                <span>Continue Shopping</span>
              </motion.button>
            </Link>
            
            <Link href="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary flex items-center space-x-2 px-8 py-4 text-lg"
              >
                <Home className="w-5 h-5" />
                <span>Back to Home</span>
              </motion.button>
            </Link>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="text-center text-gray-600"
          >
            <p className="mb-2">
              Have questions about your order? We're here to help!
            </p>
            <p className="text-sm">
              Email us at <span className="text-saffron font-medium">support@bhoomifoods.com</span> or call <span className="text-saffron font-medium">+91 98765 43210</span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default OrderSuccessPage
