import React from 'react'
import axios from 'axios'
import ProductsDataView from '../../components/ProductsDataView'


// this is the index page for all products

const index = ({ products }) => {
  

  return (
    <div>
      <h2>All Products</h2>
      <ProductsDataView products={products} />
    </div>
  )
}

export default index

export async function getServerSideProps(context) {
  const { data } = await axios.get('http://localhost:7777/products')
  const products = await data


  return {
    props: {
      products: products
    }
  }
}