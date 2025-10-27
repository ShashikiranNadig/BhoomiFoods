// Razorpay configuration and payment handling

export interface RazorpayOptions {
  key: string
  amount: number
  currency: string
  name: string
  description: string
  order_id: string
  handler: (response: any) => void
  prefill?: {
    name?: string
    email?: string
    contact?: string
  }
  theme?: {
    color: string
  }
  modal?: {
    ondismiss: () => void
  }
}

declare global {
  interface Window {
    Razorpay: any
  }
}

export const loadRazorpay = (): Promise<boolean> => {
  return new Promise((resolve) => {
    if (typeof window !== 'undefined' && window.Razorpay) {
      resolve(true)
      return
    }

    const script = document.createElement('script')
    script.src = 'https://checkout.razorpay.com/v1/checkout.js'
    script.onload = () => resolve(true)
    script.onerror = () => resolve(false)
    document.body.appendChild(script)
  })
}

export const createRazorpayOrder = async (amount: number, currency: string = 'INR') => {
  try {
    const response = await fetch('/api/razorpay/create-order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount: amount * 100, // Convert to paise
        currency,
      }),
    })

    if (!response.ok) {
      throw new Error('Failed to create order')
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error creating Razorpay order:', error)
    throw error
  }
}

export const initiatePayment = async (
  amount: number,
  orderId: string,
  customerDetails?: {
    name?: string
    email?: string
    contact?: string
  }
) => {
  try {
    const isLoaded = await loadRazorpay()
    if (!isLoaded) {
      throw new Error('Razorpay SDK failed to load')
    }

    const options: RazorpayOptions = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || 'rzp_test_1234567890', // Test key
      amount: amount * 100, // Convert to paise
      currency: 'INR',
      name: 'Bhoomi Foods',
      description: 'Payment for your order',
      order_id: orderId,
      handler: (response) => {
        console.log('Payment successful:', response)
        // Handle successful payment
        window.location.href = `/order-success?payment_id=${response.razorpay_payment_id}&order_id=${response.razorpay_order_id}`
      },
      prefill: customerDetails,
      theme: {
        color: '#d97706', // Saffron color
      },
      modal: {
        ondismiss: () => {
          console.log('Payment modal dismissed')
        },
      },
    }

    const razorpay = new window.Razorpay(options)
    razorpay.open()
  } catch (error) {
    console.error('Error initiating payment:', error)
    throw error
  }
}
