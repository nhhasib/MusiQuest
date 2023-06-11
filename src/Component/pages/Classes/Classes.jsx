import React from 'react';
import img from '../../../assets/header/education-concept.jpg'
import SectionHeader from '../../shared/SectionHeader';
import { useLoaderData } from 'react-router-dom';
import ClassCard from './ClassCard';

const Classes = () => {
    const  classes  = useLoaderData()
    return (
        <div>
            <SectionHeader img={img} title={'Classes'}></SectionHeader>
            <div className='grid grid-cols-3 gap-6 w-11/12 mx-auto'>
                {
                    classes.map(c=><ClassCard key={c.id} data={c}></ClassCard>)
                }
            </div>
        </div>
    );
};

export default Classes;