import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { CartProvider } from '@/contexts/CartContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bhoomi Foods - Authentic Taste. Pure Tradition.',
  description: 'Discover authentic Indian traditional foods, spices, and pickles made with pure ingredients and traditional methods.',
  keywords: 'Indian food, traditional spices, homemade pickles, authentic taste, pure tradition',
  openGraph: {
    title: 'Bhoomi Foods - Authentic Taste. Pure Tradition.',
    description: 'Discover authentic Indian traditional foods, spices, and pickles made with pure ingredients and traditional methods.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}
