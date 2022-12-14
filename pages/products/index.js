import React from 'react'
import axios from 'axios'
import ProductsDataView from '../../components/ProductsDataView'
import styles from '../../styles/ProductsIndex.module.css'

// this is the index page for all products

const Index = ({ products }) => {
  

  return (
    <div className={styles.pageDiv}>
      <h2>All Products</h2>
      <ProductsDataView products={products} />
    </div>
  )
}

export default Index

export async function getServerSideProps(context) {
  const { data } = await axios.get(process.env.API_URL + '/products')
  const products = await data


  return {
    props: {
      products: products
    }
  }
}