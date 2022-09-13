import React from 'react'
import Link from 'next/link'
import { Card } from 'primereact/card'
import { Button } from 'primereact/button'
import styles from '../styles/ConfirmationTab.module.css'
import { useCartStore } from '../util/CartStore'

const ConfirmationTab = ({ paymentInfo }) => {

  const { products } = useCartStore()
  const cardEnd = paymentInfo.cardEnd[3]  

  const footer = () => {
    return (
      <span>
        <Link href='/checkout/submit'>
          <Button label='Submit Order' icon='pi pi-shopping-bag' />
        </Link>
      </span>
    )
  }


  return (
    <div className={styles.mainDiv}>
      <div className={styles.cardDiv}>

        <Card title="Order Confirmation" footer={footer}>
          <p>
            You are about to purchase {products.length} items with card number ending in {cardEnd}. If this looks correct please continue.
          </p>
        </Card>
      </div>



    </div>
  )
}

export default ConfirmationTab