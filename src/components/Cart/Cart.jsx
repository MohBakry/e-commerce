import React, { useState } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext'
import style from './Cart.module.css'


export default function Cart() {
  let [CartData,SetCartDAta]=useState(null)
  let {getLoggedCart,DeleteFromCart, UpdateCart ,setCartnum}= useContext(CartContext)
  async function displayCart(){
    let {data}=await getLoggedCart()
    setCartnum(data.numOfCartItems);
    SetCartDAta(data)
    
  
  }
  async function DeleteItem(id){
    let {data}=await DeleteFromCart(id)
    setCartnum(data.numOfCartItems);
    SetCartDAta(data)
    

  }
  async function updateItems(id,count){
    let {data} =await UpdateCart(id,count)
    SetCartDAta(data)
    console.log(data);
    
  }
  useEffect(()=>{
    displayCart()
  },[])
  return (
    <>
    <h2>Cart Details</h2>
    {CartData?   <div className="bg-light w-75 m-auto py-2">
      <h4>Number of Items:{CartData.numOfCartItems}</h4>
      <h4>Total Price:{CartData.data.totalCartPrice}</h4>
      <h6>ID: {CartData.data._id}</h6>
     
     {CartData.data.products.map((pro , index)=> <div key={index} className="row my-2 border-bottom">
        <div className="col-md-2">
          <img src={pro.product.imageCover} className="w-100" alt="" />
        </div>
        <div className="col md-10">
          <h4>{pro.product.title}</h4>
          
          <div className='d-flex justify-content-between'>
            <div><h5>{pro.price}</h5></div>
            <div>
              <button onClick={()=>{updateItems(pro.product.id, pro.count +1 )}} className='btn btn-warning mx-2'>+</button>
              <span>{pro.count}</span>
              <button onClick={()=>{updateItems(pro.product.id, pro.count -1 )}}  className='btn btn-warning mx-2'>-</button>
            </div>
          </div>
          <button  onClick={()=>{ DeleteItem(pro.product.id)}} className='btn'><i className="fas fa-trash-can text-danger "></i>Remove</button>
        </div>
      </div>)}
      <div className='p-auto'>
      <Link to={`/Checkout/${CartData.data._id}`} className='btn btn-warning w-75'>Check Out</Link>
      </div>

    </div>:''}
    </>
  )
}

