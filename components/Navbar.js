import React, { useState, useRef } from 'react'
import { InputText } from 'primereact/inputtext'
import styles from '../styles/Navbar.module.css'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { OverlayPanel } from 'primereact/overlaypanel';
import { useCartStore } from '../util/CartStore'
import { useProductStore } from '../util/ProductStore'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Divider } from 'primereact/divider'
import SearchDropdown from './SearchDropdown'

//prime css
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';

const Navbar = () => {
  const [searchValue, setSearchValue] = useState('')
  const [isSearchShowing, setIsSearchShowing] = useState(false)
  const { data: session } = useSession()
  const op = useRef(null);
  const searchPanel = useRef(null);
  const cartProducts = useCartStore((state) => state.products)
  


  const imageBody = (rowData) => {
    return <img style={{objectFit: 'contain'}} width={50} height={50} src={rowData.image} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={rowData.image} className="product-image" />
  }

  const priceBody = (rowData) => {
      return formatCurrency(rowData.price);
  }

  const formatCurrency = (value) => {
    return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
  }

  const { products, getProducts } = useProductStore();

  const searchForItem = () => {
    getProducts()
  }
  const displaySearch = () => {
    setIsSearchShowing(true)
  }
  


  return (
    <div className={styles.navDiv}>
      <div className={styles.logoDiv}>
        <p className={styles.logo}>
          <Link href='/'>
          RetroShack
          </Link>
        </p>
      </div>
      <div className={styles.searchbarDiv}>
        <span className="p-input-icon-left">
            <i className="pi pi-search" />
            <InputText value={searchValue} 
            onChange={(e) => {
              setSearchValue(e.target.value)
            }}
            onFocus={(e) => {
              searchPanel.current.show(e)
              searchForItem()
            }}
            onKeyDown={() => displaySearch()}
            onBlur={(e) => searchPanel.current.hide(e)}

            placeholder="Search" 
            />
        </span>
        <OverlayPanel ref={searchPanel}>
          {isSearchShowing && <SearchDropdown searchValue={searchValue} />}
        </OverlayPanel>
      </div>
      <div className={styles.linksDiv}>
        <ul>
          <li className={styles.link1}><Link href='/products'>Products</Link></li>
          <li className={styles.link2}><Link href='/signin'>{session ? `Hello, ${session.user.email}` : "Sign In" }</Link></li>
          <li style={{cursor: 'pointer'}} onClick={(e) => op.current.toggle(e)} className={styles.link3}>Cart</li>
        </ul>
        <div>
          <OverlayPanel ref={op}>
            <DataTable value={cartProducts} size='small' selectionMode="single" responsiveLayout='scroll' >
              <Column field="name" header="Name"  />
              <Column header="Image" body={imageBody} />
              <Column field="price" header="Price" body={priceBody} />
              <Column field="amountInCart" header="# in Cart"  />
            </DataTable>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px'}}>
              <Link href='/cart'><Button>Edit Cart</Button></Link>
              <Link href='/checkout' ><Button>Checkout</Button></Link>
            </div>

          </OverlayPanel>
        </div>
      </div>
    </div>
  )
}

export default Navbar