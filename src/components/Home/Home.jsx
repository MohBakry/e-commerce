import React from 'react'
import CategorySlider from '../CategorySlider/CategorySlider'
import FeaturedProduct from '../FeaturedProduct/FeaturedProduct'
import MainSlider from '../MainSlider/MainSlider'
import style from './Home.module.css'


export default function Home() {
  return<>
  <MainSlider/>
  <CategorySlider/>
  <FeaturedProduct></FeaturedProduct>
  </>
}

