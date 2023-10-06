import React, { useContext, useState } from 'react'
import style from './Login.module.css'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { Bars } from 'react-loader-spinner'
import { UserContext } from '../../Context/UserContext'



export default function Login() {

  let navigate = useNavigate()
  let [error, setError] = useState('')
  let [loading, setLoading] = useState(false)
  let { SetUserToken } = useContext(UserContext)

  let users = {
    email: '',
    password: '',
  }

  let valid = Yup.object({

    email: Yup.string().required('email required').email('enter valed email'),

    password: Yup.string().required('password required').matches(/^[A-Z][a-z0-9]{5,10}$/),

  })

  async function submitForm(v) {
    setLoading(true)
    let { data } = await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signin', v).catch((err) => {
      setError(err.response.data.message);
      setLoading(false)
    })

    if (data.message === 'success') {
      setLoading(true)
      navigate('/Home')
      localStorage.setItem('token', data.token)
      SetUserToken(data.token)
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
        <h3>Signin</h3>
        <form onSubmit={formik.handleSubmit} >
          {error ? <div className='alert alert-danger'>{error}</div> : ''}

          <label htmlFor="email"> Email:</label>
          <input onBlur={formik.handleBlur} onChange={formik.handleChange} type="email" className='form-control my-2' name="email" id='email' />
          {formik.errors.email && formik.touched.email ? <div className='alert alert-danger'>{formik.errors.email}</div> : ''}
          <label htmlFor="password"> Password:</label>
          <input onBlur={formik.handleBlur} onChange={formik.handleChange} type="password" className='form-control my-2' name="password" id='userName' />
          {formik.errors.password && formik.touched.password ? <div className='alert alert-danger'>{formik.errors.password}</div> : ''}



          {loading ? <button className='btn'><Bars
            height="50"
            width="80"
            color="#ffc107"
            ariaLabel="bars-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          /></button> :
            <div>
              <button disabled={!(formik.isValid && formik.dirty)} type='submit' className='btn btn-warning'>Submit</button>
              <Link to='/ForgetPassword' >Forget Password</Link>
            </div>

          }
        </form>
      </div>
    </>
  )
}

