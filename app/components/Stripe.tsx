import * as React from 'react'
import { API_KEY } from 'react-native-dotenv'
import StripeCheckout from 'react-stripe-checkout'
import { View, Text } from 'react-native'
interface Props {
  price: number
}

const Stripe: React.FC<Props> = ({ price }) => {
  const priceForStripe = price * 100
  const publisherKey = API_KEY
  return (
    <StripeCheckout
      label="Pay Now"
      name="Cooie Bookie Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Tour total is $${price}`}
      amount={priceForStripe}
      token={(token) => alert('success')}
      stripeKey={publisherKey}
    />
  )
}
export default Stripe
