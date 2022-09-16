import React from 'react'
import CartTable from '../components/CartTable'
import styles from '../styles/Cart.module.css'

const Cart = () => {
  return (
    <div className={styles.mainDiv}>
      <h1>Your Cart!</h1>
      <CartTable />
    </div>
  )
}

export default Cart