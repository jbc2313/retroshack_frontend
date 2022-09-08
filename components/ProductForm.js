import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button'; 
import { Divider } from 'primereact/divider';
import { classNames } from 'primereact/utils';
import styles from '../styles/ProductNew.module.css';


const ProductForm = () => {
  
  const [formData, setFormData] = useState()

  const defaultValues = {
    sku: '',
    name: '',
    description: '',
    image: '',
    price: '',
    category: '',
    quantity: '',
    stockStatus: '',
    rating: ''

  }



  const { control, formState: { errors }, handleSubmit, reset } = useForm({ defaultValues })

  const onSubmit = (data) => {
    setFormData(data);
    

    reset({values: defaultValues})
  }

  // need to add error message function here and add into form
  
  return (
    <div className={styles.formDiv}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='field'>
          <span className='p-float-label'>
            <Controller name='sku' control={control} rules={{ required: 'SKU is required.' }} render={({ field, fieldState }) => (
              <InputText id={field.name} {...field} autoFocus className={classNames({ 'p-invalid': fieldState.invalid})} />
            )} />
            <label htmlFor='sku' className={classNames({ 'p-error': errors.sku})} >SKU</label>
          </span>
        </div>
        {/* name input */}
        <div className='field'>
          <span className='p-float-label'>
            <Controller name='name' control={control} rules={{ required: 'Name is required.' }} render={({ field, fieldState }) => (
              <InputText id={field.name} {...field} autoFocus className={classNames({ 'p-invalid': fieldState.invalid})} />
            )} />
            <label htmlFor='name' className={classNames({ 'p-error': errors.name})} >Name</label>
          </span>
        </div>
        {/* description input */}
        <div className='field'>
          <span className='p-float-label'>
            <Controller name='description' control={control} rules={{ required: 'Description is required.' }} render={({ field, fieldState }) => (
              <InputText id={field.name} {...field} autoFocus className={classNames({ 'p-invalid': fieldState.invalid})} />
            )} />
            <label htmlFor='description' >Description</label>
          </span>
        </div>
        {/* image input */}
        <div className='field'>
          <span className='p-float-label'>
            <Controller name='image' control={control} rules={{ required: 'SKU is required.' }} render={({ field, fieldState }) => (
              <InputText id={field.name} {...field} autoFocus className={classNames({ 'p-invalid': fieldState.invalid})} />
            )} />
            <label htmlFor='image' >Image</label>
          </span>
        </div>
        {/* price input */}
        <div className='field'>
          <span className='p-float-label'>
            <Controller name='price' control={control} rules={{ required: 'SKU is required.' }} render={({ field, fieldState }) => (
              <InputText id={field.name} {...field} autoFocus className={classNames({ 'p-invalid': fieldState.invalid})} />
            )} />
            <label htmlFor='price' >Price</label>
          </span>
        </div>
        {/* catgegory input */}
        <div className='field'>
          <span className='p-float-label'>
            <Controller name='category' control={control} rules={{ required: 'SKU is required.' }} render={({ field, fieldState }) => (
              <InputText id={field.name} {...field} autoFocus className={classNames({ 'p-invalid': fieldState.invalid})} />
            )} />
            <label htmlFor='category' >Category</label>
          </span>
        </div>
        {/* quantity input */}
        <div className='field'>
          <span className='p-float-label'>
            <Controller name='quantity' control={control} rules={{ required: 'SKU is required.' }} render={({ field, fieldState }) => (
              <InputText id={field.name} {...field} autoFocus className={classNames({ 'p-invalid': fieldState.invalid})} />
            )} />
            <label htmlFor='quantity'>Quantity</label>
          </span>
        </div>
        {/* stock staus input */}
        <div className='field'>
          <span className='p-float-label'>
            <Controller name='stockStatus' control={control} rules={{ required: 'SKU is required.' }} render={({ field, fieldState }) => (
              <InputText id={field.name} {...field} autoFocus className={classNames({ 'p-invalid': fieldState.invalid})} />
            )} />
            <label htmlFor='stockStatus'>Stock Status</label>
          </span>
        </div>
        {/* review input */}
        <div className='field'>
          <span className='p-float-label'>
            <Controller name='Rating' control={control} rules={{ required: 'SKU is required.' }} render={({ field, fieldState }) => (
              <InputText id={field.name} {...field} autoFocus className={classNames({ 'p-invalid': fieldState.invalid})} />
            )} />
            <label htmlFor='Rating' >Rating</label>
          </span>
        </div>
        <Button type='submit' label='Submit' className='mt-2' />



      </form>



    </div>
  )
}

export default ProductForm