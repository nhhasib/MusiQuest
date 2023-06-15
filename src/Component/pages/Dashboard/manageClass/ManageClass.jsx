import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { FaCheckCircle, FaCommentAlt, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const ManageClass = () => {
  const token = localStorage.getItem("access-token");
  const { data: classesData = [], refetch } = useQuery(
    ["classes"],
    async () => {
      const res = await fetch("https://musi-quest-server.vercel.app/classes", {
        headers: {
          authorization: `bearer ${token}`,
        },
      });
      return res.json();
    }
  );

  const handleApprove = (item) => {
    fetch(`https://musi-quest-server.vercel.app/classes/approve/${item._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: `${item.name} approved successfully`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const handleDelete = (item) => {
    fetch(`https://musi-quest-server.vercel.app/classes/denied/${item._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-center",
            icon: "error",
            title: `${item.name} denied`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  const pendingClass = classesData.filter((cls) => cls.status == "pending");

  return (
    <div className="w-11/12 mx-auto">
      <Helmet>
                <title>MusiQuest | Manage Classess</title>
            </Helmet>
      <div className="uppercase font-semibold flex justify-evenly items-center my-4 bg-orange-600 py-4 text-white rounded-xl">
        <h3 className="text-3xl">
          Total Pending Classes for Approval: {pendingClass?.length}
        </h3>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Class Image</th>
              <th> Class Name</th>
              <th>Instructor</th>
              <th>Instructor Email</th>
              <th>Available sit</th>
              <th>Price</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {classesData?.map((cls, index) => (
              <tr key={cls._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={cls.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{cls.name}</td>
                <td>{cls.instructor}</td>
                <td>{cls.email}</td>
                <td>{cls.available}</td>
                <td>${cls.price}</td>
                <td>{cls.status}</td>
                <td>
                  <td>
                    {cls.status == "approved" ? (
                      <div className="flex gap-4">
                        <button
                          disabled={true}
                          onClick={() => handleApprove(cls)}
                          className="btn btn- text-white bg-green-600"
                        >
                          <FaCheckCircle></FaCheckCircle>
                        </button>
                        <button
                          disabled={true}
                          onClick={() => handleDelete(cls)}
                          className="btn btn-ghost text-white bg-red-700"
                        >
                          <FaTrashAlt></FaTrashAlt>
                        </button>
                        <button
                          disabled={true}
                          onClick={() => handleDelete(cls)}
                          className="btn btn-ghost text-white bg-red-700"
                        >
                          <FaCommentAlt></FaCommentAlt>
                        </button>
                      </div>
                    ) : cls.status == "denied" ? (
                      <div className="flex gap-4">
                        <button
                          disabled={true}
                          onClick={() => handleApprove(cls)}
                          className="btn btn- text-white bg-green-600"
                        >
                          <FaCheckCircle></FaCheckCircle>
                        </button>
                        <button
                          disabled={true}
                          onClick={() => handleDelete(cls)}
                          className="btn btn-ghost text-white bg-red-700"
                        >
                          <FaTrashAlt></FaTrashAlt>
                        </button>
                        <button
                          disabled={false}
                          onClick={() => handleDelete(cls)}
                          className="btn btn-ghost text-white bg-red-700"
                        >
                          <FaCommentAlt></FaCommentAlt>
                        </button>
                      </div>
                    ) : (
                      <div className="flex gap-4">
                        <button
                          disabled={false}
                          onClick={() => handleApprove(cls)}
                          className="btn btn- text-white bg-green-600"
                        >
                          <FaCheckCircle></FaCheckCircle>
                        </button>
                        <button
                          disabled={false}
                          onClick={() => handleDelete(cls)}
                          className="btn btn-ghost text-white bg-red-700"
                        >
                          <FaTrashAlt></FaTrashAlt>
                        </button>
                        <button
                          disabled={false}
                          onClick={() => handleDelete(cls)}
                          className="btn btn-ghost text-white bg-red-700"
                        >
                          <FaCommentAlt></FaCommentAlt>
                        </button>
                      </div>
                    )}
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

export default ManageClass;
