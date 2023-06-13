import React from 'react';
import img from '../../../assets/header/education-concept.jpg'
import SectionHeader from '../../shared/SectionHeader';
import ClassCard from './ClassCard';
import { useQuery } from '@tanstack/react-query';

const Classes = () => {
    const {data:classesData=[] } = useQuery(['classes'], async () => {
        const res = await fetch('http://localhost:5000/classes')
        return res.json()
    })
    return (
        <div>
            <SectionHeader img={img} title={'Classes'}></SectionHeader>
            <div className='grid grid-cols-3 gap-6 w-11/12 mx-auto'>
                {
                    classesData.map(c=><ClassCard key={c._id} data={c}></ClassCard>)
                }
            </div>
        </div>
    );
};

export default Classes;