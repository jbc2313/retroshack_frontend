import React, { useState } from 'react'
import { InputTextarea } from 'primereact/inputtextarea';
import { Rating } from 'primereact/rating';
import { useSession } from 'next-auth/react'
import { Button } from 'primereact/button';
import axios from 'axios';

const ReviewForm = ({ productId }) => {
  
  const [inputStars, setInputStars] = useState(0)
  const [reviewBody, setReviewBody] = useState('')

  const { data: session } = useSession()

  const handleChange = (e) => {
   
  }
  const handleSubmit = () => {
    if(session){
      const reviewData = {
        stars: inputStars,
        body: reviewBody
      }
      axios.post('http://localhost:7777/products/review/new', {
        user: session.user.email,
        stars: reviewData.stars,
        body: reviewData.body,
        productId: productId
      })
      .then(res => console.log(res.data))
    }else {
      alert('Please log in first...')
    }

  }

  return (
    <div>
    <div style={{display: 'flex', justifyContent: 'space-evenly', marginBottom: '20px'}}>
      <InputTextarea value={reviewBody} onChange={(e)=> setReviewBody(e.target.value)} />

      <Rating value={inputStars} cancel={false} onChange={(e)=> setInputStars(e.target.value)} />
       
    </div>
    <div style={{ width: '20%', margin: 'auto'}}>
      <Button onClick={handleSubmit} label='Submit' />
    </div>


    </div>
  )
}

export default ReviewForm