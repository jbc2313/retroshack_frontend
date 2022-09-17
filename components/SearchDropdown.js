import React from 'react'
import { useProductStore } from '../util/ProductStore'
import KeyComponent from './KeyComponent';

const SearchDropdown = ({ searchValue }) => {

  const { products } = useProductStore();
  const prodList = products.map(prod => {
    return prod.name
  })
  const prodIdList = products.map(prod => {
    return {
      id: prod.id,
      name: prod.name
    }
  })
  console.log(prodIdList)
  const filterList = prodList.filter(prod => {
    if(prod.toLowerCase().includes(searchValue.toLowerCase())){
      return prod
    }
  })
  

  return (
    <div>
      <ul style={{display: 'flex', flexDirection: 'column'}}>
      {filterList.map((prod, index) => <KeyComponent prod={prod} key={index}/>)}
      </ul>
    </div>
  )
}

export default SearchDropdown