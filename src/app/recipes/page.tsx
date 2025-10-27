'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Clock, Users, ChefHat, Search } from 'lucide-react'

interface Recipe {
  slug: string
  title: string
  excerpt: string
  image: string
  prepTime: string
  servings: string
  difficulty: string
  category: string
  date: string
}

const RecipesPage = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([])
  const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = ['all', 'Pickles', 'Spices', 'Traditional', 'Quick & Easy']

  // Sample recipes data
  const sampleRecipes: Recipe[] = [
    {
      slug: 'homemade-mango-pickle',
      title: 'Traditional Mango Pickle Recipe',
      excerpt: 'Learn to make authentic Karnataka-style mango pickle with this traditional recipe passed down through generations.',
      image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      prepTime: '2 hours',
      servings: '1 jar',
      difficulty: 'Medium',
      category: 'Pickles',
      date: '2024-01-15'
    },
    {
      slug: 'garam-masala-blend',
      title: 'Perfect Garam Masala Blend',
      excerpt: 'Master the art of making aromatic garam masala powder with the right proportions of spices.',
      image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      prepTime: '30 mins',
      servings: '100g',
      difficulty: 'Easy',
      category: 'Spices',
      date: '2024-01-10'
    },
    {
      slug: 'coconut-chutney-powder',
      title: 'South Indian Coconut Chutney Powder',
      excerpt: 'Make perfect coconut chutney powder for your idlis and dosas with this authentic recipe.',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      prepTime: '45 mins',
      servings: '200g',
      difficulty: 'Easy',
      category: 'Traditional',
      date: '2024-01-05'
    },
    {
      slug: 'quick-sambar-powder',
      title: 'Quick Sambar Powder Recipe',
      excerpt: 'Learn to make sambar powder at home with this quick and easy recipe that tastes just like store-bought.',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      prepTime: '20 mins',
      servings: '200g',
      difficulty: 'Easy',
      category: 'Quick & Easy',
      date: '2024-01-01'
    }
  ]

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setRecipes(sampleRecipes)
      setFilteredRecipes(sampleRecipes)
      setLoading(false)
    }, 1000)
  }, [])

  useEffect(() => {
    let filtered = recipes

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(recipe =>
        recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        recipe.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(recipe => recipe.category === selectedCategory)
    }

    setFilteredRecipes(filtered)
  }, [recipes, searchTerm, selectedCategory])

  if (loading) {
    return (
      <div className="min-h-screen bg-cream py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-saffron mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading recipes...</p>
          </div>
        </div>
      </div>
    )
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
            <h1 className="text-4xl lg:text-6xl font-playfair font-bold text-forest">
              Traditional Recipes
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover authentic Indian recipes and learn to make traditional foods with our step-by-step guides.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col lg:flex-row gap-4 items-center justify-between"
          >
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search recipes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-saffron focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-2">
              <ChefHat className="w-5 h-5 text-gray-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-saffron focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Recipes Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredRecipes.length > 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredRecipes.map((recipe, index) => (
                <motion.div
                  key={recipe.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative h-48">
                    <Image
                      src={recipe.image}
                      alt={recipe.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-saffron text-white text-xs font-medium px-2 py-1 rounded-full">
                        {recipe.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-playfair font-semibold text-forest mb-2 line-clamp-2">
                      {recipe.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {recipe.excerpt}
                    </p>

                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{recipe.prepTime}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>{recipe.servings}</span>
                      </div>
                      <span className={`px-2 py-1 rounded text-xs ${
                        recipe.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
                        recipe.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {recipe.difficulty}
                      </span>
                    </div>

                    <Link href={`/recipes/${recipe.slug}`}>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full bg-saffron hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
                      >
                        Read Recipe
                      </motion.button>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center py-12"
            >
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ChefHat className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No recipes found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  )
}

export default RecipesPage
