import axios from 'axios'
import React from 'react'
import Slider from "react-slick";
import { useEffect } from 'react'
import { useState } from 'react'
import style from './CategorySlider.module.css'

export default function CategorySlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true
  };
  let [category, setCategory]= useState([])
  async function getCategory(){
  
    let {data}=await axios.get('https://ecommerce.routemisr.com/api/v1/categories') 
  
  setCategory(data.data)
  
  }
  useEffect(()=>{
    getCategory()
  },[]
  )
  return (
    <>
    <h6 className='m-3'>Shop Popular Categories</h6>
    <div className="row m-3">
    <Slider {...settings}>
      { category.map((cat)=> <img src={cat.image} height="150px" className='px-1' alt="" /> )  }
      
    </Slider>
    </div>
     </>
  )
}

