import { useState } from 'react'
import '../styles/globals.css'
import '../styles/ProductDataView.css'
import Layout from '../components/Layout'
import { SessionProvider } from 'next-auth/react'

function MyApp({ 
    Component,
    pageProps: { session, ...pageProps }, 
  }) {


  return (
    <SessionProvider session={session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
    )
}

export default MyApp
