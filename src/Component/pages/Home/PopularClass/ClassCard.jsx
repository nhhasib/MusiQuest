import React from 'react';

const ClassCard = ({img,subtitle}) => {
    return (
        <div className='relative my-4 '>
            <div className='rounded-2xl'>
            <img className='rounded-2xl' src={img} alt="" />
            </div>
            <div className='bg-black bg-opacity-70 bottom-0 absolute px-2 py-6 text-white rounded-b-2xl'>
            <h3 className='font-bold text-2xl my-2'>{subtitle}</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis eveniet sapiente harum velit officia possimus beatae corporis cumque sit! Dolor!</p>
            </div>
        </div>
    );
};

export default ClassCard;