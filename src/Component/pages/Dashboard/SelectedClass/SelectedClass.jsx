import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const SelectedClass = () => {
  const { user } = useContext(AuthContext);
  const token = localStorage.getItem('access-token');
  const { data: selectedClasses,refetch = [] } = useQuery(
    ["selectedClass", user?.email],
    async () => {
      const res = await fetch(
        `http://localhost:5000/selectedClass/?email=${user?.email}`,{ headers: {
          authorization: `bearer ${token}`
      }}
      );
      return res.json();
    }
  );

  // const { name, price, instructor } = selectedClasses;

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
          fetch(`http://localhost:5000/selectedClass/${item._id}`, {
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

  const total = selectedClasses?.reduce((sum, item) => item.price + sum, 0);
  

    return (
      <div className="w-11/12 mx-auto">
        <div className="uppercase font-semibold flex justify-evenly items-center my-4 bg-orange-600 py-4 text-white rounded-xl">
                <h3 className="text-3xl">Total Items: {selectedClasses?.length}</h3>
                <h3 className="text-3xl">Total Price: ${total}</h3>
                <Link to="/dashboard/payment">
                    <button className="btn btn-warning btn-sm">PAY</button>
                </Link>
            </div>
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Instructor</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {selectedClasses?.map((cls, index) => (
                <tr key={cls._id}>
                  <th>{index + 1}</th>
                  <td>{cls.name}</td>
                  <td>{cls.instructor}</td>
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


export default SelectedClass;
