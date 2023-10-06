import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import Heart from "react-heart"
import toast from 'react-hot-toast'
import { WishContext } from '../../Context/WishContext'

export default function Product({ prod }) {
  const [active, setActive] = useState(false)
  let { addToCart, cartnum, setCartnum } = useContext(CartContext)
  let { addToWish } = useContext(WishContext)
  const addtoWlist = async (id) => {
    let { data } = await addToWish(id)
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


  return (
    <div key={prod.id} className="col-md-2 gy-3">
      <div className="product border px-3">
        <Link className='text-decoration-none text-dark' to={`/ProductDetails/${prod.id}`}>
          <img src={prod.imageCover} className='w-100' alt="" />
          <h6 style={{ fontSize: '13px' }}>{prod.category.name}</h6>
          <h6 >{prod.title.split(' ').slice(0, 2).join(' ')}</h6>
          <div className='d-flex justify-content-between'>
            <div><h6>Price: {prod.price}</h6></div>
            <div>

            </div>
            <div><i className="fas fa-star text-warning"></i> {prod.ratingsAverage}</div>
          </div>
        </Link>
        <button onClick={() => { addtoWlist(prod.id) }} className={'border-0 bg-white'}>
          <div style={{ width: "2rem" }}>
            <Heart isActive={active} onClick={() => setActive(!active)} />
          </div>
        </button>

        {/* <button onClick={() => { addtoWlist(prod.id) }} className='btn btn-success my-2 w-100 addCart' >Add To Wish</button> */}

        <button onClick={() => { addProductToCart(prod.id) }} className='btn btn-success my-2 w-100 addCart' >Add To Cart</button>

      </div>

    </div>
  )
}

