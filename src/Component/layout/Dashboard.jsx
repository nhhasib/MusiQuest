import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import logo from '../../assets/logo.png'
import { FaBookReader, FaHome, FaUser, FaUserGraduate, FaUserTie, FaUsers } from "react-icons/fa";
import useUser from "../Hooks/useUser";
import { AuthContext } from "../AuthProvider/AuthProvider";


const Dashboard = () => {
  const [currentUserStatus] = useUser();
  const { logoutUser } = useContext(AuthContext);
    const handleLogout = () => {
        logoutUser()
            .then()
            .catch()
    }
  
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="w-full navbar bg-base-300">
            <div className="flex-none lg:hidden">
              <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="flex-1 px-2 mx-2 lg:hidden">MusiQuest</div>

          </div>
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
                  <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
          <ul className="menu p-4 w-60 h-full bg-black text-white">
                      {/* Sidebar content here */}
                      <li><Link to={'/'}><img className="w-[160px]" src={logo} alt="" /></Link></li>
                     <hr /> 
            {
              currentUserStatus?.role=='admin'?<><li>
              <Link to={'manageClass'}><FaBookReader className="text-orange-500"></FaBookReader><p className="font-bold text-sm">Manage Classes</p></Link>
            </li>
            <li>
            <Link to={'allusers'}><FaUsers className="text-orange-500"></FaUsers><p className="font-bold text-sm">Manage Users</p></Link>
                </li>
            <li>
            <Link to={'/dashboard'}><FaUser className="text-orange-500"></FaUser><p className="font-bold text-sm">Profile</p></Link>
                </li>
                

              </> : currentUserStatus?.role == 'instructor' ? <><li>
            <Link to={'addClass'}><FaUsers className="text-orange-500"></FaUsers><p className="font-bold text-sm">Add Class</p></Link>
                      </li>
                      <li>
            <Link to={'myClass'}><FaUsers className="text-orange-500"></FaUsers><p className="font-bold text-sm">My Classes</p></Link>
                  </li>
                  <li>
                  <Link to={'/dashboard'}><FaUser className="text-orange-500"></FaUser><p className="font-bold text-sm">Profile</p></Link>
                </li>
                
                </> : <><li>
            <Link to={'selectedClass'}><FaUsers className="text-orange-500"></FaUsers><p className="font-bold text-sm">Selected Classes</p></Link>
                      </li>
                      <li>
            <Link to={'enrolledClass'}><FaUsers className="text-orange-500"></FaUsers><p className="font-bold text-sm">Enrolled Classes</p></Link>
                    </li>
                    <li>
                  <Link to={'/dashboard'}><FaUser className="text-orange-500"></FaUser><p className="font-bold text-sm">Profile</p></Link>
                </li>
                  </>
                      }
                      
                      
                      <hr className="my-8" />
                      <li>
            <Link to={'/'}><FaHome className="text-orange-500"></FaHome><p className="font-bold text-sm">Home</p></Link>
                      </li>
                      <li>
            <Link to={'/classes'}><FaUserGraduate className="text-orange-500"></FaUserGraduate><p className="font-bold text-sm">All Classes</p></Link>
                      </li>
                      <li>
                      <Link to={'/instructors'}><FaUserTie className="text-orange-500"></FaUserTie><p className="font-bold text-sm">All Instructors</p></Link>
                      </li>
                      <button onClick={handleLogout} className="button">Logout</button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
