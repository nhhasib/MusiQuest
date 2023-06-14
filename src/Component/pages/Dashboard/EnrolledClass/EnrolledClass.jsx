import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const EnrolledClass = () => {
  const { user } = useContext(AuthContext);
    const token = localStorage.getItem('access-token');
  const { data: enrolledClass=[],refetch } = useQuery(
    ["enrolled", user?.email],
    async () => {
      const res = await fetch(
        `http://localhost:5000/enrolled/?email=${user?.email}`,{ headers: {
                    authorization: `bearer ${token}`
                }}
      );
      return res.json();
    }
  )
  ;
  return (
    <div>
  {
        enrolledClass.map(cls => {
          <div>
            {
              cls.className?.map(c => <p>{c}</p>)
            }
          </div>
        })
        }
    </div>
    );
};

export default EnrolledClass;