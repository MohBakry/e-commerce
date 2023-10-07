import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext'
import { WishContext } from '../../Context/WishContext'
import style from './WishList.module.css'


export default function WishList() {
  let { addToCart, setCartnum, cartnum } = useContext(CartContext)
  let [wishData, SetWishData] = useState(null)
  let { Wishnum, setWishnum, getLoggedWish, deleteFromWish } = useContext(WishContext)
  async function displayWish() {
    let { data } = await getLoggedWish()
    SetWishData(data);
    setWishnum(data.count);
    setCartnum(data.numOfCartItems);

    console.log(data);
  }
  async function removeWish(id) {
    let { data } = await deleteFromWish(id)
    let updateData = wishData.data.filter(item => item.id !== id)
    SetWishData({data:updateData, count:data.length});
    setWishnum(data.length)
    setCartnum(data.numOfCartItems);
  }

  async function addProductToCart(id) {
    let { data } = await addToCart(id)

    if (data.status === 'success') {
      toast.success(data.message)

    }
    else {
      toast.error(data.message)
    }
  }
  useEffect(() => {
    displayWish()
  }, [])
  return (
    <>
      <h2>Wishlist Details</h2>
      {wishData ? <div className="bg-light w-75 m-auto py-2">
        <h4>Number of Items:{wishData.count}</h4>

        {wishData.data.map((pro, index) => <div key={index} className="row my-2 border-bottom">
          <div className="col-md-2">
            <img src={pro.imageCover} className="w-100" alt="" />
          </div>
          <div className="col md-10">
            <h4>{pro.title}</h4>

            <div className='d-flex justify-content-between'>
              <div><h5>Price:{pro.price}</h5></div>
              <div>
                <button onClick={() => { addProductToCart(pro.id) }} className='btn btn-warning my-2 ' >Add To Cart</button>

              </div>
            </div>
            <button onClick={() => { removeWish(pro.id) }} className='btn'><i className="fas fa-trash-can text-danger "></i>Remove</button>
          </div>
        </div>)}
        <div className='p-auto'>
          {/* <Link to={`/Checkout/${CartData.data._id}`} className='btn btn-warning w-75'>Check Out</Link> */}
        </div>


      </div> : ''}

    </>
  )
}

