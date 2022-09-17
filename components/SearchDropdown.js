import React from 'react'
import { useProductStore } from '../util/ProductStore'

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

  listItems = filterList.map((prod, index) => 
    <li key={index}>
      {prod}
    </li>
  );

  return (
    <div>
      <ul style={{display: 'flex', flexDirection: 'column'}}>
        {listItems}
      </ul>
    </div>
  )
}

export default SearchDropdown