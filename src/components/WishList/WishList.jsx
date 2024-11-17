import React from 'react'
import { addToProduct } from '../../utility/addToDB';

const WishList = ({wishList,setwishList, allProducts, setcartList, toast}) => {
  const remove=(id)=>{
    let wish = JSON.parse(localStorage.getItem('wish-list'))  || [];
    wish = wish.filter(item => item !== id);
    localStorage.setItem('wish-list', JSON.stringify(wish));
    const wishUpdate = allProducts.filter(product =>wish.includes
      (product.product_id)
    )
    setwishList(wishUpdate)
    toast.warn("remove product from wishList",{
      position: "top-right",
    })
  }
  const addCart =(id)=>{
    addToProduct(id)
    let cart = JSON.parse(localStorage.getItem('cart-list'));
    const cartUpdate = allProducts.filter(product =>cart.includes
      (product.product_id)
    )
    setcartList(cartUpdate);
  }
  return (
    <div>
        <div className='flex w-4/5 mx-auto my-20'>
          <h1 className='text-4xl font-semibold'>Wishlist</h1>
        </div>
        <div>
          {wishList.map(product => (
          <div className='flex border-2 rounded-3xl m-10 w-[80%] mx-auto justify-between'>
            <div className='flex gap-10 p-10'>
            <div>
              <img src={product.product_image} alt=""  className='h-[150px] w-[150px]'/>
            </div>
            <div className='items-center grid gap-5'> 
              <h1 className='text-2xl font-bold'>{product.product_title}</h1>
              <p className='text-lg font-bold'>Description: {product.description}</p>
              <p className='text-lg font-bold'>Price: $ {product.price}</p>
              <button onClick={()=>addCart(product.product_id)} className='btn px-5 border-2 banner-background text-white text-2xl rounded-full px-5 w-[200px]'>Add to Cart</button>
            </div>
            </div>
            <div onClick={()=>remove(product.product_id)} className='mt-5 mr-5'><button className='w-[35px] border-2 rounded-full border-red-500'><i className="fa-solid fa-xmark" style={{color:"red" , fontSize:"30px"}}></i></button></div>
          </div>
          ))}
          {wishList.length === 0 && (<h1 className='text-5xl font-normal text-center m-20'>No product select in WishList...</h1>)}
        </div>
      </div>
  )
}

export default WishList
