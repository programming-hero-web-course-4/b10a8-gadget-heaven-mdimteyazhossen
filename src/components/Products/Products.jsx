import React, { useEffect, useState } from 'react'
import Product from '../Product/Product';
const Products = () => {
  const [products, setProducts] = useState([]);
  const [catagoryItem, setCatagoryItem] = useState();
  const [yes,setyes]=useState(true)
  useEffect(() => {
    fetch('./items.json')
    .then(res => res.json())
    .then(data => setProducts(data))
  },[])
  const [btnall,setBtnall] = useState({backgroundColor:"none",textColor:"none"})
  const [btnlaptop,setBtnlaptop] =  useState({backgroundColor:"none",textColor:"none"})
  const [btncomputer,setBtncomputer] =  useState({backgroundColor:"none",textColor:"none"})
  const [btnmobile,setBtnmobile] =  useState({backgroundColor:"none",textColor:"none"})
  const [btnsmartwatch,setBtnsmartwatch] =  useState({backgroundColor:"none",textColor:"none"})
  const [btnbattery,setBtnbattery] =  useState({backgroundColor:"none",textColor:"none"})
  const [btnIphone,setBtnIphone] =  useState({backgroundColor:"none",textColor:"none"})
  const all=()=>{
    const info= products;
    setCatagoryItem(info)
    setBtnall({backgroundColor:"rgb(149, 56, 226)",textColor:"rgb(256,256,256)"})
    setBtnlaptop({backgroundColor:"rgba(0,0,0,0.05)",textColor:"rgb(0,0,0)"})
    setBtncomputer({backgroundColor:"rgba(0,0,0,0.05)",textColor:"rgb(0,0,0)"})
    setBtnmobile({backgroundColor:"rgba(0,0,0,0.05)",textColor:"rgb(0,0,0)"})
    setBtnsmartwatch({backgroundColor:"rgba(0,0,0,0.05)",textColor:"rgb(0,0,0)"})
    setBtnbattery({backgroundColor:"rgba(0,0,0,0.05)",textColor:"rgb(0,0,0)"})
    setBtnIphone({backgroundColor:"rgba(0,0,0,0.05)",textColor:"rgb(0,0,0)"})
  }
  const laptop=()=>{
    const info= products.filter( product => product.category==="Laptops")
    setCatagoryItem(info)
    setBtnall({backgroundColor:"rgba(0,0,0,0.05)",textColor:"rgb(0,0,0)"})
    setBtnlaptop({backgroundColor:"rgb(149, 56, 226)",textColor:"rgb(256,256,256)"})
    setBtncomputer({backgroundColor:"rgba(0,0,0,0.05)",textColor:"rgb(0,0,0)"})
    setBtnmobile({backgroundColor:"rgba(0,0,0,0.05)",textColor:"rgb(0,0,0)"})
    setBtnsmartwatch({backgroundColor:"rgba(0,0,0,0.05)",textColor:"rgb(0,0,0)"})
    setBtnbattery({backgroundColor:"rgba(0,0,0,0.05)",textColor:"rgb(0,0,0)"})
    setBtnIphone({backgroundColor:"rgba(0,0,0,0.05)",textColor:"rgb(0,0,0)"})
  }
  const computer=()=>{
    const info= products.filter( product => product.category==="Computers")
    setCatagoryItem(info)
    setBtnall({backgroundColor:"rgba(0,0,0,0.05)",textColor:"rgb(0,0,0)"})
    setBtnlaptop({backgroundColor:"rgba(0,0,0,0.05)",textColor:"rgb(0,0,0)"})
    setBtncomputer({backgroundColor:"rgb(149, 56, 226)",textColor:"rgb(256,256,256)"})
    setBtnmobile({backgroundColor:"rgba(0,0,0,0.05)",textColor:"rgb(0,0,0)"})
    setBtnsmartwatch({backgroundColor:"rgba(0,0,0,0.05)",textColor:"rgb(0,0,0)"})
    setBtnbattery({backgroundColor:"rgba(0,0,0,0.05)",textColor:"rgb(0,0,0)"})
    setBtnIphone({backgroundColor:"rgba(0,0,0,0.05)",textColor:"rgb(0,0,0)"})
  }
  const mobile=()=>{
    const info= products.filter( product => product.category==="Phones")
    setCatagoryItem(info)
    setBtnall({backgroundColor:"rgba(0,0,0,0.05)",textColor:"rgb(0,0,0)"})
    setBtnlaptop({backgroundColor:"rgba(0,0,0,0.05)",textColor:"rgb(0,0,0)"})
    setBtncomputer({backgroundColor:"rgba(0,0,0,0.05)",textColor:"rgb(0,0,0)"})
    setBtnmobile({backgroundColor:"rgb(149, 56, 226)",textColor:"rgb(256,256,256)"})
    setBtnsmartwatch({backgroundColor:"rgba(0,0,0,0.05)",textColor:"rgb(0,0,0)"})
    setBtnbattery({backgroundColor:"rgba(0,0,0,0.05)",textColor:"rgb(0,0,0)"})
    setBtnIphone({backgroundColor:"rgba(0,0,0,0.05)",textColor:"rgb(0,0,0)"})
  }
  const smartWatchs=()=>{
    const info= products.filter( product => product.category==="Smart Watches")
    setCatagoryItem(info)
    setBtnall({backgroundColor:"rgba(0,0,0,0.05)",textColor:"rgb(0,0,0)"})
    setBtnlaptop({backgroundColor:"rgba(0,0,0,0.05)",textColor:"rgb(0,0,0)"})
    setBtncomputer({backgroundColor:"rgba(0,0,0,0.05)",textColor:"rgb(0,0,0)"})
    setBtnmobile({backgroundColor:"rgba(0,0,0,0.05)",textColor:"rgb(0,0,0)"})
    setBtnsmartwatch({backgroundColor:"rgb(149, 56, 226)",textColor:"rgb(256,256,256)"})
    setBtnbattery({backgroundColor:"rgba(0,0,0,0.05)",textColor:"rgb(0,0,0)"})
    setBtnIphone({backgroundColor:"rgba(0,0,0,0.05)",textColor:"rgb(0,0,0)"})
  }
  const battery=()=>{
    const info= products.filter( product => product.category==="Computers")
    setCatagoryItem([])
    setyes(false);
    setBtnall({backgroundColor:"rgba(0,0,0,0.05)",textColor:"rgb(0,0,0)"})
    setBtnlaptop({backgroundColor:"rgba(0,0,0,0.05)",textColor:"rgb(0,0,0)"})
    setBtncomputer({backgroundColor:"rgba(0,0,0,0.05)",textColor:"rgb(0,0,0)"})
    setBtnmobile({backgroundColor:"rgba(0,0,0,0.05)",textColor:"rgb(0,0,0)"})
    setBtnsmartwatch({backgroundColor:"rgba(0,0,0,0.05)",textColor:"rgb(0,0,0)"})
    setBtnbattery({backgroundColor:"rgb(149, 56, 226)",textColor:"rgb(256,256,256)"})
    setBtnIphone({backgroundColor:"rgba(0,0,0,0.05)",textColor:"rgb(0,0,0)"})
  }
  const iphone=()=>{
    const info= products.filter( product => product.category==="Computers")
    setCatagoryItem([])
    setyes(false);
    setBtnall({backgroundColor:"rgba(0,0,0,0.05)",textColor:"rgb(0,0,0)"})
    setBtnlaptop({backgroundColor:"rgba(0,0,0,0.05)",textColor:"rgb(0,0,0)"})
    setBtncomputer({backgroundColor:"rgba(0,0,0,0.05)",textColor:"rgb(0,0,0)"})
    setBtnmobile({backgroundColor:"rgba(0,0,0,0.05)",textColor:"rgb(0,0,0)"})
    setBtnsmartwatch({backgroundColor:"rgba(0,0,0,0.05)",textColor:"rgb(0,0,0)"})
    setBtnIphone({backgroundColor:"rgb(149, 56, 226)",textColor:"rgb(256,256,256)"})
    setBtnbattery({backgroundColor:"rgba(0,0,0,0.05)",textColor:"rgb(0,0,0)"})
  }
  console.log(catagoryItem)
  return (
    <div className='grid  gap-20 my-10 lg:m-20'>
      <h2 className='text-5xl font-bold text-center'>Explore Cutting-Edge Gadgets</h2>
      <div className='lg:flex justify-between'>
      <div className='grid h-[550px] gap-3 p-5 border-2 lg:w-[20%] rounded-3xl'>
        <button style={{backgroundColor:btnall.backgroundColor, color:btnall.textColor}} onClick={all} className='btn text-2xl font-semibold rounded-full'>All</button>
        <button style={{backgroundColor:btnlaptop.backgroundColor, color:btnlaptop.textColor}} onClick={laptop} className='btn text-2xl font-semibold rounded-full'>Laptops</button>
        {/* <button style={{backgroundColor:btncomputer.backgroundColor, color:btncomputer.textColor}} onClick={computer} className='btn text-2xl font-semibold rounded-full'>computer</button> */}
        <button style={{backgroundColor:btnmobile.backgroundColor, color:btnmobile.textColor}} onClick={mobile} className='btn text-2xl font-semibold rounded-full'>Phones</button>
        <button style={{backgroundColor:btnbattery.backgroundColor, color: btnbattery.textColor}} onClick={battery} className='btn text-2xl font-semibold rounded-full'>Accessories</button>
        <button style={{backgroundColor:btnsmartwatch.backgroundColor, color: btnsmartwatch.textColor}} onClick={smartWatchs} className='btn text-2xl font-semibold rounded-full'>Smart Watch</button>
        <button style={{backgroundColor:btncomputer.backgroundColor, color: btncomputer.textColor}} onClick={computer} className='btn text-2xl font-semibold rounded-full'>MacBook</button>
        <button style={{backgroundColor:btnIphone.backgroundColor, color: btnIphone.textColor}} onClick={iphone} className='btn text-2xl font-semibold rounded-full'>Iphone</button>

      </div>
      <div className='grid lg:grid-cols-3 gap-5 my-20 lg:w-[70%]'>
      {(catagoryItem ? catagoryItem.map(product => <Product key={product.product_id} product={product}/>) : products.map(product => <Product key={product.product_id} product={product}/>))}
      {/* {(catagoryItem.map(product => <Product key={product.product_id} product={product}/>))} */}
      {/* {catagoryItem.length === 0 && (<h1 className='text-5xl font-normal text-center m-20'>No data select in WishList...</h1>)} */}
      {(catagoryItem || []).length === 0 && yes===false && <h1 className='text-5xl font-bold text-center w-[450px]'>No data found...</h1>}
      </div>
      </div>
      
    </div>
  )
}

export default Products
