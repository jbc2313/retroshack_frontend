import React, { useState, useEffect, useRef } from 'react';
import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { Rating } from 'primereact/rating';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { useCartStore } from '../util/CartStore';
import { Toast } from 'primereact/toast';

//reactprime css
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';

const ProductsDataView = ({ products }) => {
  console.log(products)
  const cartToast = useRef(null)
  const addtocartToast = useRef(null)


  const { data: session } = useSession()

  const [layout, setLayout] = useState('grid')
  const [sortKey, setSortKey] = useState(null)
  const [sortOrder, setSortOrder] = useState(null)
  const [sortField, setSortField] = useState(null)
  const sortOptions = [
    {label: 'Price High to Low', value: '!price'},
    {label: 'Price Low to High', value: 'price'},
  ];

  const onSortChange = (e) => {
    const value = e.value;
    
    if(value.indexOf('!') === 0) {
      setSortOrder(-1);
      setSortField(value.substring(1, value.length));
      setSortKey(value);
    }
    else {
      setSortOrder(1);
      setSortField(value);
      setSortKey(value);
    }
  }

  const { addProduct } = useCartStore()

  const showInfo = () => {
    cartToast.current.show({severity:'success', summary: `${prod.name} added to cart`, detail:'Message Content', life: 3000})
  }
  const showWarn = () => {
    addtocartToast.current.show({severity:'warn', summary: 'Please create an account', detail:'Message Content', life: 3000});
  }


  const handleAddCart = (prod) => {
    // havent decided what to do about the cart and user being logged in or logged out
    // I will figure this out after Mvp is finished
    
    if(session) {
      console.log(prod)
      addProduct(prod)
      showInfo()
    } else {
    }


  }



  const renderListItem = (data) => {
    return (
      <div className='col-12'>
        <div className='product-list-item'>
          <Link  href={`/products/${data.id}`}>
            <img style={{cursor: 'pointer', objectFit: 'contain'}} src={data.image} alt={data.name} />
          </Link>
          <div className='product-list-detail'>
            <Link href={`/products/${data.id}`}>
              <div style={{cursor: 'pointer'}} className='product-name'>{data.name}</div>
            </Link>
            {/* <div className='product-description'>{data.description}</div> */}
            <Rating value={data.rating} readOnly cancel={false}></Rating>
            <i className='pi pi-tag product-category-icon' ></i><span className='product-category'>{data.category}</span>
          </div>
          <div className='product-list-action'>
            <span className='product-price'>${data.price}</span>
            <Button onClick={() => handleAddCart(data)} icon='pi pi-shopping-cart' label='Add to Cart' disabled={data.stockStatus === 'OUTOFSTOCK'}></Button>
            <span className={`product-badge status-${data.stockStatus.toLowerCase()}`}>{data.stockStatus}</span>
          </div>
        </div>
      </div>
    )
  }
  
  const renderGridItem = (data) => {
    return (
      <div className="col-12 md:col-4">
            <div className="product-grid-item card">
                <div className="product-grid-item-top">
                    <div>
                        <i className="pi pi-tag product-category-icon"></i>
                        <span className="product-category">{data.category}</span>
                    </div>
                    <span className={`product-badge status-${data.stockStatus.toLowerCase()}`}>{data.stockStatus}</span>
                </div>
                <div className="product-grid-item-content">
                <Link href={`/products/${data.id}`} >
                    <img style={{cursor: 'pointer', objectFit: 'contain'}} src={data.image} height={250} width={250} alt={data.name} />
                </Link>
                    <Link href={`/products/${data.id}`} style={{cursor: 'pointer'}} >
                      <div style={{cursor: 'pointer'}} className="product-name">{data.name}</div>
                    </Link>
                    {/* <div className="product-description">{data.description}</div> */}
                    <Rating value={data.rating} readOnly cancel={false}></Rating><br/>
                </div>
                <div className="product-grid-item-bottom">
                    <span className="product-price">${data.price}</span>
                    <Button onClick={() => handleAddCart(data)} icon="pi pi-shopping-cart" label="Add to Cart" disabled={data.stockStatus === 'OUTOFSTOCK'}></Button>
                </div>
            </div>
        </div>
    );
  }
  
  const itemTemplate = (product, layout) => {
    if (!product) {
      return;
    }
    
    if (layout === 'list')
    return renderListItem(product);
    else if (layout === 'grid')
    return renderGridItem(product);
  }
  
  const renderHeader = () => {
    return (
      <div className="grid grid-nogutter">
            <div className="col-6" style={{textAlign: 'left'}}>
                <Dropdown options={sortOptions} value={sortKey} optionLabel="label" placeholder="Sort By Price" onChange={onSortChange}/>
            </div>
            <div className="col-6" style={{textAlign: 'right'}}>
                <DataViewLayoutOptions layout={layout} onChange={(e) => setLayout(e.value)} />
            </div>
        </div>
    );
  }
  
  const header = renderHeader();
  
  return (
    <div className='dataview'>
      <Toast ref={cartToast} />
      <Toast ref={addtocartToast} position='bottom-center'/>
      <div className="card">
        <DataView value={products} layout={layout} header={header}
          itemTemplate={itemTemplate} paginator rows={5}
          sortOrder={sortOrder} sortField={sortField} />
      </div>

    </div>
  )
}

export default ProductsDataView