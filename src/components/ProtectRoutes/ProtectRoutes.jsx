import React from 'react'
import { Navigate } from 'react-router-dom'
import style from './ProtectRoutes.module.css'

export default function ProtectRoutes(props) {

  if (localStorage.getItem('token') != null) {
    return props.children
  }

  else {
    return <Navigate to='/Login' />
  }


}

