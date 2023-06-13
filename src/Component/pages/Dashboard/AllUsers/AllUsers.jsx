import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Swal from 'sweetalert2';

const AllUsers = () => {
    const {data:users=[],refetch } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/users')
        return res.json()
    })

    const handleAdmin = (user) => {
        fetch(`http://localhost:5000/users/admin/${user._id}`,
            { method: 'PATCH' })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.modifiedCount){
                    refetch()
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: `${user.name} make admin successfully`,
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
        })
    }
    const handleInstructor = (user) => {
        fetch(`http://localhost:5000/users/instructors/${user._id}`,
            { method: 'PATCH' })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.modifiedCount){
                    refetch()
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: `${user.name} make instructor successfully`,
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
        })
    }
    return (
        <div className='w-11/12 mx-auto'>
            <div className="overflow-x-auto">
        <table className="table">
                    <thead>
                        
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
                        {
                            users.map((user,index)=><tr key={user._id}>
                                <th>{index+1}</th>
                                              <td>{user.name}</td>
                                              <td>{user.email}</td>
                                <td><div className='flex gap-4'>
                                    {
                                        user.role == 'admin' ? 'admin' : <div className='flex gap-4'>
                                            <button onClick={()=>handleAdmin(user)} className='button'>Admin</button>
                                            <button onClick={()=>handleInstructor(user)} className='button'>Instructor</button>
                                        </div>
                                           
                                            

                                }
                                </div></td>
                              </tr>)
            }
          </tbody>
        </table>
      </div>
        </div>
    );
};

export default AllUsers;