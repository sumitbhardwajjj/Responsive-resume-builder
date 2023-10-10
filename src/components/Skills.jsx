import React from "react";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";
import Child from "./childnav";
import { useDispatch } from "react-redux";
import { useState} from "react";
import { useNavigate } from "react-router-dom";
import { addSkills } from "./resumeSlice";


const Skills = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

 
  const [skill, setskill] = useState("");
  const [skill2, setskill2] = useState("");
  const [skill3, setskill3] = useState("");
  const [skill4, setskill4] = useState("");
  const [skill5, setskill5] = useState("");
  const [skill6, setskill6] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addSkills({skill,skill2,skill3,skill4,skill5,skill6}));

    navigate("/myresume");
  };

 
  return (
    <>
      <Navbar />
      <div className="Detail">
        <Child />
        <div class="container">
          <header>
            <b>My Skills</b>
          </header>
          <form onSubmit={handleSubmit}>
            <div class="form first">
              <div class="details personal">
                <div class="fields">
                  <div class="input-field">
                    <input
                      type="text"
                      placeholder="Enter your skills"
                      value={skill}
                      onChange={(e) => setskill(e.target.value)}
                      required
                    />
                  </div>
                  <div class="input-field">
                    <input
                    value={skill2}
                    onChange={(e) => setskill2(e.target.value)}
                      type="text"
                      placeholder="Enter your skills"
                      required
                    />
                  </div>
                  <div class="input-field">
                    <input
                    value={skill3}
                    onChange={(e) => setskill3(e.target.value)}
                      type="text"
                      placeholder="Enter your skills"
                      required
                    />
                  </div>
                  <div class="input-field">
                    <input
                    value={skill4}
                    onChange={(e) => setskill4(e.target.value)}
                      type="text"
                      placeholder="Enter your skills"
                      required
                    />
                  </div>
                  <div class="input-field">
                    <input
                    value={skill5}
                    onChange={(e) => setskill5(e.target.value)}
                      type="text"
                      placeholder="Enter your skills"
                      required
                    />
                  </div>
                  <div class="input-field">
                    <input
                    value={skill6}
                    onChange={(e) => setskill6(e.target.value)}
                      type="text"
                      placeholder="Enter your skills"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
            <NavLink to="/work">
              <button>Back</button>
            </NavLink>

            <button type="submit">save</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Skills;
