import React from 'react'
import styles from '../styles/Footer.module.css'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className={styles.footerDiv}>
      <div className={styles.copywrite}>
        <p>
          ©2022 RetroShack 
        </p>
      </div>
      <div className={styles.infoDiv}>
        <ul>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>


    </div>
  )
}

export default Footer