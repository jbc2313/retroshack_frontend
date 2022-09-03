import React, { useState, useContext } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { InputText } from 'primereact/inputtext'
import styles from '../styles/Navbar.module.css'
import Link from 'next/link'
import UserContext from '../util/UserContext'

//prime css
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';

const Navbar = () => {
  const [searchValue, setSearchValue] = useState(undefined)
  const { user } = useContext(UserContext)



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
        <form>
          <span className="p-input-icon-left">
              <i className="pi pi-search" />
              <InputText value={searchValue} onChange={(e) => setSearchValue(e.target.value)} placeholder="Search" />
          </span>
        </form>
      </div>
      <div className={styles.linksDiv}>
        <ul>
          <li className={styles.link1}><Link href='/products'>Products</Link></li>
          <li className={styles.link2}><Link href='/login'>{user ? `Hello, ${user.email}` : "Sign In" }</Link></li>
          <li className={styles.link3}>Cart</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar