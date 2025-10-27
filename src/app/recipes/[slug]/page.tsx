'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Clock, Users, ChefHat, ArrowLeft, Share2, Heart } from 'lucide-react'

interface Recipe {
  slug: string
  title: string
  excerpt: string
  image: string
  prepTime: string
  cookTime: string
  servings: string
  difficulty: string
  category: string
  date: string
  ingredients: string[]
  content: string
}

const RecipeDetailPage = () => {
  const params = useParams()
  const [recipe, setRecipe] = useState<Recipe | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        // For now, we'll use static data
        // In a real app, you'd fetch from an API or read from markdown files
        const sampleRecipe: Recipe = {
          slug: 'homemade-mango-pickle',
          title: 'Traditional Mango Pickle Recipe',
          excerpt: 'Learn to make authentic Karnataka-style mango pickle with this traditional recipe passed down through generations.',
          image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          prepTime: '2 hours',
          cookTime: '30 minutes',
          servings: '1 large jar',
          difficulty: 'Medium',
          category: 'Pickles',
          date: '2024-01-15',
          ingredients: [
            '2 kg raw mangoes (small, firm)',
            '1/2 cup salt',
            '1/2 cup red chili powder',
            '1/4 cup turmeric powder',
            '1/4 cup mustard seeds',
            '2 tbsp fenugreek seeds',
            '1/4 cup asafoetida',
            '1 cup mustard oil',
            '2 tbsp jaggery (optional)'
          ],
          content: `
# Traditional Mango Pickle Recipe

This authentic Karnataka-style mango pickle recipe has been passed down through generations in my family. The tangy, spicy flavors will transport you straight to South India!

## Instructions

### Step 1: Prepare the Mangoes
1. Wash the raw mangoes thoroughly and pat them dry
2. Cut them into small pieces (about 1-inch cubes)
3. Remove the seeds but keep the skin on for texture

### Step 2: Salt the Mangoes
1. Place the mango pieces in a large bowl
2. Add salt and mix well
3. Let it sit for 2-3 hours to draw out excess moisture
4. Drain the water that accumulates

### Step 3: Prepare the Spice Mix
1. Dry roast mustard seeds and fenugreek seeds separately until fragrant
2. Grind them to a coarse powder
3. Mix with red chili powder, turmeric powder, and asafoetida

### Step 4: Combine Everything
1. Add the spice mix to the salted mangoes
2. Mix well to ensure all pieces are coated
3. Add jaggery if you prefer a slightly sweet pickle

### Step 5: Add Oil
1. Heat mustard oil until it starts smoking
2. Let it cool completely
3. Pour the cooled oil over the mango mixture
4. Mix well

### Step 6: Store
1. Transfer to clean, dry glass jars
2. Store in a cool, dry place
3. The pickle will be ready to eat in 3-4 days
4. It can be stored for up to a year

## Tips for Success

- Use only firm, raw mangoes for the best texture
- Ensure all utensils are completely dry to prevent spoilage
- The oil should completely cover the pickle
- Store in a cool, dark place for best results

## Serving Suggestions

This pickle pairs perfectly with:
- Steamed rice
- Curd rice
- Chapati or roti
- As a side with any Indian meal

Enjoy your homemade traditional mango pickle!
          `
        }
        
        setRecipe(sampleRecipe)
      } catch (error) {
        console.error('Error fetching recipe:', error)
      } finally {
        setLoading(false)
      }
    }

    if (params.slug) {
      fetchRecipe()
    }
  }, [params.slug])

  if (loading) {
    return (
      <div className="min-h-screen bg-cream py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-saffron mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading recipe...</p>
          </div>
        </div>
      </div>
    )
  }

  if (!recipe) {
    return (
      <div className="min-h-screen bg-cream py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl font-bold text-gray-600 mb-4">Recipe not found</h1>
          <Link href="/recipes" className="btn-primary">
            Back to Recipes
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-between"
          >
            <Link href="/recipes" className="flex items-center space-x-2 text-gray-600 hover:text-saffron">
              <ArrowLeft size={20} />
              <span>Back to Recipes</span>
            </Link>
            
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-600 hover:text-saffron transition-colors">
                <Share2 size={20} />
              </button>
              <button className="p-2 text-gray-600 hover:text-red-500 transition-colors">
                <Heart size={20} />
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Recipe Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-2">
                <span className="bg-saffron text-white text-sm font-medium px-3 py-1 rounded-full">
                  {recipe.category}
                </span>
                <span className={`px-2 py-1 rounded text-xs ${
                  recipe.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
                  recipe.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {recipe.difficulty}
                </span>
              </div>

              <h1 className="text-3xl lg:text-4xl font-playfair font-bold text-forest">
                {recipe.title}
              </h1>

              <p className="text-lg text-gray-600">
                {recipe.excerpt}
              </p>

              <div className="relative h-96 rounded-2xl overflow-hidden">
                <Image
                  src={recipe.image}
                  alt={recipe.title}
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            {/* Recipe Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="prose prose-lg max-w-none"
            >
              <div dangerouslySetInnerHTML={{ __html: recipe.content.replace(/\n/g, '<br>') }} />
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Recipe Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <h3 className="text-xl font-playfair font-semibold text-forest mb-4">
                Recipe Info
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-saffron" />
                  <div>
                    <p className="font-medium text-forest">Prep Time</p>
                    <p className="text-gray-600">{recipe.prepTime}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <ChefHat className="w-5 h-5 text-saffron" />
                  <div>
                    <p className="font-medium text-forest">Cook Time</p>
                    <p className="text-gray-600">{recipe.cookTime}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-saffron" />
                  <div>
                    <p className="font-medium text-forest">Servings</p>
                    <p className="text-gray-600">{recipe.servings}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Ingredients */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <h3 className="text-xl font-playfair font-semibold text-forest mb-4">
                Ingredients
              </h3>
              
              <ul className="space-y-2">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-saffron rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-600">{ingredient}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Related Products */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <h3 className="text-xl font-playfair font-semibold text-forest mb-4">
                Related Products
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gray-200 rounded-lg"></div>
                  <div>
                    <p className="font-medium text-forest">Mango Pickle</p>
                    <p className="text-sm text-gray-600">₹199</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gray-200 rounded-lg"></div>
                  <div>
                    <p className="font-medium text-forest">Red Chili Powder</p>
                    <p className="text-sm text-gray-600">₹89</p>
                  </div>
                </div>
              </div>
              
              <Link href="/products" className="btn-primary w-full text-center block mt-4">
                Shop Ingredients
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecipeDetailPage
