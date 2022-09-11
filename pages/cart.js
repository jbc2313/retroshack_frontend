import React from 'react'
import CartTable from '../components/CartTable'

const Cart = () => {
  return (
    <div style={{margin: '25px'}}>
      <h1>Your Cart!</h1>
      <CartTable />
    </div>
  )
}

export default Cart