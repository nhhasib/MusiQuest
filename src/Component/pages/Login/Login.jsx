import React from 'react';
import img from '../../../assets/header/table-musician.jpg'
import SectionHeader from '../../shared/SectionHeader';
import loginimg from '../../../assets/header/6310507.jpg'
import SocialMediaLogin from '../../socialMediaLogin/SocialMediaLogin';

const Login = () => {
    return (
        <div>
            <SectionHeader img={img} title={'Login'}></SectionHeader>
            
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left w-1/2">
      <img src={loginimg} alt="" />
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" placeholder="password" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
                            </div>
                            <SocialMediaLogin></SocialMediaLogin>
      </div>
    </div>
  </div>
</div>
            </div>
      
    );
};

export default Login;