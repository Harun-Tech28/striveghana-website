'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { Heart, CreditCard, CheckCircle, AlertCircle, Smartphone } from 'lucide-react'

interface DonationFormData {
  amount: number
  customAmount?: number
  frequency: 'once' | 'monthly'
  donorName: string
  email: string
  phone?: string
  message?: string
  donationType: 'general' | 'sponsor' | 'zakat' | 'sadaqat'
  paymentMethod: 'card' | 'mobilemoney'
}

const DonationForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [selectedAmount, setSelectedAmount] = useState<number | 'custom'>(25)
  
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors }
  } = useForm<DonationFormData>({
    defaultValues: {
      amount: 25,
      frequency: 'once',
      donationType: 'general',
      paymentMethod: 'card'
    }
  })

  const watchFrequency = watch('frequency')
  const watchDonationType = watch('donationType')
  const watchPaymentMethod = watch('paymentMethod')

  const predefinedAmounts = [25, 50, 100, 250]

  const onSubmit = async (data: DonationFormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Simulate payment processing - replace with actual Stripe integration
      await new Promise(resolve => setTimeout(resolve, 3000))
      
      console.log('Donation submitted:', data)
      setSubmitStatus('success')
      reset()
      setSelectedAmount(25)
    } catch (error) {
      console.error('Donation error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleAmountSelect = (amount: number | 'custom') => {
    setSelectedAmount(amount)
    if (typeof amount === 'number') {
      setValue('amount', amount)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-xl shadow-lg p-8"
    >
      <div className="text-center mb-8">
        <Heart className="w-12 h-12 text-accent-gold mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-primary-700 mb-2">Support Our Mission</h3>
        <p className="text-gray-600">Your donation helps us empower youth and support new converts</p>
      </div>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Donation Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Donation Type *
          </label>
          <div className="grid grid-cols-2 gap-3">
            {[
              { value: 'general', label: 'General Support' },
              { value: 'sponsor', label: 'Sponsor a Student' },
              { value: 'zakat', label: 'Zakat' },
              { value: 'sadaqat', label: 'Sadaqat' }
            ].map((type) => (
              <label key={type.value} className="flex items-center">
                <input
                  type="radio"
                  value={type.value}
                  {...register('donationType', { required: true })}
                  className="mr-2 text-primary-500 focus:ring-primary-500"
                />
                <span className="text-sm">{type.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Frequency */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Frequency *
          </label>
          <div className="flex space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                value="once"
                {...register('frequency', { required: true })}
                className="mr-2 text-primary-500 focus:ring-primary-500"
              />
              <span>One-time</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                value="monthly"
                {...register('frequency', { required: true })}
                className="mr-2 text-primary-500 focus:ring-primary-500"
              />
              <span>Monthly</span>
            </label>
          </div>
        </div>

        {/* Payment Method */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Payment Method *
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-colors ${
              watchPaymentMethod === 'card' ? 'border-primary-500 bg-primary-50' : 'border-gray-300 hover:border-primary-300'
            }`}>
              <input
                type="radio"
                value="card"
                {...register('paymentMethod', { required: true })}
                className="mr-3 text-primary-500 focus:ring-primary-500"
              />
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <CreditCard className="w-5 h-5 text-primary-500" />
                  <span className="font-semibold">Credit/Debit Card</span>
                </div>
                <p className="text-xs text-gray-600">Visa, Mastercard, Amex</p>
                <div className="flex space-x-2 mt-2">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" alt="Visa" className="h-6" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-6" />
                </div>
              </div>
            </label>
            <label className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-colors ${
              watchPaymentMethod === 'mobilemoney' ? 'border-primary-500 bg-primary-50' : 'border-gray-300 hover:border-primary-300'
            }`}>
              <input
                type="radio"
                value="mobilemoney"
                {...register('paymentMethod', { required: true })}
                className="mr-3 text-primary-500 focus:ring-primary-500"
              />
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <Smartphone className="w-5 h-5 text-primary-500" />
                  <span className="font-semibold">Mobile Money</span>
                </div>
                <p className="text-xs text-gray-600">MTN, Vodafone, AirtelTigo</p>
              </div>
            </label>
          </div>
        </div>

        {/* Amount Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Amount (USD) *
          </label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
            {predefinedAmounts.map((amount) => (
              <button
                key={amount}
                type="button"
                onClick={() => handleAmountSelect(amount)}
                className={`p-3 rounded-lg border-2 transition-colors ${
                  selectedAmount === amount
                    ? 'border-primary-500 bg-primary-50 text-primary-700'
                    : 'border-gray-300 hover:border-primary-300'
                }`}
              >
                ${amount}
                {watchFrequency === 'monthly' && <span className="text-xs block">/month</span>}
              </button>
            ))}
          </div>
          
          <div className="flex items-center space-x-2">
            <button
              type="button"
              onClick={() => handleAmountSelect('custom')}
              className={`px-4 py-2 rounded-lg border-2 transition-colors ${
                selectedAmount === 'custom'
                  ? 'border-primary-500 bg-primary-50 text-primary-700'
                  : 'border-gray-300 hover:border-primary-300'
              }`}
            >
              Custom Amount
            </button>
            {selectedAmount === 'custom' && (
              <input
                type="number"
                min="1"
                {...register('amount', { required: 'Amount is required', min: 1 })}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="Enter amount"
              />
            )}
          </div>
          {errors.amount && (
            <p className="mt-1 text-sm text-red-600">{errors.amount.message}</p>
          )}
        </div>

        {/* Donor Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="donorName" className="block text-sm font-medium text-gray-700 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="donorName"
              {...register('donorName', { required: 'Name is required' })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
              placeholder="Enter your full name"
            />
            {errors.donorName && (
              <p className="mt-1 text-sm text-red-600">{errors.donorName.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              {...register('email', { 
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address'
                }
              })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
            )}
          </div>
        </div>

        {/* Phone Number (Required for Mobile Money) */}
        {watchPaymentMethod === 'mobilemoney' && (
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              Mobile Money Number *
            </label>
            <input
              type="tel"
              id="phone"
              {...register('phone', { 
                required: watchPaymentMethod === 'mobilemoney' ? 'Phone number is required for Mobile Money' : false,
                pattern: {
                  value: /^[0-9+\s-()]+$/,
                  message: 'Invalid phone number'
                }
              })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
              placeholder="+233 24 892 4349"
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
            )}
            <p className="mt-1 text-xs text-gray-500">
              Enter your MTN, Vodafone, or AirtelTigo number
            </p>
          </div>
        )}

        {/* Optional Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Message (Optional)
          </label>
          <textarea
            id="message"
            rows={3}
            {...register('message')}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-vertical"
            placeholder="Leave a message of support..."
          />
        </div>

        {/* Special Notice for Sponsor */}
        {watchDonationType === 'sponsor' && (
          <div className="bg-accent-gold/10 border border-accent-gold/30 rounded-lg p-4">
            <p className="text-sm text-accent-gold-dark">
              <strong>Sponsor a Student:</strong> Your ${watchFrequency === 'monthly' ? 'monthly' : 'one-time'} donation will directly support a student's education and development in our programs.
            </p>
          </div>
        )}

        {/* Zakat/Sadaqat Notice */}
        {(watchDonationType === 'zakat' || watchDonationType === 'sadaqat') && (
          <div className="bg-primary-50 border border-primary-200 rounded-lg p-4">
            <p className="text-sm text-primary-700">
              <strong>Islamic Donation:</strong> Your {watchDonationType} will be used in accordance with Islamic principles for community service and support.
            </p>
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-accent-gold hover:bg-accent-gold-dark disabled:bg-gray-400 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              <span>Processing...</span>
            </>
          ) : (
            <>
              <CreditCard className="w-5 h-5" />
              <span>Donate Now</span>
            </>
          )}
        </button>

        {/* Status Messages */}
        {submitStatus === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center space-x-2 text-green-600 bg-green-50 p-4 rounded-lg"
          >
            <CheckCircle className="w-5 h-5" />
            <span>Thank you for your generous donation! You will receive a confirmation email shortly.</span>
          </motion.div>
        )}

        {submitStatus === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center space-x-2 text-red-600 bg-red-50 p-4 rounded-lg"
          >
            <AlertCircle className="w-5 h-5" />
            <span>Sorry, there was an error processing your donation. Please try again.</span>
          </motion.div>
        )}

        {/* Security Notice */}
        <div className="text-center text-sm text-gray-500">
          <p>🔒 Your payment information is secure and encrypted</p>
        </div>
      </form>
    </motion.div>
  )
}

export default DonationForm