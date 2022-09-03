import React, { useEffect, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'
import { Password } from 'primereact/password'
import { Dialog } from 'primereact/dialog'
import { Divider } from 'primereact/divider'
import { classNames } from 'primereact/utils'

//CSS from primeREACT
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';

import styles from '../styles/Login.module.css'



const Login = () => {

  const [showMessage, setShowMessage] = useState(false)
  const [formData, setFormData] = useState({})
  const defaultValues = {
    email: '',
    password: ''
  }

  const { control, formState: { errors }, handleSubmit, reset } = useForm({ defaultValues });

  const onSubmit = (data) => {
    setFormData(data);
    setShowMessage(true);
    reset();
  }

  const getFormErrorMessage = (name) => {
    return errors[name] && <small className="p-error">{errors[name].message}</small>
  };

  const dialogFooter = <div className="flex justify-content-center"><Button label="OK" className="p-button-text" autoFocus onClick={() => setShowMessage(false)} /></div>;


  return (
    <div className={styles.mainDiv} >
      <Dialog visible={showMessage} onHide={() => setShowMessage(false)} position="top" footer={dialogFooter} showHeader={false} breakpoints={{ '960px': '80vw' }} style={{ width: '30vw' }}>
                <div className="flex justify-content-center flex-column pt-6 px-3">
                    <i className="pi pi-check-circle" style={{ fontSize: '5rem', color: 'var(--green-500)' }}></i>
                    <h5>Registration Successful!</h5>
                    <p style={{ lineHeight: 1.5, textIndent: '1rem' }}>
                        Your account is registered under name <b>{formData.name}</b> ; it'll be valid next 30 days without activation. Please check <b>{formData.email}</b> for activation instructions.
                    </p>
                </div>
      </Dialog>
      <div className='flex justify-content-center' >
        <div className={styles.card} >
          <h3 className='text-center' >Sign In</h3>
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
            <div>
              <a href='/signup'><h5 className='text-right'>_Create Account?_ </h5></a>
            </div>
            <Button type='submit' label='Submit' className='mt-2' />

          </form>
        </div>
      </div>


    </div>
  )

}

export default Login