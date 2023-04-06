import React from 'react';
import './ReviewItem.css'

const ReviewItem = ({product}) => {

    const {id,img,name,quantity}= product
    return (
        <div className='review-container'>
            <img src={img} alt="" />
        </div>
    );
};

export default ReviewItem;