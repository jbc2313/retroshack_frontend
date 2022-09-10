import React from 'react'
import ProductForm from '../../components/ProductForm'
import styles from '../../styles/ProductNew.module.css'


// two ways i can do this.
//allow user to select product from dropdown list
// or make the update route based off the id of the product.


const Update = () => {
  return (
    <div className={styles.formDiv}>
      <ProductForm formType={'Update'}/>


  </div>
  )
}

export default Update