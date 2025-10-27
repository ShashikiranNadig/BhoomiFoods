'use client'

import { motion } from 'framer-motion'
import { ShoppingCart, Heart } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useCart } from '@/contexts/CartContext'

interface Product {
  id: number
  name: string
  price: number
  image: string
  description: string
  category: string
}

interface ProductCardProps {
  product: Product
  index?: number
}

const ProductCard = ({ product, index = 0 }: ProductCardProps) => {
  const { dispatch } = useCart()

  const handleAddToCart = () => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image
      }
    })
  }

  const handleAddToWishlist = () => {
    // TODO: Implement wishlist functionality
    console.log('Added to wishlist:', product.name)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card group overflow-hidden"
    >
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Wishlist Button */}
        <button
          onClick={handleAddToWishlist}
          className="absolute top-3 right-3 p-2 bg-white/80 hover:bg-white rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
        >
          <Heart size={16} className="text-gray-600 hover:text-red-500" />
        </button>
        
        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span className="bg-saffron text-white text-xs font-medium px-2 py-1 rounded-full">
            {product.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-playfair font-semibold text-forest mb-2 line-clamp-2">
          {product.name}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>

        {/* Price and Actions */}
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <p className="text-2xl font-bold text-forest">
              ₹{product.price}
            </p>
            <p className="text-xs text-gray-500">Free shipping</p>
          </div>
          
          <div className="flex space-x-2">
            <Link href={`/products/${product.id}`}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 text-forest border border-forest hover:bg-forest hover:text-white rounded-lg transition-colors duration-200 text-sm font-medium"
              >
                View
              </motion.button>
            </Link>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleAddToCart}
              className="btn-primary flex items-center space-x-1 text-sm px-4 py-2"
            >
              <ShoppingCart size={16} />
              <span>Add</span>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default ProductCard
