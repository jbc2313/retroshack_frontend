import React, { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useCartStore } from '../util/CartStore';
import { Toolbar } from 'primereact/toolbar';
import { Button } from 'primereact/button';
import Link from 'next/link';



const CheckoutTable = () => {
  
  const { products } = useCartStore()

  const formatCurrency = (value) => {
    return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
  }
  
  const priceColumnFormat = (Data) => {
    return formatCurrency(Data.price);
  } 


  const leftToolbarLayout = () => {
    return (
      <>
        <Button><Link href='/cart'>Edit Cart</Link></Button>
      
      
      </>
    )
  }


  const rightToolbarLayout = () => {
    return (
      <>
        <p style={{marginRight: '10px'}}>Continue to payment method?</p>
        <Link href='/checkout/payment'>
          <Button label='Accept' icon='pi pi-credit-card' className='p-button-info'/>
        </Link>
      </>
    )
  }
  
  return (
    <>
    <DataTable value={products} responsiveLayout='scroll'>
      <Column field='name' header='Name'></Column>
      <Column field='category' header='Category'></Column>
      <Column field='price' body={priceColumnFormat} header='Price'></Column>
      <Column field='amountInCart' header='# in Cart'></Column>
    </DataTable>
    <Toolbar left={leftToolbarLayout}  right={rightToolbarLayout} ></Toolbar>
    </>



  )
}

export default CheckoutTable