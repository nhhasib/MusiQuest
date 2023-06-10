import React from "react";
import img from "../../../../assets/group-of-homeschooling-children-with-teacher-having-music-lesson-indoors-coronavirus-concept-1-1-e1626148006985.jpg";
import {  FaCheck } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-10 items-center w-11/12 mx-auto my-4">
      <div>
        <img src={img} alt="" />
      </div>
      <div>
        <h1 className="section-title">About Us</h1>
        <h3>Learn The Music From The Core & Become Mastery</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec.
        </p>
        <div className="flex gap-6 my-4">
         
                  <div>
                  <p className="my-2">✓ Basic Knowledge</p>      
                <p>✓ Basic Knowledge</p>  
                  </div>    
                  <div>
                  <p className="my-2">✓ Basic Knowledge</p>      
                      <p>✓ Basic Knowledge</p>
                  </div>   
          
              </div>
              <button className="button">About Us</button>
      </div>
    </div>
  );
};

export default AboutUs;
