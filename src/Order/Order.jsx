import React, { useState } from 'react';
import Cart from '../components/Carts/Cart';
import { useLoaderData } from 'react-router-dom';
import Product from '../components/Product/Product';
import ReviewItem from '../components/ReviewItem/ReviewItem';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';

const Order = () => {
    const saveCart = useLoaderData();
    const [cart, setCart]= useState(saveCart)
    // console.log(saveCart)

    const handleRemoveFromCart = (id)=>{
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining)
        removeFromDb(id)
        console.log(id)
    }

    const handleClearCart = ()=>{
        deleteShoppingCart()
        setCart([])
    }


    return (
        <div className='shop-container'>
           <div className='product-container'>
                <h4>this is our order: {saveCart.length}  </h4>
                {
                    cart.map(product=> <ReviewItem

                        key={product.id}
                        product={product}
                        handleRemoveFromCart = {handleRemoveFromCart}
                    
                    ></ReviewItem>)
                }
           </div>

           <div className='shop-details'>
                <Cart 
                cart={cart}
                handleClearCart = {handleClearCart}
                
                ></Cart>
           </div>
        </div>
    );
};

export default Order;




