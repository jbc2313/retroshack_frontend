import React, { useState } from 'react';
import { TabView, TabPanel } from 'primereact/tabview';
import { Rating } from 'primereact/rating';
import styles from '../styles/ProductViewTabs.module.css';

import Link from 'next/link';
import axios from 'axios';
import ReviewForm from './ReviewForm';
import { Button } from 'primereact/button';

const ProductViewTab = ({ product }) => {

  const [reviewShowing, setReviewShowing] = useState(false)

  // Admin Testing Links Will be removed 
    







  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className={styles.TabDiv}>
      <TabView activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)}>
          <TabPanel header="Description">
            <h4><u>Description</u></h4>
            <p>{product.description}</p>
          </TabPanel>
          <TabPanel header="Specs">
          <table>
              <tr>
                <td>
                  <b>Name:</b>
                </td>
                <td>
                  {product.name}
                </td>
              </tr>
              <tr>
                <td>
                  <b>Category:</b>
                </td>
                <td>
                  {product.category}
                </td>
              </tr>
              <tr>
                <td>
                  <b>SKU:</b>
                </td>
                <td>
                  {product.sku}
                </td>
              </tr>
              <tr>
                <td>
                  <b>ID:</b>
                </td>
                <td>
                  {product.id}
                </td>
              </tr>
              <tr>
                <td>
                  <b>Stock Status:</b>
                </td>
                <td>
                  {product.stockStatus}
                </td>
              </tr>
              <tr>
                <td>
                  <b>Quanity:</b>
                </td>
                <td>
                  {product.quantity}
                </td>
              </tr>
              <tr>
                <td>
                  <b>Price:</b>
                </td>
                <td>
                  ${product.price}
                </td>
              </tr>
              
            </table>
          </TabPanel>
          <TabPanel header="Reviews">
            <div className={styles.ratingDiv}>
              <Button label='Add Review' onClick={() => setReviewShowing(!reviewShowing)} />
            </div>
            <div className={styles.commentsDiv}>
              {/* THIS IS JUST A PLACE HOLDER FOR NOW WILL BE REWORKED LATER */}
              {reviewShowing && <ReviewForm productId={product.id} />}
              <div className={styles.commentsInfo}>
                <p>Review</p>
                <p>User</p>
                <p>Stars</p>
              </div>
              <div >
                {product?.reviews.map((rev, index)=> (<div style={{display: 'flex', justifyContent: 'space-evenly', alignItems: 'center'}} >
                  <h4>{rev.body}</h4>
                  <h3>{rev.user}</h3>
                  <Rating  value={rev.stars} cancel={false} readOnly={true}/>
                </div>))}
              </div>
            </div>
          </TabPanel>
          
      </TabView>
    </div>
  )
}

export default ProductViewTab