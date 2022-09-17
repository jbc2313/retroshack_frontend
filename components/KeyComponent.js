import React from 'react'
import Link from 'next/link'



const KeyComponent = ({ prod }) => {

  console.log('product from dropdown list => ', prod)

  return (
    <li >{prod.name}</li>
  )
}

export default KeyComponent