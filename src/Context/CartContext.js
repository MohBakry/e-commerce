import axios from "axios";
import { createContext, useState } from "react";

export let CartContext=createContext()
export default function CartContextProviver(props) {
     let [cartnum ,setCartnum] =useState(0)
let headers={
      token:localStorage.getItem('token')
     
}
function addToCart(id){
      return axios.post(`https://ecommerce.routemisr.com/api/v1/cart` , {
            productId:id
      } , {headers}).then((resp)=>resp).catch((err)=>err)
}
function getLoggedCart(){
      return axios.get(`https://ecommerce.routemisr.com/api/v1/cart` , {
            headers})
}
function DeleteFromCart(id){
      return axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}` ,{headers})

}

function UpdateCart(id , count){
      return axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}` ,{count} ,{headers}).then((resp)=>resp).catch((err)=>err)

}

function Payment( id , shippingAddress){
      return axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${id}?url=http://localhost:3000` ,
       {shippingAddress}, {headers}).then((res)=>res).catch((err)=>err)
}
      

return <CartContext.Provider value={{addToCart ,getLoggedCart,DeleteFromCart,UpdateCart,cartnum ,setCartnum , Payment}}>
      {props.children}
</CartContext.Provider>
}