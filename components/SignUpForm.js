import React, { useContext, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useForm, Controller } from 'react-hook-form'
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'
import { Password } from 'primereact/password'
import { Dialog } from 'primereact/dialog'
import { classNames } from 'primereact/utils'
import styles from '../styles/Login.module.css'

//CSS from primeREACT
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import axios from 'axios'


const SignUpForm = () => {
  const router = useRouter()
  const [showMessage, setShowMessage] = useState(false)
  const [formData, setFormData] = useState({})
  const [resData, setResData] = useState({})
  const defaultValues = {
    email: '',
    password: ''
  }


  const { control, formState: { errors }, handleSubmit, reset } = useForm({ defaultValues });

  const onSubmit = (data) => {
    console.log(data)
    setFormData(data);

    axios.post(process.env.NEXT_PUBLIC_API_URL + '/signup', {
      email: data.email,
      password: data.password
    })
    .then(res => {
      console.log('Axios response', res.data)
      setResData(res.data.link)
      
      // need to add error handling incase user signup doesnt work or user is already signed up.
      setShowMessage(true);
    })

    reset();
  }

  const getFormErrorMessage = (name) => {
    return errors[name] && <small className="p-error">{errors[name].message}</small>
  };

  const dialogFooter = <div className="flex justify-content-center"><Button label="OK" className="p-button-text" autoFocus onClick={() => setShowMessage(false)} /><Button label='Sign In' className='p-button-text' onClick={() => router.push('/signin')} /></div>;


  return (
    <div className={styles.mainDiv} >
      

      <Dialog visible={showMessage} onHide={() => setShowMessage(false)} position="top" footer={dialogFooter} showHeader={false} breakpoints={{ '960px': '80vw' }} style={{ width: '30vw' }}>
                <div className="flex justify-content-center flex-column pt-6 px-3">
                    <i className="pi pi-check-circle" style={{ fontSize: '5rem', color: 'var(--green-500)' }}></i>
                    <h5>Registration Successful!</h5>
                    <p style={{ lineHeight: 1.5, textIndent: '1rem' }}>
                        Follow this link to see temp email sent from server. 
                    </p>
                    <p style={{textAlign: 'center'}}>
                        <a href={resData} target="_blank" ><u>Email Link</u></a>
                    </p>
                </div>
      </Dialog>
      <div className='flex justify-content-center' >
        <div className={styles.card} >
          <h3 className='text-center' >User Info</h3>
          <form onSubmit={handleSubmit(onSubmit)} className='p-fluid' >
            <div className='field'>
              <span className='p-float-label p-input-icon-right'>
                <i className='pi pi-envelope' />
                <Controller name='email' control={control} rules={{ required:  'Email is required.' }} render={({ field, fieldState }) => ( <InputText id={field.email} {...field} autoFocus className={classNames({ 'p-invalid': fieldState.invalid })} />)} />
                <label htmlFor='email' className={classNames({ 'p-error': errors.name })} >Email*</label>
              </span>
              {getFormErrorMessage('email')}
            </div>
            <div className='field'>
              <span className='p-float-label'>
                <Controller name='password' control={control} rules={{ required: 'Password is required.' }} render={({ field, fieldState }) => ( <Password id={field.name} {...field} toggleMask feedback={false} className={classNames({ 'p-invalid': fieldState.invalid })}  /> )} />
                <label htmlFor='password' className={classNames({ 'p-error': errors.password })} >Password*</label>
              </span>
              {getFormErrorMessage('password')}
            </div>
            
            <Button type='submit' label='Submit' className='mt-2' />

          </form>
        </div>
      </div>


    </div>
  )
}

export default SignUpForm
