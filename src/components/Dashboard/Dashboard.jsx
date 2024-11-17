import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import { getProduct,getWishProduct } from '../../utility/addToDB';
import Cart from '../Cart/Cart';
import WishList from '../WishList/WishList';
import { Helmet } from 'react-helmet';

const Dashboard = ({modalImg, toast}) => {
  const [yes,setyes]= useState(true);
  const [cartList, setcartList] = useState([])
  const [wishList, setwishList] = useState([])
  const [button1,setbutton1] = useState("rgb(149,56,226)")
  const [button2,setbutton2] = useState("rgb(256,256,256)")
  const [button3,setbutton3] = useState("rgb(256,256,256)")
  const [button4,setbutton4] = useState("rgb(149, 56, 226)")
  const allProducts= useLoaderData();
  // const [coin, setCoin] = useState(0)
  useEffect(()=>{
    const storedProducts =getProduct();
    // console.log(storedProducts)
    const cartProducts = allProducts.filter(product =>storedProducts.includes
      (product.product_id)
    )
    setcartList(cartProducts);
  },[])
  useEffect(()=>{
    const storedWishProducts =getWishProduct();
    console.log(storedWishProducts)
    const wishProducts = allProducts.filter(product =>storedWishProducts.includes
      (product.product_id)
    )

    setwishList(wishProducts);

  },[])
  const button1Color=()=>{
    setbutton2('rgb(256,256,256)')
    setbutton1('rgb(149,56,226)')
    setbutton3('rgb(256,256,256)')
    setbutton4('rgb(149,56,226)')
  }
  const button2Color=()=>{
    setbutton1('rgb(256,256,256)')
    setbutton2('rgb(149,56,226)')
    setbutton4('rgb(256,256,256)')
    setbutton3('rgb(149,56,226)')
  }
  return (
    <div>
      <Helmet>
      <title>Dashboard | Gadget Heaven</title>
      </Helmet>
      <div className='text-center grid gap-5 banner-background p-10 mt-10 lg:p-20'>
        <h1 className='text-6xl font-bold text-white'>Dashboard</h1>
        <p className='text-xl font-base text-white'>Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
        <div className='flex mx-auto gap-10'>
          <button style={{color:button1,backgroundColor:button2}} onClick={()=>{setyes(true),button1Color()}} className='btn w-[130px] text-xl font-bold rounded-full border-2'>Cart</button>
          <button style={{color:button3,backgroundColor:button4}} onClick={()=>{setyes(false),button2Color()}} className='btn w-[130px] text-xl font-bold rounded-full border-2'>Wishlist</button>
        </div>
      </div>
      {yes ?<Cart cartList={cartList} modalImg={modalImg} allProducts={allProducts} setcartList={setcartList} toast={toast}/> : <WishList toast={toast} setcartList={setcartList} wishList={wishList} allProducts={allProducts} setwishList={setwishList}/>}
    </div>
  )
}

export default Dashboard
