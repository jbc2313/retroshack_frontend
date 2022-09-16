import React, { useState } from 'react'
import { InputMask } from 'primereact/inputmask';
import styles from '../styles/PaymentInfo.module.css'

const PaymentInput = ({ setInputComplete, setPaymentInfo }) => {

  const [CardMainValue, setCardMainValue] = useState()
  const [cardMainComplete, setCardMainComplete] = useState(false)
  const [CardDateValue, setCardDateValue] = useState()
  const [cardDateComplete, setCardDateComplete] = useState(false)
  const [CardCVVValue, setCardCVVValue] = useState()
  const [cardCVVComplete, setCardCVVComplete] = useState(false)
  const [CardComplete, setCardComplete] = useState(false)

 
  const cardInputComplete = () => {

    if(cardMainComplete === true && cardDateComplete === true && cardCVVComplete === true) {
      setPaymentInfo({
        cardNumber: CardMainValue,
        cardDate: CardDateValue,
        cardCVV: CardCVVValue
      })
      setInputComplete(true)
    }
  }



  return (
    <div className={styles.mainDiv}>
      <InputMask className={styles.input} mask='9999-9999-9999-9999' value={CardMainValue} onChange={(e) => setCardMainValue(e.value)} onComplete={() => setCardMainComplete(true)} placeholder='Card Number' onBlur={cardInputComplete} />
      <InputMask className={styles.input} mask='99/99' size={15} placeholder='Exp Date' onChange={(e) => setCardDateValue(e.value)} onComplete={() => setCardDateComplete(true)} onBlur={cardInputComplete} />
      <InputMask className={styles.input} mask='999' size={10} placeholder='CVV' onChange={(e) => setCardCVVValue(e.value)} onComplete={() => setCardCVVComplete(true)} onBlur={cardInputComplete} />
    </div>
  )
}

export default PaymentInput