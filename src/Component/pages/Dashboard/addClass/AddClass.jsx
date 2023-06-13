import SectionHeader from "../../../shared/SectionHeader";
import img from '../../../../assets/header/education-concept.jpg'
import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const AddClass = () => {
    const {user}=useContext(AuthContext)
    
    const handleAddClass = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const instructor = form.instructor.value;
        const price = form.price.value;
        const available = form.available.value;
        const description = form.description.value;
        console.log(name,email,photo,instructor,price,available,description)

        
    }

  return (
    <div>
      <SectionHeader img={img} title={"Add your class"}></SectionHeader>
          
      <div className="hero w-4/5 mx-auto bg-base-200">
        <div className="hero-content">
         
          <div className="card flex-shrink-0 shadow-2xl bg-base-100">
            <div className="card-body">
                          <form onSubmit={handleAddClass}>
                          <div className="form-control">
                <label className="label">
                  <span className="label-text">Class name</span>
                </label>
                <input
                                      type="text"
                                      name="name"
                  placeholder="Enter your class name"
                  className="input input-bordered"
                />
                              </div>
                              <div className="form-control">
                  <label className="label">
                    <span className="label-text">Class Photo URL</span>
                  </label>
                  <input
                                          type="url"
                                          name="photo"
                    placeholder="Enter your Photo link"
                    className="input input-bordered"
                  />
                                  </div>
              
              <div className="flex justify-between gap-6">
                
                                  <div className="form-control">
                <label className="label">
                  <span className="label-text">Instructor name</span>
                </label>
                <input
                                      type="text"
                                          name="instructor"
                                          defaultValue={user.displayName}
                  placeholder="email"
                  className="input input-bordered"
                />
                                  </div>
                                  <div className="form-control">
                <label className="label">
                  <span className="label-text">Instructor Email</span>
                </label>
                <input
                                      type="email"
                                          name="email"
                                          defaultValue={user.email}
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
                {/* TODO--
                            correct gander input field */}
               
                              </div>
                              <div className="flex justify-between gap-6">
                              <div className="form-control">
                  <label className="label">
                    <span className="label-text">Price</span>
                  </label>
                  <input
                                          type="text"
                                          name="price"
                    placeholder="Enter Price"
                    className="input input-bordered"
                  />
                                  </div>
                                  <div className="form-control">
                <label className="label">
                  <span className="label-text">Availabe Seat</span>
                </label>
                <input
                                      type="text"
                                      name="available"
                  placeholder="Available seat"
                  className="input input-bordered"
                />
              </div>
              
                              </div>
                              <div className="form-control">
                <label className="label">
                  <span className="label-text">Class Description</span>
                </label>
                <input
                                      type="text"
                                      name="description"
                  placeholder="Write about your class"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <button className="button">Register</button>
              </div>
              </form>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddClass;