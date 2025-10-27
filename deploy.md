# Deployment Guide for Bhoomi Foods

## Quick Deploy to Vercel

### Option 1: Deploy from GitHub (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Login with GitHub
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js

3. **Configure Environment Variables**
   In Vercel dashboard, go to Settings > Environment Variables:
   ```
   NEXT_PUBLIC_RAZORPAY_KEY_ID=rzp_test_your_key_here
   RAZORPAY_KEY_SECRET=your_secret_here
   NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/your_form_id
   ```

4. **Deploy**
   - Click "Deploy"
   - Wait for deployment to complete
   - Your site will be live at `https://your-project.vercel.app`

### Option 2: Deploy with Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **Set Environment Variables**
   ```bash
   vercel env add NEXT_PUBLIC_RAZORPAY_KEY_ID
   vercel env add RAZORPAY_KEY_SECRET
   vercel env add NEXT_PUBLIC_FORMSPREE_ENDPOINT
   ```

## Pre-Deployment Checklist

### 1. Environment Variables
- [ ] Razorpay test keys configured
- [ ] Formspree endpoint configured
- [ ] All sensitive data in environment variables

### 2. Content Updates
- [ ] Update company information in Footer
- [ ] Add real product images to `/public/images/`
- [ ] Update contact information
- [ ] Add real social media links

### 3. SEO Optimization
- [ ] Update meta descriptions
- [ ] Add Open Graph images
- [ ] Configure sitemap.xml
- [ ] Add robots.txt

### 4. Testing
- [ ] Test all pages load correctly
- [ ] Test cart functionality
- [ ] Test contact form
- [ ] Test payment flow (test mode)
- [ ] Test mobile responsiveness

## Post-Deployment

### 1. Domain Setup (Optional)
- Purchase a custom domain
- Add domain in Vercel dashboard
- Configure DNS settings

### 2. Analytics Setup
- Add Google Analytics ID
- Set up conversion tracking
- Monitor site performance

### 3. Content Management
- Update products in `/src/data/products.json`
- Add new recipes in `/src/content/recipes/`
- Update images in `/public/images/`

## Troubleshooting

### Common Issues

1. **Build Errors**
   - Check for TypeScript errors
   - Ensure all imports are correct
   - Verify environment variables

2. **Payment Issues**
   - Verify Razorpay keys are correct
   - Check test mode configuration
   - Test with provided test cards

3. **Form Issues**
   - Verify Formspree endpoint
   - Check form field names
   - Test form submission

### Support
- Check Vercel documentation
- Review Next.js deployment guide
- Contact support if needed

## Production Checklist

Before going live with real payments:

- [ ] Replace test Razorpay keys with live keys
- [ ] Update all placeholder content
- [ ] Add real product images
- [ ] Test with real payment methods
- [ ] Set up proper error handling
- [ ] Configure email notifications
- [ ] Set up order management system
- [ ] Add proper logging and monitoring

---

**Your Bhoomi Foods website is now ready to serve authentic Indian food to customers worldwide! 🎉**
