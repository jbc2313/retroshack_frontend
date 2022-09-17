import React from 'react'
import { useProductStore } from '../util/ProductStore'
import KeyComponent from './KeyComponent';


const SearchDropdown = ({ searchValue }) => {

  const { products } = useProductStore();
  const prodList = products.map(prod => {
    return {name: prod.name, id: prod.id}
  })
 
  const filterList = prodList.filter(prod => {
    if(prod.name.toLowerCase().includes(searchValue.toLowerCase())){
      return prod
    }
  })
  

  return (
      <ul style={{position: 'inherit', top: '0', left: '0',display: 'flex', flexDirection: 'column', alignItems: 'start', alignContent: 'start', listStyle: 'none'}}>
      {filterList.map((prod, index) => <KeyComponent prod={prod} key={index} />)}
      </ul>
  )
}

export default SearchDropdown