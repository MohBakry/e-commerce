import React from 'react'
import style from './NotFound.module.css'
import img from '../../asstes/NotFound.png'

export default function NotFound() {
  return (
    <>
    <center><h2>Not Found...</h2></center>
    <div>
      <center><img src={img} alt="" /></center>
    </div>
    </>
  )
}

