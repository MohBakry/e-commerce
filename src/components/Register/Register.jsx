import React, { useState } from 'react'
import style from './Register.module.css'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Bars } from 'react-loader-spinner'

export default function Register() {

  let navigate = useNavigate()
  let [error, setError] = useState('')
  let [loading, setLoading] = useState(false)

  let users = {
    name: '',
    email: '',
    password: '',
    rePassword: '',
    phone: '',

  }
  let valid = Yup.object({
    name: Yup.string().required('name required').min(3, 'min 3').max(8, 'max 8'),
    email: Yup.string().required('email required').email('enter valed email'),
    phone: Yup.string().required('phone required').matches(/^01[0125][0-9]{8}$/),
    password: Yup.string().required('password required').matches(/^[A-Z][a-z0-9]{5,10}$/),
    rePassword: Yup.string().required('password macthing required').oneOf([Yup.ref('password')])
  })

  async function submitForm(v) {
    setLoading(true)
    let { data } = await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signup', v).catch((err) => {
      setError(err.response.data.message);
      setLoading(false)
    })

    if (data.message === 'success') {
      setLoading(true)
      navigate('/Login')
    }

  }

  let formik = useFormik({
    initialValues: users,
    onSubmit: submitForm,
    validationSchema: valid,


  })



  return (
    <>

      <div className="container">
        <h3>Register</h3>
        <form onSubmit={formik.handleSubmit} >
          {error ? <div className='alert alert-danger'>{error}</div> : ''}
          <label htmlFor="userName"> Name:</label>
          <input onBlur={formik.handleBlur} onChange={formik.handleChange} type="text" className='form-control my-2' name="name" id='userName' />
          {formik.errors.name && formik.touched.name ? <div className='alert alert-danger'>{formik.errors.name}</div> : ''}
          <label htmlFor="email"> Email:</label>
          <input onBlur={formik.handleBlur} onChange={formik.handleChange} type="email" className='form-control my-2' name="email" id='email' />
          {formik.errors.email && formik.touched.email ? <div className='alert alert-danger'>{formik.errors.email}</div> : ''}
          <label htmlFor="password"> Password:</label>
          <input onBlur={formik.handleBlur} onChange={formik.handleChange} type="password" className='form-control my-2' name="password" id='userName' />
          {formik.errors.password && formik.touched.password ? <div className='alert alert-danger'>{formik.errors.password}</div> : ''}
          <label htmlFor="rePassword"> rePassword:</label>
          <input onBlur={formik.handleBlur} onChange={formik.handleChange} type="password" className='form-control my-2' name="rePassword" id='rePassword' />
          {formik.errors.rePassword && formik.touched.rePassword ? <div className='alert alert-danger'>{formik.errors.rePassword}</div> : ''}
          <label htmlFor="userName"> Phone:</label>
          <input onBlur={formik.handleBlur} onChange={formik.handleChange} type="tel" className='form-control my-2' name="phone" id='phone' />
          {formik.errors.phone && formik.touched.phone ? <div className='alert alert-danger'>{formik.errors.phone}</div> : ''}
         
          
          {loading?<button className='btn'><Bars
            height="50"
            width="80"
            color="#ffc107"
            ariaLabel="bars-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          /></button>:
          <button disabled={!(formik.isValid && formik.dirty)} type='submit' className='btn btn-warning'>Submit</button>
          }
        </form>
      </div>
    </>
  )
}

