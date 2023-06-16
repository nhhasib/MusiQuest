import React from 'react';

const InstructorCard = ({ data }) => {
    const { name,email,image,classes,number} = data;
    
    return (
        <div>
            <div className="card w-96 h-[650px] bg-base-100 shadow-xl">
                <figure><img className='w-full h-[250px]' src={image} alt="Shoes" /></figure>
                <div className="card-body text-center">
                    <h2 className="font-bold text-3xl">{name}</h2>
                    <h2>Email: {email}</h2>
                    <div className='my-2'>
                    <h2 className='font-bold underline'>{number} classes taken by {name}</h2>
                    {classes.map(c => <p>✓ {c}</p>)}
                    </div>
    <div className="card-actions bottom-4 left-32 absolute">
      <button className="button">See Classes</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default InstructorCard;