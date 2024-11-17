import React from 'react'
import { Link } from 'react-router-dom';

const Product = ({product}) => {
  console.log(product)
    const {product_id, product_title, product_image, price} = product;
    return (
        <div className="card bg-base-100 shadow-xl">
  <figure className="px-10 pt-10 h-[300px]">
    <img
      src={product_image}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-left text-left">
    <h2 className="card-title">{product_title}</h2>
    <p>Price: {price}</p>
    <div className="card-actions">
      <Link to={`/products/${product_id}`}>
      <button className="p-2 px-5 border-2 rounded-full button-color text-lg">View Details</button>
      </Link>
    </div>
  </div>
</div>
  )
}

export default Product
