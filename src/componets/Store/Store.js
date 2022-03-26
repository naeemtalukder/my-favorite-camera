import React, { useEffect, useState } from 'react';
import './Store.css';
import Data from "../../Fake-data/cameras.json"
import Camera from '../Cameras/Camera/Camera';

const Store = () => {
    const [cameras, setCameras] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('cameras.json')
            .then(res => res.json())
            .then(data => setCameras(data))
    }, []);
    let newCart = []
    const handleAddToCart = (camera) => {
        const newIndex = cart.indexOf(camera)
        if (newIndex > -1) {
            alert('camera is already added')
            return
        }
        if (newIndex === -1) {
            newCart = [...cart, camera]
        }
        setCart(newCart);
    }


    const againHandler = () => {
        setCart([]);
    }

    const chooseForMe = () => {

        const showCart = cart[Math.round(Math.random() * cart.length) || 0];
        cart.splice(0, cart.length, showCart)
        const newcart = [...cart]
        setCart(newcart);
        console.log(showCart);
    }

    return (
        <div className='store-container'>
            <div className="cameras-container">
                {
                    cameras.map(camera => <Camera
                        key={camera.id}
                        camera={camera}
                        handleAddToCart={handleAddToCart}
                    ></Camera>)
                }
            </div>
            <div className="card-container">
                <h2>Selected Camera</h2>
                {

                    cart.map((item) => <h3 key={item.id}>{item.name}</h3>)
                }
                <div className='cart-btn'>
                    < button onClick={chooseForMe} className='btn-choose'> Choose 1 For Me</button>
                    <button onClick={againHandler} className='btn-again'>Choose Again</button>
                </div>
            </div>
        </div >
    );
};
export default Store;