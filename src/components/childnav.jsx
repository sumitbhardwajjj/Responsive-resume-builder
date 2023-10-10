import React from "react";
import "../Styles/childnav.css";
import { NavLink } from "react-router-dom";

const Child = () => {
  return (
    <div>
      <ul className="header">
        <li>
          <NavLink className="List" to='/detail'>Detail</NavLink>
        </li>
        <li>
          {" "}
          <NavLink className="List" to='/education'>Eductaion</NavLink>
        </li>
        <li>
          {" "}
          <NavLink className="List" to='/work'>Work experience</NavLink>
        </li>
        <li>
          <NavLink className="List" to='/skill'>My Skills</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Child;
