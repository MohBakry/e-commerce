import React from 'react'
import style from './Footer.module.css'

export default function Footer() {
  return (
    <>
  
   <div className=" p-5 b-0 position-absolute w-100" style={{backgroundColor:'#DCE1E2'}}>
      <div className="container">
        
      <h3>Get The FreshCart App</h3>
      <h6>We will send you a link, open it from your phone to download the app</h6>
      <div className="row m-4">
        
        <div class="col-xs-9 col-sm-9 col-md-9 col-lg-9">
          <input type="email" className='form-control w-100 mt-4' placeholder='Email..'  />
        </div>
        
        <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
          <button className='btn btn-warning w-100 mt-4'>Share App Link</button>
        </div>
        
        
      </div>
      <hr />
      <div className='d-flex justify-content-between'>
        <div>
          Payment Partners

        </div>
        <div>
          Get Deliveries With FreshCart
        </div>

      </div>
      <hr />
      </div>
    </div>
   
    
    </>
  )
}

