import React from 'react'
import { Link } from 'react-router-dom'

const Banner = ({banner}) => {
  return (
    <div>
        <div className='text-center banner-background lg:p-20 rounded-b-3xl text-white grid gap-5 lg:h-[600px] pb-[200px] lg:pb-[300px] pt-10'>
            <h1 className='text-4xl lg:text-6xl font-bold'>Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories</h1>
            <p className='text-lg'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            <Link to="dashboard"><button className='text-lg font-bold border-8 border-cyan-800 rounded-full bg-slate-500 w-[150px] h-[60px] mx-auto'>Shop Now</button></Link>
        </div>
        <div className='w-[95%] lg:w-4/5 mx-auto mt-[-250px]'>
            <img src={banner} alt="" className='lg:h-[500px] w-full border-8  rounded-3xl border-gray-700' />
        </div>
    </div>
  )
}

export default Banner
