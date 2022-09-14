import React from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'
import { Button } from 'primereact/button'

const SignInButton = () => {
  const { data: session } = useSession()

  if(session) {
    return (
      <>
        <Button onClick={() => signOut()} >Sign Out</Button>
      </>
    )
  }

  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()} >Sign In</button>
    </>
  )
}

export default SignInButton
