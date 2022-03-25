import React from 'react';
import './Camera.css'
const Camera = (props) => {
    const { id, name, img, price, band } = props.camera;
    return (
        <div className='camera'>
            <img src={img} alt="" />
            <div className='camera-text'>
                <p className='product-name'>{name}</p>
                <p><small>Price ${price}</small></p>
                <p>Brand: {band}</p>
            </div>
            <button className='btn-cart'>
                <p>Add To Cart</p>
            </button>
        </div>
    );
};

export default Camera;