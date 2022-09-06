import React, { useState } from 'react';
import { TabView, TabPanel } from 'primereact/tabview';
import { Rating } from 'primereact/rating';
import styles from '../styles/ProductViewTabs.module.css';

const ProductViewTab = ({ product }) => {



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
                <td align='right'>
                  <b>Name:</b>
                </td>
                <td>
                  {product.name}
                </td>
              </tr>
              <tr>
                <td align='right'>
                  <b>Category:</b>
                </td>
                <td>
                  {product.category}
                </td>
              </tr>
              <tr>
                <td align='right'>
                  <b>SKU:</b>
                </td>
                <td>
                  {product.sku}
                </td>
              </tr>
              <tr>
                <td align='right'>
                  <b>ID:</b>
                </td>
                <td>
                  {product.id}
                </td>
              </tr>
              <tr>
                <td align='right'>
                  <b>Stock Status:</b>
                </td>
                <td>
                  {product.stockStatus}
                </td>
              </tr>
              <tr>
                <td align='right'>
                  <b>Quanity:</b>
                </td>
                <td>
                  {product.quantity}
                </td>
              </tr>
              <tr>
                <td align='right'>
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
              <Rating value={product.rating} readOnly stars={5} cancel={false}/>
              <span> 5/5 Stars</span>
            </div>
            <div className={styles.commentsDiv}>
              {/* THIS IS JUST A PLACE HOLDER FOR NOW WILL BE REWORKED LATER */}
              <div className={styles.commentsInfo}>
                <p>NAME</p>
                <p>TITLE</p>
                <p>STARS</p>
              </div>
              <div className={styles.commentsBody}>
                BODY
              </div>
            </div>
          </TabPanel>
          <TabPanel header="Q and A">
              Q AND A
          </TabPanel>
      </TabView>
    </div>
  )
}

export default ProductViewTab