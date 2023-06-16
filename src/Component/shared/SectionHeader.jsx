import React from 'react';

const SectionHeader = ({img,title}) => {
    return (
        <div className='relative mb-36'>
            <img className='w-full blur-sm' src={img} alt="" />
            <div className='text-center bg-white px-12 py-6 lg:px-24 lg:py-10 absolute rounded -bottom-16 left-[100px] lg:left-[450px] shadow-xl'>
                <h1 className='font-bold text-2xl lg:font-extrabold lg:text-5xl'>{ title}</h1>
            </div>
        </div>
    );
};

export default SectionHeader;