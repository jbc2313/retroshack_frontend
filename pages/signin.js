import React from 'react'
import SignInButton from '../components/SignInButton'
import styles from '../styles/SignIn.module.css'
import Link from 'next/link'

const Signin = () => {
  return (
    <div className={styles.MainDiv}>
      <h2>Auth page from next auth</h2>
      <div className={styles.SigninDiv}>
        <SignInButton />
      </div>
      <div className={styles.SignupDiv}>
        <button>
          <Link href='/signup'>Create Account</Link>
        </button>
      </div>





    </div>
  )
}

export default Signin