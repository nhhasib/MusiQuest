import SectionHeader from "../../../shared/SectionHeader";
import img from "../../../../assets/header/education-concept.jpg";
import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const AddClass = () => {
  const { user } = useContext(AuthContext);

  const handleAddClass = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const instructor = form.instructor.value;
    const price = form.price.value;
    const available = form.available.value;
    const description = form.description.value;
    const duration = form.duration.value;
    const level = form.level.value;
    const classData = {
      name: name,
      email: email,
      image: photo,
      instructor: instructor,
      price: price,
      available: available,
      description: description,
      duration: duration,
      level: level,
      status: "pending",
    };

    axios
      .post("https://musi-quest-server.vercel.app/classes", classData)
      .then((data) => {
        if (data.data.insertedId) {
          // refetch();
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Created new class successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset();
        }
      });
  };

  return (
    <div>
      <Helmet>
                <title>MusiQuest | Add Classe</title>
            </Helmet>
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
                      <span className="label-text">Duration</span>
                    </label>
                    <input
                      type="text"
                      name="duration"
                      placeholder="Enter duration of class"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Level</span>
                    </label>
                    <input
                      type="text"
                      name="level"
                      placeholder="Enter class level"
                      className="input input-bordered"
                    />
                  </div>
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
