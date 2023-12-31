
import style from './ForgetPassword.module.css'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import React, { useContext, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { Bars } from 'react-loader-spinner'
import { UserContext } from '../../Context/UserContext'

export default function ForgetPassword() {
  let navigate = useNavigate()
  let [error, setError] = useState('')
  let [loading, setLoading] = useState(false)
  // let { SetUserToken } = useContext(UserContext)

  let users = {
    email: '',
   
  }

  let valid = Yup.object({

    email: Yup.string().required('email required').email('enter valed email'),



  })

  async function submitForm(v) {
    setLoading(true)
    let { data } = await axios.post('https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords', v).catch((err) => {
      setError(err.response.data.message);
      setLoading(false)
    })

    if (data.statusMsg === 'success') {
      setLoading(true)
      navigate('/Vcode')
      // localStorage.setItem('token', data.token)
      // SetUserToken(data.token)
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
        <h3>Please Enter Your Email</h3>
        <form onSubmit={formik.handleSubmit} >
          {error ? <div className='alert alert-danger'>{error}</div> : ''}

          <label htmlFor="email"> Email:</label>
          <input placeholder='Please Enter Your Email' onBlur={formik.handleBlur} onChange={formik.handleChange} type="email" className='form-control my-2' name="email" id='email' />
          {formik.errors.email && formik.touched.email ? <div className='alert alert-danger'>
            {formik.errors.email}</div> : ''}
          



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
              {/* <Link to='/ForgetPassword' >Forget Password</Link> */}
            </div>

          }
        </form>
      </div>
    </>
  )
}

