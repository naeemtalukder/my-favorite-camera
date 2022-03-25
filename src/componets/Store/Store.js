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

    const handleAddToCart = (camera) => {
        console.log(camera);
        const newCart = [...cart, camera];
        setCart(newCart);
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
                <h1>This is carf</h1>
                <p>{cart.length}</p>
            </div>
        </div>
    );
};

export default Store;