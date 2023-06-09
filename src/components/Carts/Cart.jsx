import React from 'react';
import Product from '../Product/Product';
import './Cart.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faTrashAlt } from '@fortawesome/free-solid-svg-icons';


const Cart = ({cart,handleClearCart}) => {

    let totalPrice = 0;
    let totalShipping = 0
    let quantity = 0;
    for(const product of cart){
        // product.quantity = product.quantity || 1;     //formate-1

        // if(product.quantity===0){
        //     product.quantity = 1;    // formate -2
        // }  


        


        totalPrice = totalPrice + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping;
        quantity = quantity + product.quantity;
    }

    const tax = totalPrice*7/100;

    const grandTotal = totalPrice + totalShipping + tax;


    return (
        <div className='cart'>
              <h3>Order Summary</h3>
             <p>Selected items :  {quantity}</p>
             <p>Total Price: ${totalPrice}</p>
             <p>Total Shipping Charge : $ {totalShipping}</p>
             <p>Tax : ${tax.toFixed(2)}</p>
              <h5>Grand Total : $ {grandTotal.toFixed(2)}</h5>


               
               <div>
                    <button onClick={handleClearCart}  className='clear-btn' >Clear Cart <span> <FontAwesomeIcon icon={faTrashAlt} /></span> </button>
               </div>

               <div>
                <button className='btn-review'> Review Order <span><FontAwesomeIcon icon={faAngleRight} /></span></button>
               </div>

                  

             
             
            
        </div>
    );
};

export default Cart;