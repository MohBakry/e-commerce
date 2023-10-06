import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { WishContext } from '../../Context/WishContext'
import style from './WishList.module.css'
export default function WishList() {
  let [wishData,SetWishData]= useState(null)
 let {getLoggedWish}=useContext(WishContext)
 async function displayWish(){
  let {data}= await getLoggedWish()
  SetWishData(data)
  console.log(data);
 }
 useEffect(()=>{
displayWish()
 },[])
  return (
    <>
    <h2>Wishlist Details</h2>
    {wishData?<div className="bg-light w-75 m-auto py-2">
    <h4>Number of Items:{wishData.count}</h4>
      
    {wishData.data.map((pro , index)=> <div key={index} className="row my-2 border-bottom">
        <div className="col-md-2">
          <img src={pro.imageCover} className="w-100" alt="" />
        </div>
        <div className="col md-10">
          <h4>{pro.title}</h4>
          
          <div className='d-flex justify-content-between'>
            <div><h5>{pro.price}</h5></div>
            <div>
              <button  className='btn btn-warning mx-2'>+</button>
              <span>{pro.count}</span>
              <button  className='btn btn-warning mx-2'>-</button>
            </div>
          </div>
          <button className='btn'><i className="fas fa-trash-can text-danger "></i>Remove</button>
        </div>
      </div>)}
      <div className='p-auto'>
      {/* <Link to={`/Checkout/${CartData.data._id}`} className='btn btn-warning w-75'>Check Out</Link> */}
      </div>


    </div>:''}
    
    </>
  )
}

