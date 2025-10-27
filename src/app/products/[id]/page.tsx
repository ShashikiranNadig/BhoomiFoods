'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { ShoppingCart, Heart, Star, Truck, Shield, RotateCcw } from 'lucide-react'
import Link from 'next/link'

interface Product {
  id: number
  name: string
  price: number
  image: string
  description: string
  category: string
  ingredients: string[]
  weight: string
  shelfLife: string
  origin: string
}

const ProductDetailPage = () => {
  const params = useParams()
  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(true)
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`/api/products/${params.id}`)
        if (response.ok) {
          const data = await response.json()
          setProduct(data)
        } else {
          // Fallback to static data
          const staticProducts = await fetch('/api/products').then(res => res.json())
          const foundProduct = staticProducts.find((p: Product) => p.id === parseInt(params.id as string))
          setProduct(foundProduct || null)
        }
      } catch (error) {
        console.error('Error fetching product:', error)
      } finally {
        setLoading(false)
      }
    }

    if (params.id) {
      fetchProduct()
    }
  }, [params.id])

  const handleAddToCart = () => {
    // TODO: Implement add to cart functionality
    console.log('Added to cart:', product?.name, 'Quantity:', quantity)
  }

  const handleAddToWishlist = () => {
    // TODO: Implement wishlist functionality
    console.log('Added to wishlist:', product?.name)
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-cream py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-saffron mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading product...</p>
          </div>
        </div>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-cream py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl font-bold text-gray-600 mb-4">Product not found</h1>
          <Link href="/products" className="btn-primary">
            Back to Products
          </Link>
        </div>
      </div>
    )
  }

  const images = [
    product.image,
    "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  ]

  return (
    <div className="min-h-screen bg-cream py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-saffron">Home</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-saffron">Products</Link>
            <span>/</span>
            <span className="text-forest font-medium">{product.name}</span>
          </nav>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {/* Main Image */}
            <div className="relative aspect-square overflow-hidden rounded-2xl bg-white shadow-lg">
              <Image
                src={images[selectedImage]}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>

            {/* Thumbnail Images */}
            <div className="flex space-x-4">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative w-20 h-20 rounded-lg overflow-hidden ${
                    selectedImage === index ? 'ring-2 ring-saffron' : ''
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Category and Rating */}
            <div className="flex items-center justify-between">
              <span className="bg-saffron text-white text-sm font-medium px-3 py-1 rounded-full">
                {product.category}
              </span>
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-saffron text-saffron" />
                ))}
                <span className="text-gray-600 text-sm ml-2">(4.9)</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-3xl lg:text-4xl font-playfair font-bold text-forest">
              {product.name}
            </h1>

            {/* Price */}
            <div className="flex items-center space-x-4">
              <span className="text-3xl font-bold text-forest">₹{product.price}</span>
              <span className="text-lg text-gray-500 line-through">₹{product.price + 50}</span>
              <span className="bg-green-100 text-green-800 text-sm font-medium px-2 py-1 rounded">
                Save ₹50
              </span>
            </div>

            {/* Description */}
            <p className="text-gray-600 text-lg leading-relaxed">
              {product.description}
            </p>

            {/* Product Details */}
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="font-semibold text-forest">Weight:</span>
                <span className="ml-2 text-gray-600">{product.weight}</span>
              </div>
              <div>
                <span className="font-semibold text-forest">Shelf Life:</span>
                <span className="ml-2 text-gray-600">{product.shelfLife}</span>
              </div>
              <div>
                <span className="font-semibold text-forest">Origin:</span>
                <span className="ml-2 text-gray-600">{product.origin}</span>
              </div>
            </div>

            {/* Ingredients */}
            <div>
              <h3 className="font-semibold text-forest mb-2">Ingredients:</h3>
              <div className="flex flex-wrap gap-2">
                {product.ingredients.map((ingredient, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full"
                  >
                    {ingredient}
                  </span>
                ))}
              </div>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <span className="font-semibold text-forest">Quantity:</span>
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 hover:bg-gray-100"
                  >
                    -
                  </button>
                  <span className="px-4 py-2 border-x border-gray-300">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex space-x-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleAddToCart}
                  className="btn-primary flex items-center space-x-2 flex-1 justify-center text-lg py-4"
                >
                  <ShoppingCart size={20} />
                  <span>Add to Cart</span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleAddToWishlist}
                  className="p-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                >
                  <Heart size={20} className="text-gray-600" />
                </motion.button>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-gray-200">
              <div className="flex items-center space-x-2">
                <Truck className="w-5 h-5 text-saffron" />
                <span className="text-sm text-gray-600">Free Shipping</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-saffron" />
                <span className="text-sm text-gray-600">Quality Guarantee</span>
              </div>
              <div className="flex items-center space-x-2">
                <RotateCcw className="w-5 h-5 text-saffron" />
                <span className="text-sm text-gray-600">Easy Returns</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailPage
