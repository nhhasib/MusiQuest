import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';

const EnrolledClass = () => {
  const { user } = useContext(AuthContext);
    const token = localStorage.getItem('access-token');
  const { data: enrolledClass=[],refetch } = useQuery(
    ["classes/enrolled", user?.email],
    async () => {
      const res = await fetch(
        `http://localhost:5000/classes/enrolled/?email=${user?.email}`,{ headers: {
                    authorization: `bearer ${token}`
                }}
      );
      return res.json();
    }
  )

  const total = enrolledClass?.reduce((sum, item) => item.price + sum, 0);

  return (
    <div className="w-11/12 mx-auto">
    <div className="uppercase font-semibold flex justify-evenly items-center my-4 bg-orange-600 py-4 text-white rounded-xl">
            <h3 className="text-3xl">Total Enrolled Classes: {enrolledClass?.length}</h3>
            <h3 className="text-3xl">Total Payment: ${total}</h3>
            <Link to="/dashboard/payment">
                <button className="btn btn-warning btn-sm">PAY</button>
            </Link>
        </div>
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th></th>
            <th>Image</th>
            <th>Name</th>
            <th>Instructor</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {enrolledClass?.map((cls, index) => (
            <tr key={cls._id}>
              <th>{index + 1}</th>
              <td><img className='rounded-full w-16 h-16' src={cls.image} alt="" /></td>
              <td>{cls.name}</td>
              <td>{cls.instructor}</td>
              <td>${cls.price}</td>
              <td>
                
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
    );
};

export default EnrolledClass;