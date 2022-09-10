import React from 'react'
import ProductForm from '../../components/ProductForm'
import styles from '../../styles/ProductNew.module.css'


// NEED TO ADD VALIDATION FOR ADMIN ONLY ON THIS PAGE

const New = () => {
  return (
    <div className={styles.formDiv}>
      <ProductForm formType={'New'}/>


    </div>
  )
}

export default New