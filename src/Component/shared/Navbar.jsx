import React, { useContext } from 'react';
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Navbar = () => {
    const {user}=useContext(AuthContext)
    return (
        <div>
            <div className="navbar fixed z-10 bg-opacity-50 bg-black text-white">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
                    <Link><img className='w-48' src={logo} alt="" /></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 font-bold text-lg">
      <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/instructors'}>Instructors</Link></li>
            <li><Link to={'/classes'}>Classes</Link></li>
            <li><Link to={'/dashboard'}>Dashboard</Link></li>
    </ul>
  </div>
                {
                    user?<div className="navbar-end text-white">
                    <h1>{user.email}</h1>
    <Link className="button">Logout</Link>
  </div>:<div className="navbar-end"><Link to={'/login'} className="btn">Login</Link></div>
                }
</div>
        </div>
    );
};

export default Navbar;