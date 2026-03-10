import React from "react";
import Footer from "../UI/Footer";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-3/6 bg-[#d1c5c5] p-10 rounded-md shadow-md py-10">
      <div className="flex justify-around items-center py-6">
        <h1 className="text-2xl font-bold text-center">BMI CAR+</h1>
        <span className="text-2xl">icon</span>
      </div>
      <div>
        <h3 className="text-2xl font-medium">Calculate</h3>
        <div className="w-full bg-white px-4 py-5 rounded-md shadow-md my-4">
          <NavLink to="form"><img src="/public/bmi.png" alt="bmi" /></NavLink>
          <p>BMI Calculator</p>
        </div>
      </div>
      <div>
        <h3 className="text-2xl font-bold">Near By</h3>
         <div className="w-full bg-white px-4 py-5 rounded-md shadow-md my-4 flex justify-between items-center">
          <div >
          <img src="/public/weightlifter 1.png" alt="weightlifter" />
          <p>Fitness center</p>
        </div>
        <div>
          <img src="/public/lotus.png" alt="" />
          <p>Yoga Event</p>
        </div>
        <div>
          <img src="/public/zumba.png" alt="" />
          <p>Zumba Event</p>
        </div>
        </div>
      </div>
      <div>
        <h3 className="text-2xl font-bold">Health News</h3>
        <div className="">
          <img src="/public/symnastics.png" alt="" className="w-full "/>
        </div>
      </div>
       <Footer/>
    </div>
  );
};

export default Home;
