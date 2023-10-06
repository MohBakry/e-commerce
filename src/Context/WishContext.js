import axios from "axios";
import { Children, createContext } from "react";

export let WishContext=createContext()
export default function WishContextProvider(props){
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
return <>
<WishContext.Provider value={{addToWish ,getLoggedWish}}>
      {props.children}
</WishContext.Provider>

</>

}