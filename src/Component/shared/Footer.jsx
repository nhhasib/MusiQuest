import React from 'react';
import logo from '../../assets/logo.png'

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-black text-white items-center">
                <div>
                    <img className='w-48' src={logo} alt="" />
    <span className="footer-title border-b-2 border-b-orange-600 opacity-100 text-lg">Useful Links</span> 
    <a className="link link-hover">Branding</a> 
    <a className="link link-hover">Design</a> 
    <a className="link link-hover">Marketing</a> 
    <a className="link link-hover">Advertisement</a>
  </div> 
  <div>
  <span className="footer-title border-b-2 border-b-orange-600 opacity-100 text-lg">Useful Links</span> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Jobs</a> 
    <a className="link link-hover">Press kit</a>
          </div> 
</footer> 
          <hr />
          <p className='text-center'>Copyright © 2023 - All right reserved by Nafiul Hasan Hasib</p>
  
        </div>
    );
};

export default Footer;