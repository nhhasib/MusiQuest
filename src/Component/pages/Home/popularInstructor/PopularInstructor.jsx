import React from "react";
import { useKeenSlider } from "keen-slider/react";
import { useQuery } from "@tanstack/react-query";
import "keen-slider/keen-slider.min.css";
import { Link } from "react-router-dom";
// import "./styles.css"

const PopularInstructor = () => {
  const { data: popularData = [] } = useQuery(["instructors"], async () => {
    const res = await fetch("https://musi-quest-server.vercel.app/instructors");
    return res.json();
  });
  const sliceData = popularData.slice(0, 6);

  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 3,
      spacing: 15,
    },
  });

  return (
    <div className="text-center w-11/12 mx-auto my-16">
      <h1 className="section-title">Popular Instructor</h1>
      <p>
      Experience the expertise of our popular instructors at Musiquest. Learn from renowned musicians and educators who inspire and guide students to achieve their musical aspirations. Join us now and embark on a transformative learning journey with our esteemed instructors.
      </p>
      <div ref={sliderRef} className="keen-slider rounded-xl my-4">
        {sliceData.map((cls, index) => (
          <div
            key={cls._id}
            className={`keen-slider__slide number-slide${index + 1}`}
          >
            <div className="card w-96 shadow-xl image-full">
              <figure>
                <img className="rounded-xl" src={cls.image} alt="Shoes" />
              </figure>
              <div className="card-body text-center bg-black bg-opacity-50 rounded-4xl text-white">
                <div className="text-white">
                  <h2 className="text-center text-2xl my-4 font-bold">
                    {cls.name}
                  </h2>
                  <p>{cls.email}</p>
                </div>
                <div className="card-actions justify-center text-white">
                  <Link to={'/instructors'}><button className="btn btn-primary">Details</button></Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularInstructor;
