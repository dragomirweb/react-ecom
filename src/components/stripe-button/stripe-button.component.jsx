import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100
  const key = 'pk_test_3j0fzs0LppLqfczHXNqieduh00UDXhPcUq'

  // image="https://svgshare.com/i/CUz.scg"
  const onToken = (token) => {
    console.log(token)
    alert('Payment Successful')
  }

  return (
    <StripeCheckout
      label="Pay Now"
      name="React Ecom Ltd."
      billingAddress
      shippingAddress
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      image="https://svgshare.com/i/CUz.scg"
      token={onToken}
      stripeKey={key}
    />
  )
}

export default StripeCheckoutButton