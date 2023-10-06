import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

let initialState={brands:[],loading:false,errors:null}
export let getBrand =createAsyncThunk(
      'BrandSlice/getBrand',
      async()=>{let {data}=await axios.get('https://ecommerce.routemisr.com/api/v1/brands')
      console.log(data);
      return data.data
      
}
)
let BrandSlice=createSlice({
      name:'BrandSlice',
      initialState,
      extraReducers:{
            [getBrand.pending]:(state,action)=>{
                   state.loading=true
                  },
            [getBrand.fulfilled]:(state,action)=>{
                   state.brands=action.payload
                  state.loading=false
                  },
            [getBrand.rejected]:(state,action)=>{
                  state.errors=action.payload 
                  state.loading=false 
                   
                  },
            }
})
export let BrandReducer= BrandSlice.reducer