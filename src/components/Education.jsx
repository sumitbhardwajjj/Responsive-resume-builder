import React from "react";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";
import Child from "./childnav";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { addEducationalInfo } from "./resumeSlice";

const Education = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [university, setuniversity] = useState("");
  const [type, settype] = useState("");
  const [degree, setdegree] = useState("");
  const [per, setper] = useState("");
  const [start, setstart] = useState("");
  const [end, setend] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addEducationalInfo({ type, university,degree,per,start,end }));
  
    navigate("/work");
  };

  return (
    <>
      <Navbar />
      <div className="Detail">
        <Child />
        <div class="container">
          <header>
            <b>Education Details</b>
          </header>
          <form onSubmit={handleSubmit}>
            <div class="form first">
              <div class="details personal">
                <div class="fields">
                  <div class="input-field">
                    <label>Type</label>
                    <select
                      value={type}
                      onChange={(e) => settype(e.target.value)}
                      required
                    >
                      <option disabled selected>
                        Select Type
                      </option>
                      <option>H.S.C</option>
                      <option>Graduation</option>
                      <option>Post Graduation</option>
                    </select>
                  </div>
                  <div class="input-field">
                    <label>University</label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      value={university}
                      onChange={(e) => setuniversity(e.target.value)}
                      required
                    />
                  </div>
                  <div class="input-field">
                    <label>Degree</label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      value={degree}
                      onChange={(e) => setdegree(e.target.value)}
                      required
                    />
                  </div>

                  <div class="input-field">
                    <label>Percentage</label>
                    <input
                      type="number"
                      value={per}
                      onChange={(e) => setper(e.target.value)}
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div class="input-field">
                    <label>Start Date</label>
                    <input
                      type="date"
                      placeholder="Select Date"
                      value={start}
                      onChange={(e) => setstart(e.target.value)}
                      required
                    />
                  </div>
                  <div class="input-field">
                    <label>End Date</label>
                    <input
                      type="date"
                      placeholder="Select Date"
                      value={end}
                      onChange={(e) => setend(e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
            <NavLink to="/detail">
              <button >Back</button>
            </NavLink>
            <button type="submit">Next</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Education;
