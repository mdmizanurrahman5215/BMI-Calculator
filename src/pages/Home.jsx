import React from "react";
import Footer from "../UI/Footer";
import { NavLink } from "react-router-dom";
import { FaHeartbeat } from "react-icons/fa";

const Home = () => {
  return (
    <div className="w-full md:w-3/6 bg-[#d1c5c5] p-6 md:p-10 rounded-md shadow-md mx-auto">

      {/* Header */}
      <div className="flex justify-between items-center py-6">
        <h1 className="text-2xl md:text-3xl font-bold flex items-center gap-2">
          <FaHeartbeat className="text-red-500" />
          BMI CAR+
        </h1>
        <span className="text-3xl">🏥</span>
      </div>

      {/* BMI Calculator Section */}
      <div>
        <h3 className="text-xl md:text-2xl font-semibold">Calculate</h3>

        <NavLink to="form">
          <div className="w-full bg-white px-4 py-6 rounded-md shadow-md my-4 hover:shadow-xl transition cursor-pointer text-center">
            <img
              src="/bmi.png"
              alt="bmi"
              className="w-20 mx-auto mb-3"
            />
            <p className="text-lg font-semibold">BMI Calculator</p>
          </div>
        </NavLink>
      </div>

      {/* Nearby Section */}
      <div>
        <h3 className="text-xl md:text-2xl font-bold">Near By</h3>

        <div className="grid grid-cols-3 gap-4 bg-white px-4 py-6 rounded-md shadow-md my-4 text-center">

          <div className="hover:scale-105 transition cursor-pointer">
            <img
              src="/weightlifter 1.png"
              alt="weightlifter"
              className="w-14 mx-auto"
            />
            <p className="font-medium mt-2">Fitness Center</p>
          </div>

          <div className="hover:scale-105 transition cursor-pointer">
            <img
              src="/lotus.png"
              alt="yoga"
              className="w-14 mx-auto"
            />
            <p className="font-medium mt-2">Yoga Event</p>
          </div>

          <div className="hover:scale-105 transition cursor-pointer">
            <img
              src="/zumba.png"
              alt="zumba"
              className="w-14 mx-auto"
            />
            <p className="font-medium mt-2">Zumba Event</p>
          </div>

        </div>
      </div>

      {/* Health News */}
      <div>
        <h3 className="text-xl md:text-2xl font-bold">Health News</h3>

        <div className="rounded-md overflow-hidden shadow-md my-4 hover:shadow-xl transition">
          <img
            src="/symnastics.png"
            alt="health news"
            className="w-full object-cover"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;