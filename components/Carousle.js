import React from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'
import { Button } from 'primereact/button'
import axios from 'axios'
import { Carousel } from 'primereact/carousel';
import { useCartStore } from '../util/CartStore'


const  ProductCarousel = ({products}) => {

console.log(products);

const carouselTemplate = (product) => {
 return(
     <div style={{ backgroundColor: "#eaeaea", borderRadius: '15px'}} className='product'>
        <div className='product-content'>
            <div className='mb-3' style={{display: 'flex', justifyContent: 'center'}}>
                <img style={{objectFit: 'contain', height: '200px', width: '200px'}} alt={'product'} src={product.image} />
            </div>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <h4>{product.name}</h4>
                <span className={`product-badge status-${product.stockStatus.toLowerCase()}`}>{product.stockStatus}</span>
                <h4>${product.price}</h4>
     

            </div>


        </div>
     </div>


 )

}

return (
    <div style={{width: '80%'}}>
        <h2 style={{textAlign: 'center', marginBottom: '80px'}}>Checkout out these popular products!!</h2>
        <Carousel value={products} circular numVisible={1} numScroll={1} header={<h3 style={{textAlign: 'center'}}>Popular Items</h3>} itemTemplate={carouselTemplate} />
    </div>

)


}

export default ProductCarousel;



