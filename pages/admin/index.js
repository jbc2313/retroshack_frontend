import React from 'react'
import axios from 'axios'
import { unstable_getServerSession } from "next-auth/next"
import { authOptions } from '../api/auth/[...nextauth]'
import { Button } from 'primereact/button'

const Index = ({ isAdmin, userInfo }) => {


  console.log(isAdmin)
  console.log(userInfo, 'userinfo')

  return (
    <div style={{height: '100vh'}}>
      {isAdmin && <>
      <h1 style={{textAlign: 'center'}}>WELCOME ADMIN</h1>
      <div style={{ display: 'flex', justifyContent: 'center'}}>
        <Button>ADD ITEM</Button>
        <Button>UPDATE ITEM</Button>
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
    const { data } = await axios.post('http://localhost:7777/find/user', userData)
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