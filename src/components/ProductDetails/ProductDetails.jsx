import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import Slider from "react-slick";
import Heart from "react-heart"

import style from './ProductDetails.module.css'
import { useState } from 'react';


export default function ProductDetails() {
  const [active, setActive] = useState(false)
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  let {id}=useParams()
 

  function getProductDetails(id){
return axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
  }

  let {data}=useQuery('ProductDetails', ()=>getProductDetails(id))
  console.log(data?.data.data);
  return (
    <>
    <div className="container">
      {data?.data.data?<div className="row align-items-center">
        <div className="col-md-4">
          <div>
          
              <Slider {...settings}>
              {data?.data.data.images.map((img, index)=>{return<img key={index} src={img} alt="" className='w-100' />
          })}
    </Slider>
          </div>
        </div>
        <div className="col-md-7">
          <div>
            <h2 className='text-success my-3'>{data?.data.data.title}</h2>
            <h6 className='my-3'>{data?.data.data.description}</h6>
            <h5 className=' my-3'>{data?.data.data.category.name}</h5>
            <div className='d-flex justify-content-between my-4 '>
              <span>Price {data?.data.data.price}</span>
              <span>      
                <div style={{ width: "2rem" }}>
			            <Heart isActive={active} onClick={() => setActive(!active)}/>
		            </div>
              </span>
              <span className='fas fa-star text-warning'>{data?.data.data.ratingsAverage}</span>

            </div>
            <button className='btn btn-success w-100'>Add To Cart</button>
            
          </div>

        </div>
      </div>:''}
    </div>
    
    </>
  )
}

