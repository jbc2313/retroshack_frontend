import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Carousel from '../components/Carousle'
import axios from 'axios'

export default function Home({ products }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>RetroShack</title>
        <meta name="description" content="Here for all your Retro Computing Needs!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Hello Retro Computing Fans!</h1>
        <Carousel products={products.products} />
      </main>

    </div>
  )
}

export async function getServerSideProps(context) {
  const { data } = await axios.get('http://localhost:7777/products')
  const products = await data


  return {
    props: {
      products: products
    }
  }
}


