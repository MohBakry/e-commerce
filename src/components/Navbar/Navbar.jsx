import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext'
import { CounterContext } from '../../Context/CounterContext'
import { UserContext } from '../../Context/UserContext'
import style from './Navbar.module.css'
import img from '../../asstes/logo.jpg'


export default function Navbar() {
  let { cartnum } = useContext(CartContext)

  let navigate = useNavigate()
  let { UserToken, SetUserToken } = useContext(UserContext)
  function logout() {
    localStorage.removeItem('token')
    SetUserToken(null)
    navigate('/Login')
  }
  return (


    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top  " style={{ margi: '200px' }}>
        <div className="container-fluid ">
          <a className="navbar-brand" href="#"><img src={img} width="150px" alt="" /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {UserToken != null ? <>   <li className="nav-item">
                <Link className="nav-link" to="Home">Home </Link>
              </li>
                <li className="nav-item">
                  <Link className="nav-link position-relative" to="Cart">Cart

                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      {cartnum}

                    </span>

                  </Link>
                </li>
                {/* <li className="nav-item">
                  <Link className="nav-link" to="Product">Product</Link>
                </li> */}
                <li className="nav-item">
                  <Link className="nav-link" to="Categories">Categories</Link>

                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="Brands">Brands</Link>

                </li>
                <li className="nav-item">
                  <Link className="nav-link position-relative" to="WishList">WishList

                    {/* <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      {cartnum}

                    </span> */}

                  </Link>
                </li>
                </> : ''}


            </ul>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item d-flex align-items-center">
                <i className="fab mx-2 fa-facebook"></i>
                <i className="fab mx-2 fa-twitter"></i>
                <i className="fab mx-2 fa-youtube"></i>
                <i className="fab mx-2 fa-tiktok"></i>
              </li>
              {UserToken != null ? <><li className="nav-item">
                <span className="nav-span" onClick={logout}>Logout</span>
              </li></> : <><li className="nav-item">
                <Link className="nav-link" to="Login">Login</Link>
              </li>
                <li className="nav-item">
                  <Link className="nav-link" to="Register">Register</Link>
                </li></>}



            </ul>

          </div>
        </div>
      </nav>
      <br />
      <br />
      <br />
      <br />
    </>
  )
}

