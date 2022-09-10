import React from 'react'
import SignUpForm from '../components/SignUpForm'
import styles from '../styles/Signup.module.css'

const Signup = () => {





  return (
    <div className={styles.mainDiv}>
      <br/>
      <br/>
      <h1>Create Account.</h1>
      <div>
        <SignUpForm />
      </div>

    </div>
  )
}

export default Signup