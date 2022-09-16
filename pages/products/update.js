import React from 'react'
import ProductForm from '../../components/ProductForm'
import styles from '../../styles/ProductNew.module.css'
import axios from 'axios'

// two ways i can do this.
//allow user to select product from dropdown list
// or make the update route based off the id of the product.


const Update = ({ products }) => {
  return (
    <div className={styles.formDiv}>
      <ProductForm formType={'Update'} products={products}/>

    </div>
  )
}

export default Update;


export async function getServerSideProps(context) {
  const { data } = await axios.get(process.env.API_URL + '/products')
  const products = await data


  return {
    props: {
      products: products
    }
  }
}