
import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import style from './Brands.module.css'
import {Blocks} from 'react-loader-spinner'
import { getBrand } from '../../Redux/BrandSlice'

export default function Brands() {
 let disPatch=useDispatch()
  let {brands,loading}=useSelector((state)=>state.brands)
  
  useEffect(()=>{
    disPatch(getBrand())
  },[])
  return <>
  {loading ?<div className="loading w-100 vh-100 d-flex justify-content-center align-items-center">
  <Blocks
  visible={true}
  height="80"
  width="80"
  ariaLabel="blocks-loading"
  wrapperStyle={{}}
  wrapperClass="blocks-wrapper"/></div>: 
  <div className="row mt-5">
    {brands.map((brand,index)=><div key={index} class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
      <img src={brand.image} className="w-100" alt="" />
      <center><h5>{brand.name}</h5></center>
    </div>)}
    
  </div>
  }
  
  </>
    
  
}

