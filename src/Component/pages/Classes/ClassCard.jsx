import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const ClassCard = ({ data }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
    const { _id, name, description, instructor, level, price, available, image } = data;
    console.log(_id)
    const handleEnroll = item => { 
        if (user && user.email) {
          const enrolledItem={courseId:_id,name,image,price,instructor,email:user.email}
          fetch('http://localhost:5000/selectedClass', {
            method: 'POST',
            headers: {
              'content-type':'application/json'
          },
            body:JSON.stringify(enrolledItem)
          })
            .then(res => res.json())
            .then(data => {
              if (data.insertedId) {
                // refetch();
                Swal.fire({
                  position: 'top-center',
                  icon: 'success',
                  title: 'Food added in the cart',
                  showConfirmButton: false,
                  timer: 1500
                })
              }
            })
        }
        else {
          Swal.fire({
            title: 'Please login to order the food',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Login now!'
          }).then((result) => {
            if (result.isConfirmed) {
              navigate('/login',{state:{from:location}})
            }
          })
        }
          
      }
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
      <button onClick={()=>handleEnroll(data)} className="button">Select</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default ClassCard;