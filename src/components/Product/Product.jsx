import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css'

const Product = (props) => {
  
    // console.log(props)
    const {name,img,seller,price,ratings}=props.product;
    const handleAddToCart=props.handleAddToCart
   




    
    return (
        <div className='product'>
           

           <div className='product-item'>
              <img src={img} alt="" />
              <h3 className='product-name'>{name}</h3>
              <h4 className='product-price'>Price : ${price}</h4>
              <p className='product-seller'>Manufacturer : {seller}</p>
              <p className='product-rating'>Rating :{ratings} starts</p>

              
            </div>

          
           <button onClick={()=>handleAddToCart(props.product)} className='cart-btn'>
            Add to Cart <FontAwesomeIcon icon={faShoppingCart} />

            
            
            </button>
           
        </div>
         




    );
};

export default Product;