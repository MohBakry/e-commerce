import axios from "axios";
import { Children, createContext, useState } from "react";

export let WishContext=createContext()
export default function WishContextProvider(props){
      let [Wishnum ,setWishnum] =useState(0)
      let headers={
            token:localStorage.getItem('token')
      }
function addToWish(id){
      return axios.post(`https://ecommerce.routemisr.com/api/v1/wishlist`,{
            productId:id
      } , {headers}).then((resp)=>resp).catch((err)=>err)
      
}
function getLoggedWish(){
      return axios.get(`https://ecommerce.routemisr.com/api/v1/wishlist` , {
            headers})}
function deleteFromWish(id){
      return axios.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${id}`,{headers})
}
return <>
<WishContext.Provider value={{Wishnum ,setWishnum , addToWish ,getLoggedWish,deleteFromWish }}>
      {props.children}
</WishContext.Provider>

</>

}