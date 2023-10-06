import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import style from './FeaturedProduct.module.css'
import { Blocks } from 'react-loader-spinner'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import Heart from "react-heart"


import toast from 'react-hot-toast'
import { WishContext } from '../../Context/WishContext'
import Product from '../Product/Product'

export default function FeaturedProduct() {

  const [active, setActive] = useState(false)
  let { addToCart, cartnum, setCartnum } = useContext(CartContext)
  let { addToWish } = useContext(WishContext)


  async function addtoWlist(id) {
    let { data } = await addToWish(id)
    console.log(data);
    if (data.status === 'success') {
      toast.success(data.message)
    }
    else {
      toast.error(data.message)
    }

  }

  async function addProductToCart(id) {
    let { data } = await addToCart(id)

    if (data.status === 'success') {
      setCartnum(data.numOfCartItems)
      toast.success(data.message)
    }
    else {
      toast.error(data.message)
    }
  }


  function getProduct() {
    return axios.get('https://ecommerce.routemisr.com/api/v1/products')

  }
  let { data, isLoading } = useQuery('FeaturedProduct', getProduct)


  return <>
    {isLoading ? <div className="loading w-100 vh-100 d-flex justify-content-center align-items-center">
      <Blocks
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper" />
    </div> : <div className="container">
      <div className="row">
        {data?.data.data.map((prod) =>
          <Product prod={prod} />)}

      </div>

    </div>}



  </>
}

