import React from "react";
import Navbar from "./Navbar";
import '../Styles/About.css'

const About = () => {
  return (
    <div>
      <Navbar />
    <div className="About">
    <div>
        <h1>About us</h1>
        <p>
          Welcome to our resume builder! We are a team of experienced
          professionals dedicated to helping job seekers create resumes and
          cover letters that stand out from the competition. Our mission is to
          provide you with the tools and resources you need to land your dream
          job. We understand that the job search can be overwhelming, which is
          why we're here to guide you every step of the way. Our easy-to-use
          platform offers a variety of customizable templates and
          industry-specific keywords to help you craft a resume that showcases
          your unique skills and accomplishments. At our resume builder, we're
          committed to providing you with a high-quality, affordable solution to
          your job search needs. Our team is always on the cutting edge of
          industry trends and best practices, so you can trust that your resume
          is in good hands. Thank you for choosing our resume builder. We look
          forward to helping you achieve your career goals!
        </p>
     
      </div>
      <div>
        <img className="logos" src="about.png " alt="" />
      </div>
    </div>
   <div className="share-logo">
   <h2>Share with your friends</h2>
       <img className="share" src="logo.png" alt="" />
   </div>
    </div>
  );
};

export default About;
