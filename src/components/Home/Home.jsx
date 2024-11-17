import React, { useEffect, useState } from 'react'
import Banner from '../Banner/Banner'
import Products from '../Products/Products'
import { Helmet } from 'react-helmet'


const Home = ({banner}) => {
  return (
    <div className='w-[90%] mx-auto bg-color'>
      <Helmet>
        <title>Home | Gadget Heaven</title>
      </Helmet>
      <Banner banner={banner}/>
      <Products/>
    </div>
  )
}

export default Home
