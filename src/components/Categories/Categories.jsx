import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import style from './Categories.module.css'


export default function Categories() {
 
  let [category,setCategory]=useState([])
  async function Ctegories(){
 
    let {data}=await axios.get('https://ecommerce.routemisr.com/api/v1/categories')
    setCategory(data.data)
    console.log(data.data);
  }
  useEffect(()=>{
Ctegories()
  },[])
  return (
    <>
    <div><div className="row">
    {category.map((ctg , index)=>
   
   <div key={index} class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
    <img src={ctg.image} className='w-100 m-4' style={{height:'300px'}} alt="" />
    <center><h5>{ctg.name}</h5></center>
   </div>
   
   )}
      
      
      </div></div>
   
    </>
  )
}

