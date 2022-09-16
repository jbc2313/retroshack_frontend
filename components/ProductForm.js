import React, { useState, useEffect } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button'; 
import { Divider } from 'primereact/divider';
import { Toast } from 'primereact/toast'
import { classNames } from 'primereact/utils';
import { Dropdown } from 'primereact/dropdown';
import styles from '../styles/ProductNew.module.css';
import axios from 'axios';


const ProductForm = ({ formType, products }) => {
  
  let defaultValues = {
    sku: '',
    name: '',
    description: '',
    image: '',
    price: '',
    category: '',
    quantity: '',
    stockStatus: '',
    rating: ''

  }
  const [formData, setFormData] = useState(defaultValues)
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [dropdownProduct, setDropdownProduct] = useState({})

  const handleFormChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handleChange = (e) => {
    //console.log(e.value)
    if(e.target.value === undefined) {
      setSelectedProduct('reset');
      setDropdownProduct(undefined)
      return
    }
    const xProduct = products.find((prod) => prod.id === e.value)
   // console.log(xProduct)
    setSelectedProduct(xProduct);
    setDropdownProduct(e.value)
  }

  useEffect(() => {
    if(selectedProduct === 'reset'){
      setFormData(defaultValues)
      return
    }
    if(selectedProduct !== null) {
      console.log('form change EFFECT')
      setFormData(selectedProduct)
    }
      //console.log('this is the default values now', defaultValues)

  }, [selectedProduct])

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if(formType === 'New') {
      axios.post('http://localhost:7777/products/new', formData)
      .then(resp => console.log(resp))
    }

    if(formType === 'Update') {
      axios.patch('http://localhost:7777/products/:id', formData )
      .then(res => console.log(res))
    }
    
  }

  
  return (
    <div className={styles.formDiv}>
      <div className={styles.productSelector}>
        {formType === 'Update' && <>
          <h3>Select Product to Update</h3>
          <Dropdown showClear value={dropdownProduct} options={products} onChange={handleChange} optionLabel='name' optionValue='id' placeholder='Select a product' />
        </>}
      </div>
      <form className={styles.formActual} onSubmit={handleSubmit}>
        <span className='p-float-label'>
          <InputText id='sku' name='sku'
            required
            value={formData?.sku}
            onChange={handleFormChange}
          />
          <label htmlFor='sku'>SKU</label>
        </span>
        <span className='p-float-label'>
          <InputText name='name'
            required
            value={formData?.name}
            onChange={handleFormChange}
          />
          <label htmlFor='name'>Name</label>
        </span>
        <span className='p-float-label'>
          <InputText name='description'
            required
            value={formData?.description}
            onChange={handleFormChange}
          />
          <label htmlFor='description'>Description</label>
        </span>
        <span className='p-float-label'>
          <InputText name='image'
            required
            value={formData?.image}
            onChange={handleFormChange}
          />
          <label htmlFor='image'>Image URL</label>
        </span>
        <span className='p-float-label'>
          <InputText name='price'
            required
            value={formData?.price}
            onChange={handleFormChange}
          />
          <label htmlFor='price'>Price</label>
        </span>
        <span className='p-float-label'>
          <InputText name='category'
            required
            value={formData?.category}
            onChange={handleFormChange}
          />
          <label htmlFor='category'>Category</label>
        </span>
        <span className='p-float-label'>
          <InputText name='quantity'
            required
            value={formData?.quantity}
            onChange={handleFormChange}
          />
          <label htmlFor='quantity'>Quantity</label>
        </span>
        <span className='p-float-label'>
          <InputText name='stockStatus'
            required
            value={formData?.stockStatus}
            onChange={handleFormChange}
          />
          <label htmlFor='stockStatus'>Stock Status</label>
        </span>
        <span className='p-float-label'>
          <InputText name='rating'
            required
            value={formData?.rating}
            onChange={handleFormChange}
          />
          <label htmlFor='rating'>Rating</label>
        </span>
        <Button type='submit' className='mt-2'>Submit</Button>

      </form>

    </div>
  )
}

export default ProductForm


