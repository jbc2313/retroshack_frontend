import { useState } from 'react'
import '../styles/globals.css'
import '../styles/ProductDataView.css'
import Layout from '../components/Layout'
import UserContext from '../util/UserContext'

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState(undefined)

  //user object needs to be saved in a cookie or localstorage inside a jwt or cookie 


  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserContext.Provider>
    )
}

export default MyApp
