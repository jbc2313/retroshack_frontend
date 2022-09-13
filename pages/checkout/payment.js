import React, { useState, useEffect } from 'react';
import PaymentInput from '../../components/PaymentInput';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column'
import { Accordion, AccordionTab } from 'primereact/accordion';
import { useCartStore } from '../../util/CartStore';
import CheckoutTable from '../../components/CheckoutTable';
import ConfirmationTab from '../../components/ConfirmationTab';


const payment = () => {

  const [activeTab, setActiveTab] = useState(1)
  const [inputComplete, setInputComplete] = useState(false)
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: "1234-1234-1234-1234",
    cardDate:  "11-22",
    cardCVV: "123"
  })

  const { products } = useCartStore()

  const formatCurrency = (value) => {
    return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
  }
  
  const priceColumnFormat = (Data) => {
    return formatCurrency(Data.price);
  }

  useEffect(() => {
    if(inputComplete === true) {
      setActiveTab(2)
      setPaymentInfo({...paymentInfo, cardEnd: paymentInfo.cardNumber.split('-')})
    }
  }, [inputComplete])




  return (
    <div>
      <Accordion activeIndex={activeTab} onTabChange={(e) => setActiveTab(e.index)}>
        <AccordionTab header='Cart'>
          <DataTable value={products} responsiveLayout='scroll' >
          <Column field='name' header='Name'></Column>
          <Column field='category' header='Category'></Column>
          <Column field='price' body={priceColumnFormat} header='Price'></Column>
          <Column field='amountInCart' header='# in Cart'></Column>
          </DataTable>
        </AccordionTab>
        <AccordionTab header='Payment Info'>
          <PaymentInput setInputComplete={setInputComplete} setPaymentInfo={setPaymentInfo} />
        </AccordionTab>
        <AccordionTab header='Confirmation'>
          <ConfirmationTab paymentInfo={paymentInfo} />
        </AccordionTab>
      
      
      </Accordion>


    </div>
  )
}

export default payment