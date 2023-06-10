import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Instructors = () => {
    const instructors = useLoaderData();
    return (
        <div>
            <h1>from instructors</h1>
        </div>
    );
};

export default Instructors;