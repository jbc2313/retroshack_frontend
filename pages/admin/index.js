import React from 'react'
import axios from 'axios'


const index = () => {
  return (
    <div>index</div>
  )

export async function getServerSideProps(context) {

  //const adminData = axios.get("http://localhost:7777/")


  return {
    props: {
      userData: userData
    }

  }
}