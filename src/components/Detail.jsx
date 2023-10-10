import { NavLink } from "react-router-dom";
import "../Styles/Detail.css";
import Navbar from "./Navbar";
import Child from "./childnav";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setPersonalInfo } from "./resumeSlice";

const Detail = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  
  const [username, setusername] = useState("");
  const [date, setdate] = useState("");
  const [mobile, setmobile] = useState("");
  const [email, setemail] = useState("");
  const [city, setcity] = useState("");
  const [pin, setpin] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      setPersonalInfo({ username, mobile, email, date, city, pin})
    );
    navigate("/education");
  };

 

  return (
    <>
      <Navbar />
      <div className="Detail">
        <Child />
        <div class="container">
          <header>
            <b>Personal Details</b>
          </header>
          <form onSubmit={handleSubmit}>
            <div class="form first">
              <div class="details personal">
                <div class="fields">
                  <div class="input-field">
                    <label>Full Name</label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      value={username}
                      onChange={(e) => setusername(e.target.value)}
                      required
                    />
                  </div>

                 
                  <div class="input-field">
                    <label>Mobile Number</label>
                    <input
                      type="text"
                      value={mobile}
                      onChange={(e) => setmobile(e.target.value)}
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>

                  <div class="input-field">
                    <label>Date of Birth</label>
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setdate(e.target.value)}
                      placeholder="Enter birth date"
                      required
                    />
                  </div>
                  <div class="input-field">
                    <label>Email</label>
                    <input
                      type="text"
                      value={email}
                      onChange={(e) => setemail(e.target.value)}
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div class="input-field">
                    <label>City</label>
                    <input
                      type="text"
                      placeholder="Enter your city"
                      value={city}
                      onChange={(e) => setcity(e.target.value)}
                      required
                    />
                  </div>
                  <div class="input-field">
                    <label>Pin code</label>
                    <input
                      type="text"
                      value={pin}
                      onChange={(e) => setpin(e.target.value)}
                      placeholder="Enter your pin code"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
            <NavLink to="/">
              <button>Back</button>
            </NavLink>

            <button type="submit">Next</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Detail;
