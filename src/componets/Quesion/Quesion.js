import React from 'react';
import './Quesion.css'

const Quesion = () => {
    return (
        <div className='text'>
            <h3>Props vs State work?</h3>
            <p>Simply put, State is the local state of the component which cannot be accessed and modified outside of the component. It's equivalent to local variables in a function. Props, on the other hand, make components reusable by giving components the ability to receive data from their parent component in the form of props.</p>
            <h3>How React work?</h3>
            <p>It is maintained by Facebook. React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes</p>

        </div>
    );
};

export default Quesion;