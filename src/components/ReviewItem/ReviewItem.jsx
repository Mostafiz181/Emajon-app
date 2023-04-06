import React from 'react';
import './ReviewItem.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const ReviewItem = ({product,handleRemoveFromCart}) => {

    const {id,img,name,shipping,price}= product
    return (
        <div className='review-container'>
            <img src={img} alt="" />




                            <div className='review-item'>
                                 <div>
                                     <p className='review-title'>{name}</p>
                                        <p className='review-price'>Price :<span>${price}</span></p>
                                         <p className='review-shipping'>Shipping charge :<span>${shipping}</span></p>
                                 </div>

                             
                            </div>

                            <div >
                              <button onClick={()=>handleRemoveFromCart(id)} className='review-btn'> <FontAwesomeIcon icon={faTrashAlt} />  </button>
                             </div>
        </div>
    );
};

export default ReviewItem;