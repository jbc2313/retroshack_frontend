import React from 'react'
import Head from 'next/head'
import axios from 'axios'
import ProductViewHeader from '../../components/ProductViewHeader'
import ProductViewTab from '../../components/ProductViewTab'


const ShowProduct = ({ product }) => {

  console.log(product)

  return (
    <div>
      <Head>
        <title>Product# </title>
      </Head>
      <div>
        <div className='headerDiv'>
          <ProductViewHeader product={product}/>
        </div>
        <div className='tabsDiv'>
          <p>
            The Tabs div is here
          </p>
          <ProductViewTab />
        </div>

      </div>

    </div>
  )
}

export default ShowProduct


export async function getServerSideProps(context) {
  const { id } = context.params
  const { data } = await axios.get(`http://localhost:7777/products/${id}`)
  const product = await data


  return {
    props: {
      product: product.product
    }
  }
}