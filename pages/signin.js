import React from 'react'
import SignInButton from '../components/SignInButton'
import styles from '../styles/SignIn.module.css'
import Link from 'next/link'
import { useSession, signIn, signOut } from 'next-auth/react'
import { Button } from 'primereact/button'

const Signin = () => {
 
    const { data: session } = useSession()




    return (
    <div className={styles.MainDiv}>
      {session && <h2>Hello {session.user.email} </h2>}
      {session ? <h2>Click below to sign out. </h2> : <h2> Please Sign In. </h2>}
      <div className={styles.SigninDiv}>
        <SignInButton />
      </div>
      <div className={styles.SignupDiv}>
        <Button>
          <Link href='/signup'>Create Account</Link>
        </Button>
      </div>





    </div>
  )
}

export default Signin
