import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SectionHeader from '../../shared/SectionHeader';
import img from '../../../assets/header/group-of-homeschooling-children-with-teacher-having-music-lesson-indoors-coronavirus-concept-1-1-e1626148006985.jpg'
import InstructorCard from './InstructorCard';

const Instructors = () => {
    const instructors = useLoaderData();
    return (
        <div className='mb-10'>
            <SectionHeader img={img} title={'Instructors'}></SectionHeader>
            <div className='grid lg:grid-cols-3 gap-6 w-11/12 mx-auto '>
            {
                instructors.map(instractor=><InstructorCard key={instractor.instructor_id} data={instractor}></InstructorCard>)
           }
            </div>
        </div>
    );
};

export default Instructors;