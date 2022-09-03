import React, {useState} from 'react'
import { useForm } from 'react-hook-form'

const login = () => {
  const [formInfo, setFormInfo] = useState(null)
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    console.log(data)
    setFormInfo(data)
  }



  return (
    <div>
      <h1>Log In!</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input  {...register("email")} required />
        <input type='password'  {...register("password")} required />
        <input type='password'  {...register('confirmPassword')} required />
        <input type='submit' />
      </form>
    </div>
  )
}

export default login