import React from "react";
import {toast } from "react-toastify";  // Import ToastContainer and toast
import "react-toastify/dist/ReactToastify.css";
// Card
const getProduct = () =>{
    const storedProductStr = localStorage.getItem('cart-list');
    if(storedProductStr){
        const storedProduct = JSON.parse(storedProductStr);
        return storedProduct
    }
    else{
        return [];
    }
}

const addToProduct =(id)=>{
    const storedProduct =getProduct();
    if(storedProduct.includes(id)){
        toast.warn('already exist in cartList',{
            position:"top-center"
        });
    }
    else{
        storedProduct.push(id);
        const storedProductStr = JSON.stringify(storedProduct);
        localStorage.setItem('cart-list',storedProductStr)
        toast.success("Added in CartList",{
            position: "top-center",
        })
    }

}
// wish
const getWishProduct = () =>{
    const storedWishStr = localStorage.getItem('wish-list');
    if(storedWishStr){
        const storedWishProduct = JSON.parse(storedWishStr);
        return storedWishProduct
    }
    else{
        return [];
    }
}

const addToWish =(id)=>{
    const storedWishProduct =getWishProduct();
    if(storedWishProduct.includes(id)){
        toast.warn('already exist in wishList',{
            position:"top-center"
        });
    }
    else{
        storedWishProduct.push(id);
        const storedWishStr = JSON.stringify(storedWishProduct);
        localStorage.setItem('wish-list',storedWishStr)
        toast.success("Added in WishList",{
            position: "top-center",
        })
    }

}

export {addToProduct, getProduct, addToWish ,getWishProduct}