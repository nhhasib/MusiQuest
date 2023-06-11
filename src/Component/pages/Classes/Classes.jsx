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
            <div>
                {
                    classes.map(c=><ClassCard key={c.id} data={c}></ClassCard>)
                }
            </div>
        </div>
    );
};

export default Classes;