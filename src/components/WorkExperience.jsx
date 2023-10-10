import React from "react";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";
import Child from "./childnav";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addWorkExp } from "./resumeSlice";

const WorkExperience = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [job, setjob] = useState("");
  const [org, setorg] = useState("");
  const [star, setstar] = useState("");
  const [en, seten] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addWorkExp({ job, org, star, en }));

    navigate("/skill");
  };
  return (
    <>
      <Navbar />
      <div className="Detail">
        <Child />
        <div class="container">
          <header>
            <b>Work Experience</b>
          </header>
          <form onSubmit={handleSubmit}>
            <div class="form first">
              <div class="details personal">
                <div class="fields">
                  <div class="input-field">
                    <label>Job Title</label>
                    <input
                      type="text"
                      value={job}
                      onChange={(e) => setjob(e.target.value)}
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div class="input-field">
                    <label>Organization Name</label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      value={org}
                      onChange={(e) => setorg(e.target.value)}
                      required
                    />
                  </div>
                  <div class="input-field">
                    <label>Start Date</label>
                    <input
                      type="date"
                      placeholder="Select Date"
                      value={star}
                      onChange={(e) => setstar(e.target.value)}
                      required
                    />
                  </div>
                  <div class="input-field">
                    <label>End Date</label>
                    <input
                      type="date"
                      placeholder="Select Date"
                      value={en}
                      onChange={(e) => seten(e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
            <NavLink to="/education">
              <button>Back</button>
            </NavLink>
         
              <button type="submit">Next</button>
          
          </form>
        </div>
      </div>
    </>
  );
};

export default WorkExperience;
