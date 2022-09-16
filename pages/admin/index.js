import React from 'react'
import axios from 'axios'
import Link from 'next/link'
import { unstable_getServerSession } from "next-auth/next"
import { authOptions } from '../api/auth/[...nextauth]'
import { Button } from 'primereact/button'

const Index = ({ isAdmin, userInfo }) => {


  console.log(isAdmin)
  console.log(userInfo, 'userinfo')


  const deleteItem = () => {
    axios.delete(process.env.API_URL + `/products/${product.id}`)
    .then(res => {
      console.log(res.data)
    })
  }

  return (
    <div style={{height: '100vh'}}>
      {isAdmin && <>
      <h1 style={{textAlign: 'center'}}>WELCOME ADMIN</h1>
      <div style={{ display: 'flex', justifyContent: 'center'}}>
        <Link href='/products/new'>
          <Button>ADD ITEM</Button>
        </Link>
        <Link href='/products/update'>
          <Button>UPDATE ITEM</Button>
        </Link>
      </div>
      
      
      
      
      
      </>}
    </div>


  )
}


export default Index


export async function getServerSideProps(context) {

  let isAdmin = false
  const session = await unstable_getServerSession(context.req, context.res, authOptions)
  if (session) {
    isAdmin = true
    const userData = {
      email: session.user.email
    }
    const { data } = await axios.post(process.env.API_URL +'/find/user', userData)
    const userInfo = await data
    if(userInfo.isAdmin === false) {
      return {
        props: {
          isAdmin: isAdmin
        }
      }
    } else {  
      return {
        props: {
          isAdmin: isAdmin,
          userInfo: userInfo
        }
      }
    }


  } else {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }

}