import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import './Camera.css'
const Camera = (props) => {
    const { handleAddToCart, camera } = props;
    const { id, name, img, price, band } = camera;

    return (
        <div className='camera'>
            <img src={img} alt="" />
            <div className='camera-text'>
                <p className='product-name'>{name}</p>
                <p><small>Price ${price}</small></p>
                <p>Brand: {band}</p>
            </div>
            <button onClick={() => handleAddToCart(camera)} className='btn-cart'>
                <p className='btn-text'>Add To Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Camera;