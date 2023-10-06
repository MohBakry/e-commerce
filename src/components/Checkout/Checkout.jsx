import { useFormik } from 'formik'
import React from 'react'
import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext'
import style from './Checkout.module.css'


export default function Checkout() {
  let {id}=useParams()
  let {Payment} = useContext (CartContext)
  let formik= useFormik({
    initialValues:{
      details:'',
      phone:'',
      city:''
    },
    onSubmit:(val)=>{
      getPayment({id},val);
    }  })
    async function getPayment(id,shippingAddress){
      let {data}=await Payment(id,shippingAddress)
      console.log(data);
      if(data.status==='success'){
        window.location.href=data.session.url
      }
    }
  return (
    <>
    <div className='row mt-5'>
    <h1>Shipping Information</h1>
    <form onSubmit={formik.handleSubmit}>
    <label htmlFor="details">Details</label>
    <input onChange={formik.handleChange} className='form-control my-2 w-75' type="text"name='details' id='details' />

    <label htmlFor="phone">Phone</label>
    <input onChange={formik.handleChange} className='form-control my-2 w-75' type="text"name='phone' id='phone' />

    <label htmlFor="city">City</label>
    <input onChange={formik.handleChange} className='form-control my-2 w-75' type="text"name='city' id='city' />
    <button className='btn btn-warning my-2 w-75'>Pay</button>
    </form>
    </div>
    
    
    </>
  )
}

