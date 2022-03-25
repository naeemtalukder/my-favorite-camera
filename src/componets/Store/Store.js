import React, { useEffect, useState } from 'react';
import './Store.css';
import Data from "../../Fake-data/cameras.json"
import Camera from '../Cameras/Camera/Camera';

const Store = () => {
    const [cameras, setCameras] = useState([]);
    useEffect(() => {
        fetch('cameras.json')
            .then(res => res.json())
            .then(data => setCameras(data))
    }, [])
    return (
        <div className='store-container'>
            <div className="cameras-container">
                {
                    cameras.map(camera => <Camera
                        key={camera.id}
                        camera={camera}
                    ></Camera>)
                }
            </div>
            <div className="card-container">
                <h1>This is carf</h1>
            </div>
        </div>
    );
};

export default Store;