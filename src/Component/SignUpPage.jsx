import { useState } from "react";
import axios from "axios";
import {toast} from "react-toastify"
import { Baseurl } from "./url/Url";

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`${Baseurl}/api/api/register`, formData);
        toast.success ("Data saved in MongoDB");
    } catch (err) {
      console.error(err);
        toast.error("User allready exsist");
    }
  };

  return (
    <div className="container d-flex justify-content-center  " style={{ Height: "100vh", marginTop:"6rem" }}>
      <form onSubmit={handleSubmit} className="p-4 shadow rounded" style={{ width: "350px"  }}>
         <h3 className="text-center mb-3">SignUp</h3>

        <div className="mb-3">
          <label className="form-label">name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Enter username"
            onChange={handleChange}
            required
          />
        </div> 

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Enter email"
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Enter password"
            onChange={handleChange}
            required
          />
        </div>

        <button className="btn btn-success w-100">Submit</button>
      </form>
    </div>
  );
};

export default SignUpPage;
