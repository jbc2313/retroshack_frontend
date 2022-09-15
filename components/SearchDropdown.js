import React from 'react'
import { useProductStore } from '../util/ProductStore'

const SearchDropdown = ({ searchValue }) => {

  const { products } = useProductStore();
  const prodList = products.products.map(prod => {
    return prod.name
  })
  const prodIdList = products.products.map(prod => {
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
      {/* {products.products.filter(prod => {
        if(searchValue === ''){
          console.log('I am not typed yet!!')
          return <li>{prod.name}</li>
        } else if (prod.name.toLowerCase().includes(searchValue.toLowerCase())) {
          console.log('WHAT IS HAPPENING')
          return <li>{prod.name}</li>
        }
        
      })} */}
      {filterList.map(prod => <li>{prod}</li>)}
      </ul>
    </div>
  )
}

export default SearchDropdown