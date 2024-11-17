import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { getProduct, getWishProduct } from '../../utility/addToDB'
const Navber = () => {
  const location = useLocation();


  let navbarColor = '';
  let navColor= '';
  if (location.pathname === '/') {
    navbarColor = 'bg-customColor';
    navColor = 'text-white'
  }else {
    navbarColor = 'white';
    navColor ='text-black'
  }
  const links = <>
        <li className='text-xl font-bold'><Link to="/">Home</Link></li>
        <li className='text-xl font-bold'><Link to="/statistics">Statistics</Link></li>
        <li className='text-xl font-bold'><Link to='dashboard'>Dashboard</Link></li>
        <li className='text-xl font-bold'><Link to='feedback'>Customer Feedback</Link></li>
    </>
  const link1 = <Link to="/"><a className="btn btn-ghost text-2xl lg:text-4xl font-bold" >Gadget Heaven</a></Link>
  return (
    <div className={`navbar bg-base-100 w-[90%] mx-auto mt-10 ${navbarColor} rounded-t-3xl ${navColor}`}>
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    {/* <a className="btn btn-ghost text-xl">Gadget Heaven</a> */}
    {link1}
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
        {links}
    </ul>
  </div>
  <div className="navbar-end gap-5">
  {/* <div className="flex-none">
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <span className="badge badge-sm indicator-item">8</span>
        </div>
      </div>
      <div
        tabIndex={0}
        className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
        <div className="card-body">
          <span className="text-lg font-bold">8 Items</span>
          <span className="text-info">Subtotal: $999</span>
          <div className="card-actions">
            <button className="btn btn-primary btn-block">View cart</button>
          </div>
        </div>
      </div>
    </div>
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <span className="badge badge-sm indicator-item">10</span>
        </div>
      </div>
      <div
        tabIndex={0}
        className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
        <div className="card-body">
          <span className="text-lg font-bold">8 Items</span>
          <span className="text-info">Subtotal: $999</span>
          <div className="card-actions">
            <button className="btn btn-primary btn-block">View cart</button>
          </div>
        </div>
      </div>
    </div>
  </div> */}
  <div className="indicator">
  <span className="indicator-item badge badge-secondary">{(getProduct().length)}</span>
  <button className="btn rounded-full"><i class="fa-solid fa-cart-shopping"></i></button>
</div>
<div className="indicator">
  <span className="indicator-item badge badge-secondary">{(getWishProduct().length)}</span>
  <button className="btn border-0 rounded-full"><i class="fa-regular fa-heart"></i></button>
</div>
  </div>
</div>
  )
}

export default Navber
