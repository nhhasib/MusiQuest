import React from 'react';
import img from '../../../assets/error.jpg'
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='w-3/5 mx-auto text-center'>
            <img src={img} alt="" />
            <Link to={'/'}><button className='button text-center'>Back to Home</button></Link>
        </div>
    );
};

export default Error;