import React from 'react';
import ProgramCard from './ProgramCard';
import img1 from '../../../../assets/D2YMQVN.jpeg'
import img2 from '../../../../assets/XJDYDWE.jpeg'
import img3 from '../../../../assets/learning-e1626147970198.jpg'

const Programs = () => {
    return (
        <div className='text-center w-11/12 mx-auto my-16'>
            <h1 className='section-title'>Our Program</h1>
            <h3>Grade Programs</h3>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
            <div className='grid lg:grid-cols-3 gap-8'>
                <ProgramCard img={img1} subtitle='Preschool'></ProgramCard>
                <ProgramCard img={img2} subtitle={'Schooler'}></ProgramCard>
                <ProgramCard img={img3} subtitle={'Teenager'}></ProgramCard>
            </div>
        </div>
    );
};

export default Programs;