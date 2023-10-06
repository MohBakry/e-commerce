import React from 'react'
import style from './ForgetPassword.module.css'
import { useFormik } from 'formik'
import * as Yup from 'yup'

export default function ForgetPassword() {
  let valid = Yup.object({

    email: Yup.string().required('email required').email('enter valed email'),


  })
  let formik = useFormik({
    initialValues: {},
    onSubmit: () => { console.log('submited') },
    validationSchema: valid,


  })
  return (
    <>
      <h2>Please Enter Your E-mail</h2>
      <form onSubmit={formik.handleSubmit}>
        <input onBlur={formik.handleBlur} onChange={formik.handleChange} type='email' name='email' id='email' placeholder='Enter Your E-mail' className='form-control' />
        <button disabled={!(formik.isValid && formik.dirty)} type='submit' className='btn btn-warning'  >Submit</button>
      </form>
    </>
  )
}

