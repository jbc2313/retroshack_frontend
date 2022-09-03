import React from 'react'
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
  return (
    <div className={styles.navDiv}>
      <div className={styles.logoDiv}>
        <p className={styles.logo}>
          RetroShack
        </p>
      </div>
      <div className={styles.searchbarDiv}>
        <input type='text' onSubmit={(e)=> console.log('you submited the search bar in the nav')}/>
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