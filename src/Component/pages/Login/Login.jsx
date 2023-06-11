import React, { useContext } from "react";
import img from "../../../assets/header/table-musician.jpg";
import SectionHeader from "../../shared/SectionHeader";
import loginimg from "../../../assets/header/6310507.jpg";
import SocialMediaLogin from "../../socialMediaLogin/SocialMediaLogin";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Login = () => {
    const {loginUser}=useContext(AuthContext)
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
      const password = form.password.value;
      
      loginUser(email, password)
          .then(result => {
              const user = result.user;
              console.log(user)
          })
          .catch(error => console.log(error))
      

  };
  return (
    <div>
      <SectionHeader img={img} title={"Login"}></SectionHeader>

      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left w-1/2">
            <img src={loginimg} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
            <div className="card-body">
              <form onSubmit={handleLogin}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                                      type="text"
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
                                      type="text"
                                      name="password"
                    placeholder="password"
                    className="input input-bordered"
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
              </form>
              <SocialMediaLogin></SocialMediaLogin>
              <p className="text-center">
                New to Here? Please{" "}
                <Link to="/register">
                  <span className="underline text-red-800">register</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
