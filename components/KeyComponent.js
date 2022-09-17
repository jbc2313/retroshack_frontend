import React from 'react'
import Link from 'next/link'



const KeyComponent = ({ prod }) => {



  return (
    <li><Link href={`/products/${prod.id}`} >{prod.name}</Link></li>
  )
}

export default KeyComponent