import React, { useEffect,useState } from 'react'
import { Helmet } from 'react-helmet';
import { useLoaderData } from 'react-router-dom';

const Feedback = () => {
    const [Feedback, setFeedback] =useState([]);
    // useEffect(() => {
    //     fetch('./feedback.json')
    //     .then(res => res.json())
    //     .then(data => setFeedback(data))
    // },[])
    const data = useLoaderData();

    useEffect(() => {
      if (data && data.length > 0) {
        setFeedback(data); // Update state with data from the loader
      }
    }, [data]);
    const {rating} = Feedback;
    const ratingFeedback=(index)=>{
        return(
            <div className="rating">
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-customColor" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-customColor" defaultChecked />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-customColor" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-customColor" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-customColor" />
</div>
        )
    }
    
  return (
    <div>
      <Helmet>
        <title>Customer-Feedback | Gadget Heaven</title>
      </Helmet>
      <div className='text-center grid gap-5 banner-background p-10 lg:p-20 my-10'>
        <h1 className='text-6xl font-bold text-white'>Customer Feedback</h1>
        <p className='text-xl font-base text-white'>Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
      </div>
      <div>
      {Feedback.map(product => (
          <div className='flex border-2 rounded-3xl m-10 lg:w-[80%] mx-auto'>
            <div className='lg:flex gap-10 p-5'>
            <div>
              <img src={product.customerImage} alt=""  className='h-[200px] w-[200px] rounded-2xl'/>
            </div>
            <div className='items-center grid'> 
              <h1 className='text-xl font-sm'>Customer Name: <span className='text-2xl font-bold'>{product.customerName}</span></h1>
              <p className='text-lg'>Product: <span className='text-xl font-bold'>{product.productName}</span></p>
              <p className='text-lg'>Feedback: <span className='text-xl font-bold'>{product.customerFeedback}</span></p>
              <p className='text-lg font-bold'>Rating:</p>
              <div className='flex gap-2'>
              <p>{ratingFeedback(rating)}</p>
              <p className='text-xl font-bold bg-gray-300 px-2 py-1 rounded-3xl'>{product.rating}.00</p>
              </div>
            </div>

            </div>
            </div>
          ))}
      </div>
      <div className='text-center m-20 border-2 bg-customColor p-20 w-[80%] mx-auto rounded-3xl'>
        <h2 className='text-5xl font-bold mb-10 text-white'>Give us your Feedback !</h2>
        <div className="rating rating-lg rating-half">
  <input type="radio" name="rating-10" className="rating-hidden" />
  <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-1 bg-white" />
  <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-white" defaultChecked/>
  <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-1 bg-white" />
  <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-white" />
  <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-1 bg-white" />
  <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-white" />
  <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-1 bg-white" />
  <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-white" />
  <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-1 bg-white" />
  <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-white" />
</div>
      </div>
    </div>
  )
}

export default Feedback
