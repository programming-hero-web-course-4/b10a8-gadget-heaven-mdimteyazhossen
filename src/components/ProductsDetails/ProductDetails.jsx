import React, { useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import { addToProduct, addToWish } from '../../utility/addToDB';
// import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet';

const ProductDetails = ({toast}) => {
    const {product_id} = useParams();
    const data = useLoaderData();
    const product = data.find(product => product.product_id === product_id)
    const {product_image,product_title,rating,specifications,description,price}=product;
    const [disabledButtons, setDisabledButtons] = useState({});
    console.log(product)
    const handleAddCart =(id)=>{
      addToProduct(id)
      const storedCart = localStorage.getItem('cart-list');
      const cartArray = JSON.parse(storedCart);
      
    }
    const handleAddWish =(id)=>{
      addToWish(id)
      const storedWishlist = localStorage.getItem('wish-list');
      const wishlistArray = JSON.parse(storedWishlist);
  }
    const ratingProduct=(index)=>{
      if(index==3){
        return (
          <div className="rating rating-md">
            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400"/>
            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" defaultChecked />
            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
          </div>
        )
      }
      else if(index==4){
        return (
          <div className="rating rating-md">
            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400"/>
            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" defaultChecked />
            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
          </div>
        )
      }
      else{
        return (
          <div className="rating rating-md">
            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400"/>
            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" defaultChecked/>
          </div>
        )
      }
    }
    const handleButtonClick = (id) => {
      setDisabledButtons((prevState) => ({
        ...prevState,
        [id]: true,  
      }));
      console.log(id)
    };
  return (
    <div className='mt-10'>
      <Helmet>
        <title>Product-Deatails | Gadget Heaven</title>
      </Helmet>
      <div className='banner-background h-[470px] text-center p-16'>
      <h1 className='text-6xl font-semibold text-white'>Product Details</h1>
      <p className='text-xl font-base text-white mt-5'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
      </div>
      <div className='h-[620px] w-4/5 grid grid-cols-2 mx-auto justify-between border-2 p-10 rounded-3xl mt-[-250px] bg-white mb-20'>
        <div>
          <img src={product_image} alt="" className='h-[500px]'/>
        </div>
        <div className='items-center grid gap-2'>
          <h1 className='text-5xl font-bold'>{product_title}</h1>
          <p className='text-3xl font-bold'>Price:$ {price} </p>
          <button className='p-2 px-5 border-2 rounded-full text-xl font-bold bg-green-400 w-[200px]'>In Stock</button>
          <p className='text-xl font-bold text-gray-500'>{description}</p>
          <div>
          <p className='text-2xl font-bold'>Specification:</p>
            <ol style={{ listStyleType: 'decimal' }}>
            {
              specifications.map(speci=>(<li className='ml-14'>{speci}</li>))
            }
            </ol>
          </div>
          <h2 className='text-2xl font-bold'>Rating: </h2>
          <div className='flex gap-2'>
            <h2>{ratingProduct(rating)}</h2>
            <h2 className='text-xl font-bold bg-gray-300 px-2 py-1 rounded-3xl'>{rating}.00</h2>

          </div>
          <div className='flex gap-5'>
            <button onClick={()=>handleAddCart(product_id)} className='btn rounded-full px-10 text-xl border-2 button-color'>Add To Card <i className="fa-solid fa-cart-shopping"></i></button>
            <button onClick={()=>{handleAddWish(product_id),handleButtonClick(product_id)}} disabled={disabledButtons[product_id]}   className='btn rounded-full text-xl border-2 banner-background text-white h-[55px]'><i className="fa-regular fa-heart"></i></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
