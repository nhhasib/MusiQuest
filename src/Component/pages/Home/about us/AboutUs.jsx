import React from "react";
import img from "../../../../assets/group-of-homeschooling-children-with-teacher-having-music-lesson-indoors-coronavirus-concept-1-1-e1626148006985.jpg";
import {  FaCheck } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-10 items-center w-11/12 mx-auto my-4">
      <div>
        <img className="rounded-xl" src={img} alt="" />
      </div>
      <div>
        <h1 className="section-title">About Us</h1>
        <h3>Learn The Music From The Core & Become Mastery</h3>
        <p>
        Welcome to Musiquest, the premier online destination for music education. Explore our expertly crafted courses, connect with fellow music lovers, and unlock your musical potential. Join us and embark on a transformative musical journey today.
        </p>
        <div className="flex gap-6 my-4">
         
                  <div>
                  <p className="my-2">✓ Diverse Course Selection</p>      
                <p>✓ Experienced Instructors</p>  
                  </div>    
                  <div>
                  <p className="my-2">✓ Interactive Community</p>      
                      <p>✓ Flexible Learning</p>
                  </div>   
          
              </div>
              <button className="button">About Us</button>
      </div>
    </div>
  );
};

export default AboutUs;
