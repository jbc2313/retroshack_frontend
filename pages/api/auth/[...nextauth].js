import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials"
import { backendAuthSignIn, backendAuthSignUp } from "../../../util/backendAuth"

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // ...add more providers here
    CredentialsProvider({
      name: 'RetroShack Login',
      credentials: {
        email: { label: "Email", type: "text"},
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        

        console.log(credentials)
        const res = await fetch("http://localhost:7777/login", {
          method: 'POST',
          body: JSON.stringify(credentials),
          headers: {
            "Content-Type": "application/json"
          }
        })
        
        const user = await res.json()
        console.log(user)

        //if no error and user data recieved from backend
        if (res.ok && user) {
          return user
        }
        //if user data not returned
        return null
      }

    }),
    
  ],
  callbacks: {

    async jwt({ token, account, user }) {
      // this is for github login
      if(account) {
        token.accessToken = account.access_token
      }
      // this is for credentials login
      if(user){
        token.accessToken = user.data
         
      }
      return token
    },
    async session({ session, token}) {
      session.accessToken = token.accessToken
      
      return session
    },
  },
  
}

export default NextAuth(authOptions)