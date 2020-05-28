import * as React from 'react'
import StripeCheckout from 'react-stripe-checkout'

interface Props {
  price: number
}

const Stripe: React.FC<Props> = ({ price }) => {
  const priceForStripe = price * 100
  const publisherKey = 'ssaasdsa'
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
