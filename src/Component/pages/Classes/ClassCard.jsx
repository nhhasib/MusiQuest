import React from 'react';

const ClassCard = ({ data }) => {
    console.log(data)
    const {id,name,description,instructor,level,price,available,image}=data
    return (
        <div>
            <div className="card w-96 h-[650px] bg-base-100 shadow-xl">
                <figure><img className='w-full h-[250px]' src={image} alt="Shoes" /></figure>
                <div className="card-body text-center">
                    <h2 className="font-bold text-3xl">{name}</h2>
                    <p>{description}</p>
                    <p><span className='font-bold'>Instractor:</span> {instructor}</p>
                    <h2 className='font-bold'> Available sit: {available}</h2>
                    <h2 className='font-bold text-xl'>$ {price}</h2>
                    
    <div className="card-action justify-center">
      <button className="button">Select</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default ClassCard;