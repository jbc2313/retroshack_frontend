import React from 'react'
import Link from 'next/link'



const KeyComponent = ({ prod, products }) => {

  const linkprod = products.filter(product => product.name === prod)
  const linkId = linkprod.id


  return (
    <li><Link href={`/products/${linkId}`} >{prod}</Link></li>
  )
}

export default KeyComponent