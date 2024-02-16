import React from "react";
import { useState } from "react";
import "./PostJobs.css"; // Assuming this file contains your custom styles
// import { useNavigate } from "react-router-dom";
// import Header from "../../../components/innerNavbar/Header";


const PostJobs = () => {

  const [company, setCompany] = useState("");
  const [logo, setLogo] = useState("");
  const [position, setPosition] = useState("");
  const [salary, setSalary] = useState("");
  const [experience, setExperience] = useState("");
  const [role, setRole] = useState("");
  const [location, setLocation] = useState("");
  const [education, setEducation] = useState("");
  const [gender, setGender] = useState("");
  const [englishlevel, setEnglishLevel] = useState("");

  // const navigate = useNavigate();

  const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onabort = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  };

  const handleImg = (e) => {
    const file = e.target.files[0];
    getBase64(file).then((base64) => {
      localStorage["logo"] = base64;
      setLogo(base64);
    });
  };

  const handleSubmitButton = (e) => {
    const jobPost = {
      company,
      position,
      salary,
      experience,
      role,
      location,
      logo,
      education,
      gender,
      englishlevel,
    };
    e.preventDefault();
    if (company === "") {
      window.alert("Enter name");
    } else if (position === "") {
      window.alert("Enter position");
    } else if (experience === "") {
      window.alert("Enter Experience");
    } else if (salary === "") window.alert("Enter Salary");
    else {
      let savedItem = [];
      if (localStorage.getItem("item")) {
        savedItem = JSON.parse(localStorage.getItem("item"));
      }
      localStorage.setItem("item", JSON.stringify([...savedItem, { jobPost }]));
      window.alert("Form Submitted Successfully");
      // navigate("/Jobs");
    }
  };



  return (
    <div className=" justify-center align-center" >
      {/* <Header /> */}
      <div className="job-background mt-20 ">
        <div className="title text-center font-bold mt-10 ">
          <h2 className="">Post a Job</h2>
        </div>
      </div>
      <div className="container  ">

        <h1 className="post-job text-2xl text-red-600 backdrop-blur-xl border rounded-lg p-1">Fill the form </h1>

        <form className=" bg-transparent backdrop-blur-xl border rounded-md ">
          <div className="form-group">
            <label style={{ color: "white" }} htmlFor="name">
              Company Name
            </label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter Company Name"
              onChange={(e) => setCompany(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label style={{ color: "white" }} htmlFor="name">
              Enter Job Location
            </label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter Job Location"
              onChange={(e) => setLocation(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label style={{ color: "white" }} htmlFor="logo">
              Company logo
            </label>
            <label>
              <input
                type="file"
                id="myFile"
                name="filename"
                onChange={handleImg}
                required
              />
            </label>
          </div>
          <div className="form-group">
            <label style={{ color: "white" }}>What position are you posting for?</label>
            <input
              type="text"
              name="role"
              className="form-control"
              placeholder="Enter Position"
              onChange={(e) => setPosition(e.target.value)}
              required
            />
              
          </div>
          <div className="form-group">
            <label style={{ color: "white" }} htmlFor="name">
              Enter Job Role (Description)
            </label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter Job Role"
              onChange={(e) => setRole(e.target.value)}
              required
            />
          </div>

          <div className="form-group" onChange={(e) => setExperience(e.target.value)}>
            <label style={{ color: "white" }}>Experience </label>
            <label>
              <input
                name="user-recommend"
                value="Fresher"
                type="radio"
                className="input-radio"
              />
              <span style={{ color: "white" }}>Fresher</span>
            </label>
            <label>
              <input
                name="user-recommend"
                value="0-1 Year"
                type="radio"
                className="input-radio"
              />
              <span style={{ color: "white" }}>0-1 Year</span>
            </label>
            <label>
              <input
                name="user-recommend"
                value=" 2-3 Years"
                type="radio"
                className="input-radio"
              />
              <span style={{ color: "white" }}>2-3 Years</span>
            </label>
            <label>
              <input
                name="user-recommend"
                value=" 4-5 Years"
                type="radio"
                className="input-radio"
              />
              <span style={{ color: "white" }}>4-5 Years</span>
            </label>
            <label>
              <input
                name="user-recommend"
                value="5+ Years"
                type="radio"
                className="input-radio"
              />
              <span style={{ color: "white" }}>5+ Years</span>
            </label>
          </div>

          <div className="form-group">
            <label style={{ color: "white" }}>Salary</label>
            <select
              className="form-control"
              onChange={(e) => setSalary(e.target.value)}
              required
            >
              <option disabled selected value>
                Select Salary
              </option>
              <option value="0-10K">0-10K</option>
              <option value="10-15K">10-15K</option>
              <option value="15-30K">15-30K</option>
              <option value="30K-50K">30K-50K</option>
              <option value="50K-80K">50K-80K</option>
              <option value="80K+">80K+</option>
            </select>
          </div>
          <div className="form-group">
            <label style={{ color: "white" }}>Education</label>
            <select
              className="form-control"
              onChange={(e) => setEducation(e.target.value)}
              required
            >
              <option disabled selected value>
                Select Education
              </option>
              <option>10th Pass</option>
              <option>12th Pass</option>
              <option>Graduate</option>
              <option>Post Graduate</option>              
            </select>
          </div>
          <div className="form-group">
            <label style={{ color: "white" }}>Gender</label>
            <select
              className="form-control"
              onChange={(e) => setGender(e.target.value)}
              required
            >
              <option disabled selected value>
                Select Gender
              </option>
              <option>Male</option>
              <option>Female</option>
              <option>Both</option>                            
            </select>
          </div>
          <div className="form-group">
            <label style={{ color: "white" }}>Endlish Level</label>
            <select
              className="form-control"
              onChange={(e) => setEnglishLevel(e.target.value)}
              required
            >
              <option disabled selected value>
                Select English Level
              </option>
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>             
            </select>
          </div>
          <div className="form-group">
            <button
              type="submit"
              className="submit-button"
              onClick={handleSubmitButton}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default PostJobs