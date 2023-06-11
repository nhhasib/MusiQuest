import React from 'react';

const SectionHeader = ({img,title}) => {
    return (
        <div className='relative mb-36'>
            <img className='w-full blur-sm' src={img} alt="" />
            <div className='text-center bg-white px-24 py-10 absolute rounded -bottom-16 left-[450px] shadow-xl'>
                <h1 className='section-title'>{ title}</h1>
            </div>
        </div>
    );
};

export default SectionHeader;