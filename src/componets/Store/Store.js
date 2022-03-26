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
                {
                    cart.map((item) => (<h3 key={item.id}>{item.name}</h3>))
                }
                < button > Choose For Me</button><button>Choses Again</button>
            </div>
        </div >
    );
};

export default Store;