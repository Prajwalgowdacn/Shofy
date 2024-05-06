import React, { useContext, useState } from 'react'
import { Form, FormControl } from "react-bootstrap";
import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../uploads/logo.svg";
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

// import Slider from '../Slider/Slider';

export const Navbar = () => {
  const [menu,setMenu] =useState('home')
  const {getTotalCartItems}= useContext(ShopContext)
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const handleLogout = () => {
    setIsLoggedIn(false);
    // Perform any additional logout actions if needed
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const searchValue = event.target.elements.search.value;
    window.location.href = `${searchValue}`;
  };

  return (<div>
    <div className="container">
      <div className="navbar">
        <div className="nav-logo">
          <img src={logo} alt="logo" />
        </div>
        <ul className="nav-menu">
          <li onClick={()=>{setMenu("home")}}><Link style={{color: 'black'}} to='/'>Home</Link> {menu==='home'?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("mens")}}><Link style={{color: 'black'}} to='/mens'>Mens</Link> {menu==='mens'?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("womens")}}><Link style={{color: 'black'}} to='/womens'>Womens</Link> {menu==='womens'?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("kids")}}><Link style={{color: 'black'}} to='/kids'>Kids</Link> {menu==='kids'?<hr/>:<></>}</li>
         
        </ul>
        <Form inline onSubmit={handleSubmit}>
          <FormControl
            type="text"
            placeholder="Search"
            className="search-bar"
            name='search'
          />
            {/* <Button variant="outline-success">Search</Button> */}
        </Form>
        <div className="nav-wish-cart">
          <svg
            className="icon"
            width="20"
            height="19"
            viewBox="0 0 20 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.8396 17.3319V3.71411"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M19.1556 13L15.0778 17.0967L11 13"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M4.91115 1.00056V14.6183"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M0.833496 5.09667L4.91127 1L8.98905 5.09667"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
          <svg
            className="icon"
            width="22"
            height="20"
            viewBox="0 0 22 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.239 18.8538C13.4096 17.5179 15.4289 15.9456 17.2607 14.1652C18.5486 12.8829 19.529 11.3198 20.1269 9.59539C21.2029 6.25031 19.9461 2.42083 16.4289 1.28752C14.5804 0.692435 12.5616 1.03255 11.0039 2.20148C9.44567 1.03398 7.42754 0.693978 5.57894 1.28752C2.06175 2.42083 0.795919 6.25031 1.87187 9.59539C2.46978 11.3198 3.45021 12.8829 4.73806 14.1652C6.56988 15.9456 8.58917 17.5179 10.7598 18.8538L10.9949 19L11.239 18.8538Z"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M7.26062 5.05302C6.19531 5.39332 5.43839 6.34973 5.3438 7.47501"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
          <Link style={{color: 'black'}} to='/cart'><svg
            className="icon "
            width="21"
            height="22"
            viewBox="0 0 21 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6.48626 20.5H14.8341C17.9004 20.5 20.2528 19.3924 19.5847 14.9348L18.8066 8.89359C18.3947 6.66934 16.976 5.81808 15.7311 5.81808H5.55262C4.28946 5.81808 2.95308 6.73341 2.4771 8.89359L1.69907 14.9348C1.13157 18.889 3.4199 20.5 6.48626 20.5Z"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M6.34902 5.5984C6.34902 3.21232 8.28331 1.27803 10.6694 1.27803V1.27803C11.8184 1.27316 12.922 1.72619 13.7362 2.53695C14.5504 3.3477 15.0081 4.44939 15.0081 5.5984V5.5984"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M7.70365 10.1018H7.74942"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M13.5343 10.1018H13.5801"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            
          </svg></Link>
          <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
        {isLoggedIn ? (
              <button className='btn shadow' onClick={handleLogout}>Logout</button>
            ) : (
              <Link to='/login'><button className='btn shadow'>Login</button></Link>
            )}
      </div>
    </div>
    {/* <Slider/> */}
    </div>
  );
};


