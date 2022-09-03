import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { InputText } from 'primereact/inputtext'
import styles from '../styles/Navbar.module.css'

//prime css
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';

const Navbar = () => {
  const [searchValue, setSearchValue] = useState(null)



  return (
    <div className={styles.navDiv}>
      <div className={styles.logoDiv}>
        <p className={styles.logo}>
          RetroShack
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
          <li className={styles.link1}>Sign In</li>
          <li className={styles.link2}>Cart</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar