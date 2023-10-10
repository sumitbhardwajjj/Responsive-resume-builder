import React from "react";
import "../Styles//Home.css";
import Navbar from "./Navbar";
import {NavLink} from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <Navbar />
    <div>
    <div className="temp">
        <div>
          <h1>Welcome To Portfolio.com</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
            natus! Ad, minima reprehenderit, commodi dignissimos itaque pariatur
            veritatis molestias neque tenetur sequi sint quia possimus a harum
            quibusdam? Voluptas totam cupiditate odio commodi? Vero, magni,
            quisquam repellendus culpa neque quaerat repudiandae eligendi
            molestias, dolorum non praesentium voluptas obcaecati fuga minus a.
            Cum adipisci omnis et incidunt sequi ab amet porro quasi distinctio
            voluptates perspiciatis quod commodi nisi, neque hic in quam nemo
            aut libero dolor aliquid ad perferendis eligendi blanditiis? Iure
            placeat rerum non deleniti voluptatem dignissimos molestias, aut,
            officiis magni harum distinctio ullam quo doloremque deserunt minima
            a quasi?
          </p>
          <div className="build">
           <NavLink to='detail'> <button>Build your CV</button></NavLink>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Home;
