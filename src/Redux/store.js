import { configureStore } from "@reduxjs/toolkit";
import {BrandReducer} from './BrandSlice'
export let store =configureStore({
      reducer:{
            brands:BrandReducer
      }
})