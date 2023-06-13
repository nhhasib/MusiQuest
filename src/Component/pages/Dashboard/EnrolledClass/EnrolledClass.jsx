import React from 'react';

const EnrolledClass = () => {
    return (
        <div>
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
              
                <tr>
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
              
            </tbody>
          </table>
        </div>
        </div>
    );
};

export default EnrolledClass;