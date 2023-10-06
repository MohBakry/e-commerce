import React from 'react'
import Slider from "react-slick";
import slider1 from '../../asstes/images/slider-image-1.jpeg'
import slider2 from '../../asstes/images/slider-image-2.jpeg'
import slider3 from '../../asstes/images/slider-image-3.jpeg'
import slider4 from '../../asstes/images/grocery-banner.png'
import slider5 from '../../asstes/images/grocery-banner-2.jpeg'
import style from './MainSlider.module.css'

export default function MainSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };

  return (
    <>
    <div className="container">
    <div className="row g-0 w-100 " >
        <div className="col-md-7" >
          <Slider {...settings} >
            
            <img height={400} src={slider1}  alt="" />
            <img height={400} src={slider2} alt="" />
            <img height={400} src={slider3} alt="" />
            
          
          </Slider>
        </div>
        <div className="col-md-2">
        <img height={200} src={slider4} alt="" />
        <img height={200} src={slider5} alt="" />


        </div>

      </div>
    </div>

    


    </>
  )
}

