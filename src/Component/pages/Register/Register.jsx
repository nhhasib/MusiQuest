import React, { useContext } from "react";
import img from "../../../assets/header/education-concept.jpg";
import registerImg from "../../../assets/1441.jpg";
import SectionHeader from "../../shared/SectionHeader";
import SocialMediaLogin from "../../socialMediaLogin/SocialMediaLogin";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Register = () => {
    const { createUser } = useContext(AuthContext)

    const handleRegister = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password=form.password.value
        createUser(email,password)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error=>console.log(error))
        
    }

  return (
    <div>
      <SectionHeader img={img} title={"Register"}></SectionHeader>
          <img className="w-96 mx-auto" src={registerImg} alt="" />
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content">
          {/* <div className="text-center lg:text-left w-1/2">
            <img src={registerImg} alt="" />
          </div> */}
          <div className="card flex-shrink-0 shadow-2xl bg-base-100">
            <div className="card-body">
                          <form onSubmit={handleRegister}>
                          <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                                      type="email"
                                      name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                                      type="password"
                                      name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
              </div>
              <div className="flex justify-between">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    type="url"
                    placeholder="Enter your Photo link"
                    className="input input-bordered"
                  />
                </div>
                {/* TODO--
                            correct gander input field */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Gander</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Gender"
                    className="input input-bordered"
                  />
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phone Number</span>
                </label>
                <input
                  type="number"
                  placeholder="Enter your Phone Number"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Adress</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your address"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <button className="button">Register</button>
              </div>
              </form>
              <SocialMediaLogin></SocialMediaLogin>
              <p className="text-center">
                New to Here? Please{" "}
                <Link to="/login">
                  <span className="underline text-red-800">login</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
