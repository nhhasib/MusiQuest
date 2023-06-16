import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const AllUsers = () => {
  const token = localStorage.getItem("access-token");
  const { data: users = [], refetch } = useQuery(["allUsers"], async () => {
    const res = await fetch("https://musi-quest-server.vercel.app/allUsers", {
      headers: {
        authorization: `bearer ${token}`,
      },
    });
    return res.json();
  });

  const handleAdmin = (user) => {
    fetch(`https://musi-quest-server.vercel.app/users/admin/${user._id}`, {
      method: "PATCH",
      headers: {
        authorization: `bearer ${token}`,
      }
    })
      .then((res) => res.json())
      .then((data) => {
        
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: `${user.name} make admin successfully`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  const handleInstructor = (user) => {
    fetch(
      `https://musi-quest-server.vercel.app/users/instructors/${user._id}`,
      {
        method: "PATCH",
        headers: {
          authorization: `bearer ${token}`,
        }
      }
    )
      .then((res) => res.json())
      .then((data) => {
        
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: `${user.name} make instructor successfully`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const handleStudent = (user) => {
    fetch(`https://musi-quest-server.vercel.app/users/students/${user._id}`, {
      method: "PATCH",
      headers: {
        authorization: `bearer ${token}`,
      }
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: `${user.name} make student successfully`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    
    <div className="w-11/12 mx-auto">
      <Helmet>
                <title>MusiQuest | All Users</title>
            </Helmet>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr className="text-lg">
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>User Role</th>
              <th>Change Role</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user.role == "admin"
                    ? "Admin"
                    : user.role == "instructor"
                    ? "Instructor"
                    : "Student"}
                </td>
                <td>
                  <div className="flex items-center gap-4">
                    {user.role == "admin" ? (
                      <div className="flex gap-4 items-center">
                        <button
                          onClick={() => handleInstructor(user)}
                          className="button"
                        >
                          Instructor
                        </button>
                        <button
                          onClick={() => handleStudent(user)}
                          className="button"
                        >
                          Student
                        </button>
                      </div>
                    ) : user.role === "instructor" ? (
                      <div className="flex gap-4 items-center">
                        <button
                          onClick={() => handleAdmin(user)}
                          className="button"
                        >
                          Admin
                        </button>
                        <button
                          onClick={() => handleStudent(user)}
                          className="button"
                        >
                          Student
                        </button>
                      </div>
                    ) : (
                      <div className="flex gap-4 items-center">
                        <button
                          onClick={() => handleAdmin(user)}
                          className="button"
                        >
                          Admin
                        </button>
                        <button
                          onClick={() => handleInstructor(user)}
                          className="button"
                        >
                          Instructor
                        </button>
                      </div>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
