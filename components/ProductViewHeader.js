import React from 'react'
import styles from '../styles/ProductViewHeader.module.css'
import { Button } from 'primereact/button'
import { useCartStore } from '../util/CartStore'

const ProductViewHeader = ({ product }) => {

  const { addProduct } = useCartStore()

  const addToCart = () => {
    addProduct(product)
  }

  return (
    <div className={styles.HeaderDiv}>
      <div className={styles.imgDiv}>
        <img className={styles.img} src={product.image} alt={product.name} />
      </div>
      <div className={styles.TitleDiv}>
        <h3>{product.name}</h3>
      </div>
      <div className={styles.ActionDiv}>
        <h2>$ {product.price}</h2>
        <span className={`product-badge status-${product?.stockStatus?.toLowerCase()}`}>{product.stockStatus}</span>
        <br/><br/>
        <Button onClick={addToCart} className='p-button-raised'>Add To Cart</Button>
      </div>

    </div>
  )
}

export default ProductViewHeader