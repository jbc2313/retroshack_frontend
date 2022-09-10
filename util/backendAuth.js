import axios from "axios";


export async function backendAuthSignUp (cred) {
  return token = await axios.post('http://localhost:7777/signup', {
    body: JSON.stringify(cred)
  })
}


export async function backendAuthSignIn (cred) {
  return token = await axios.post('http://localhost:7777/signin', {
    body: JSON.stringify(cred)
  })
}