import { useContext } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';

const MyClass = () => {
    const { user } = useContext(AuthContext);
    const token = localStorage.getItem('access-token');
  const { data: myClasses=[],refetch } = useQuery(
    ["myClass", user?.email],
    async () => {
      const res = await fetch(
        `http://localhost:5000/myClass/?email=${user?.email}`,{ headers: {
                    authorization: `bearer ${token}`
                }}
      );
      return res.json();
    }
    );
    
    const handleDelete = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          })
            .then((result) => {
              if (result.isConfirmed) {
                fetch(`http://localhost:5000/myClass/${item._id}`, {
                  method: 'DELETE'
                })
                  .then(res => res.json())
                  .then(data => {
                    if (data.deletedCount > 0) {
                      refetch();
                      Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                      )
                    }
                  })
              }
            })
    }

    return (
        <div className="w-11/12 mx-auto">
        <div className="uppercase font-semibold flex justify-evenly items-center my-4 bg-orange-600 py-4 text-white rounded-xl">
                <h3 className="text-3xl">Total Classes: {myClasses?.length}</h3>
            </div>
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th></th>
                <th> Class Name</th>
                <th>Instructor</th>
                <th>Duration</th>
                <th>Level</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {myClasses?.map((cls, index) => (
                <tr key={cls._id}>
                  <th>{index + 1}</th>
                  <td>{cls.name}</td>
                  <td>{cls.instructor}</td>
                  <td>{cls.duration}</td>
                  <td>{cls.level}</td>
                  <td>${cls.price}</td>
                  <td>
                    <td>
                      <button
                        onClick={() => handleDelete(cls)}
                        className="btn btn-ghost text-white bg-red-700"
                      >
                        <FaTrashAlt></FaTrashAlt>
                      </button>
                    </td>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default MyClass;