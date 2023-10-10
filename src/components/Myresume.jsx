import React from "react";
import { selectResume } from "./resumeSlice";
import { useSelector } from "react-redux";
import "../Styles/resume.css";
import Navbar from "./Navbar";
import {useReactToPrint} from 'react-to-print'
import { useRef } from "react";


const Myresume = () => {
  const resume = useSelector(selectResume);
  const componetPDF = useRef();

  const generatePDF = useReactToPrint({
    content: ()=>componetPDF.current,
    documentTitle:'userdata',
    onAfterPrint:()=>alert('Saved')
  });
  return (
    <>
      <Navbar />
      <div className="save">
     <button  type="submit" onClick={generatePDF}>save</button>
     </div>
     <div className="form-resume">
     
      <div ref={componetPDF}>
        <h1 className="heading">Resume</h1>
        
        <div className="personal">
          
          <div>
            <h2>{resume.personalInfo.username}</h2>
          </div>
          
          <div>
            <p>Mobile no:+91  {resume.personalInfo.mobile}</p>
            <p>Date of birth: {resume.personalInfo.date}</p>
            <p>Email ID: {resume.personalInfo.email}</p>
            <p>City: {resume.personalInfo.city}</p>
            <p>Pin code: {resume.personalInfo.pin}</p>
          </div>
          {/* <p>Pin code: {resume.personalInfo.file}</p> */}
        </div>
        <div className="educational">
          <div>
            <h3>Educational Detail</h3>
          </div>
          <div>
            {resume.Educationalinfo.map((edu, index) => (
              <div key={index}>
                <p>Type: {edu.type}</p>
                <p>University: {edu.university}</p>
                <p>Degree: {edu.degree}</p>
                <p>Percentage: {edu.per}</p>
                <p>Start Date: {edu.start}</p>
                <p>End: {edu.end}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="work">
          <div>
            <h3>Work Experience</h3>
          </div>
          <div>
            {resume.WorkExp.map((exp, index) => (
              <div key={index}>
                <p>Job title: {exp.job}</p>
                <p>Organization: {exp.org}</p>
                <p>Start: {exp.star}</p>
                <p>End: {exp.en}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="skill">
          <div>
            <h3>Skills</h3>
          </div>
          <div>
            {resume.Skills.map((skill, index) => (
              <div key={index}>
                <p>{skill.skill}</p>
                <p>{skill.skill2}</p>
                <p>{skill.skill3}</p>
                <p>{skill.skill4}</p>
                <p>{skill.skill5}</p>
                <p>{skill.skill6}</p>
              </div>
            ))}
          </div>
          
        </div>
       
      </div>
    
     </div>
    </>
  );
};

export default Myresume;
