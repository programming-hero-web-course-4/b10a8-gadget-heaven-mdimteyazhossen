import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Cart = ({cartList,setcartList,modalImg,allProducts, toast}) => {
  const [dis, setDis] =useState(false)
  // const [sort, setSort] = useState('')
  let coin=0;
  const handleSort =()=>{
    setcartList([...cartList].sort((a,b)=>b.price-a.price))
  }
  let p=0;
  cartList.map( pro =>{
    coin+=pro.price;
    
  })
  p=coin
  console.log(p)
  const handleRemove =()=>{
      localStorage.removeItem('cart-list')
  }
  const handlemodal =() =>{
    document.getElementById('my_modal_5').showModal()
    handleRemove()
    
  }
  const close=()=>{
    setcartList([])
  }
  const removeCart=(id)=>{
    let cart = JSON.parse(localStorage.getItem('cart-list'));
    cart = cart.filter(item => item !== id);
    localStorage.setItem('cart-list', JSON.stringify(cart));
    const cartUpdate = allProducts.filter(product =>cart.includes
      (product.product_id)
    )
    // // // window.location.reload();
    setcartList(cartUpdate);
    // console.log(cart)
    toast.warn("remove product from cartList",{
      position:"top-right"
    })
  }
  useEffect(() => {
    // If the cart is empty (length 0), setDis to true. Otherwise, setDis to false.
    setDis(cartList.length === 0);
  }, [cartList]);
  console.log(dis)
  return (
    <div>
        <div className='lg:flex grid gap-5 justify-between w-4/5 mx-auto my-20'>
          <h1 className='text-4xl font-semibold'>Cart</h1>
          <div className='lg:flex grid gap-5'>
            <h1 className='text-4xl font-semibold'>Total cost:${coin.toFixed(2)}</h1>
            <button onClick={handleSort} className='btn px-5 border-2 text-2xl rounded-full button-color px-5'>Sort by Price <i class="fa-solid fa-timeline"></i></button>
            <button onClick={()=>handlemodal()} className='btn px-5 border-2 banner-background text-white text-2xl rounded-full px-5' disabled={dis}>Purchase</button>
          </div>
        </div>
        <div>
          {cartList.map(product => (
          <div className='flex border-2 rounded-3xl m-10 lg:w-[80%] mx-auto justify-between'>
            <div className='lg:flex gap-10 p-5'>
            <div>
              <img src={product.product_image} alt=""  className='h-[150px] w-[150px]'/>
            </div>
            <div className='items-center grid'> 
              <h1 className='text-2xl font-bold'>{product.product_title}</h1>
              <p className='text-lg font-bold'>{product.description}</p>
              <p className='text-lg font-bold'>Price: $ {product.price}</p>
            </div>
            </div>
            <div onClick={()=>removeCart(product.product_id)} className='mt-5 mr-5'><button className='w-[35px] border-2 rounded-full border-red-500'><i className="fa-solid fa-xmark" style={{color:"red" , fontSize:"30px"}}></i></button></div>
          </div>
          ))}
          {cartList.length === 0 && (<h1 className='text-5xl font-normal text-center m-20'>No product select in Add to Cart...</h1>)}
        </div>
        <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
{/* <button className="btn" onClick={()=>document.getElementById('my_modal_5').showModal()}>open modal</button> */}
<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box p-10 grid gap-5">
    <img src={modalImg} alt=""  className='mx-auto'/>
    <h3 className="font-bold text-4xl text-center pt-5">Payment Successfully</h3>
    <p className=" font-bold text-2xl text-center">Thanks for purchasing.</p>
    <p className=" font-bold text-2xl text-center">Total:{coin.toFixed(2)}$</p>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <Link to="/"><button onClick={close} className="btn w-[400px] mr-5">Close</button></Link>
      </form>
    </div>
  </div>
</dialog>
    </div>
      </div>
  )
}

export default Cart
