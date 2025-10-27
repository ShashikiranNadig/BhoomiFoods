# Bhoomi Foods - Traditional Indian Food E-commerce Website

A fully responsive, modern Indian traditional food brand website built with Next.js 14, featuring complete e-commerce functionality and content management via local files.

## 🌟 Features

### Core E-commerce Features
- **Product Catalog**: Complete product listing with categories, search, and filtering
- **Shopping Cart**: Add/remove items with localStorage persistence
- **Payment Integration**: Razorpay test mode for secure payments
- **Order Management**: Order confirmation and tracking

### Content Management
- **Product Data**: JSON-based product management
- **Recipe Blog**: Markdown-based recipe content
- **Contact Forms**: Formspree integration for form handling
- **Newsletter**: Email subscription functionality

### Design & UX
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern UI**: Clean, traditional Indian-inspired design
- **Animations**: Smooth Framer Motion animations throughout
- **Accessibility**: WCAG compliant with proper semantic HTML

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Payments**: Razorpay (Test Mode)
- **Forms**: Formspree
- **Icons**: Lucide React
- **Images**: Next.js Image Optimization
- **Deployment**: Vercel (Free Plan)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd bhoomi-foods
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_RAZORPAY_KEY_ID=your_razorpay_key_id
   RAZORPAY_KEY_SECRET=your_razorpay_key_secret
   NEXT_PUBLIC_FORMSPREE_ENDPOINT=your_formspree_endpoint
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes
│   ├── products/          # Product pages
│   ├── recipes/           # Recipe pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   └── order-success/     # Order success page
├── components/            # Reusable React components
├── contexts/              # React Context providers
├── data/                  # JSON data files
├── content/               # Markdown content
├── lib/                   # Utility functions
└── styles/                # Global styles
```

## 🎨 Customization

### Brand Colors
The website uses a custom color palette defined in `tailwind.config.js`:
- **Saffron**: #d97706 (Primary)
- **Cream**: #faf3e0 (Background)
- **Forest**: #166534 (Accent)

### Fonts
- **Headings**: Playfair Display (Google Fonts)
- **Body**: Poppins (Google Fonts)

### Adding Products
1. Edit `src/data/products.json`
2. Add product images to `public/images/`
3. Update product references in components

### Adding Recipes
1. Create markdown files in `src/content/recipes/`
2. Use the frontmatter format for metadata
3. Images should be placed in `public/images/`

## 💳 Payment Setup

### Razorpay Integration
1. Create a Razorpay account
2. Get your test API keys
3. Add them to your environment variables
4. The payment flow is already configured for test mode

### Test Cards
Use these test card numbers for testing:
- **Success**: 4111 1111 1111 1111
- **Failure**: 4000 0000 0000 0002
- **CVV**: Any 3 digits
- **Expiry**: Any future date

## 📧 Form Integration

### Formspree Setup
1. Create a Formspree account
2. Create a new form
3. Get your form endpoint
4. Add it to your environment variables

### Contact Form
The contact form is configured to work with Formspree out of the box.

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Manual Deployment
1. Build the project: `npm run build`
2. Start the production server: `npm start`
3. Deploy to your preferred hosting platform

## 🔧 Configuration

### Environment Variables
```env
# Razorpay (Required for payments)
NEXT_PUBLIC_RAZORPAY_KEY_ID=rzp_test_...
RAZORPAY_KEY_SECRET=...

# Formspree (Required for forms)
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/...

# Optional: Analytics
NEXT_PUBLIC_GA_ID=G-...
```

### SEO Configuration
- Update metadata in `src/app/layout.tsx`
- Add Open Graph images to `public/`
- Configure sitemap and robots.txt

## 📱 Mobile Optimization

The website is fully responsive and optimized for:
- Mobile phones (320px+)
- Tablets (768px+)
- Desktops (1024px+)
- Large screens (1280px+)

## 🎯 Performance

- **Lighthouse Score**: 90+ for all metrics
- **Image Optimization**: Next.js Image component
- **Code Splitting**: Automatic with Next.js
- **Caching**: Optimized for production

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🆘 Support

For support and questions:
- Email: support@bhoomifoods.com
- Phone: +91 98765 43210
- Create an issue in the repository

## 🙏 Acknowledgments

- Images from Unsplash and Pexels
- Icons from Lucide React
- Fonts from Google Fonts
- Inspiration from traditional Indian food websites

---

**Made with ❤️ in India for authentic Indian food lovers**
