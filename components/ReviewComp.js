import React from 'react'
import { Rating } from 'primereact/rating'

const ReviewComp = ({ rev }) => {
  return (
    <div style={{display: 'flex', justifyContent: 'space-evenly', alignItems: 'center'}} >
      <h4>{rev.body}</h4>
      <h3>{rev.user}</h3>
      <Rating  value={rev.stars} cancel={false} readOnly={true}/>
    </div>
  )
}

export default ReviewComp