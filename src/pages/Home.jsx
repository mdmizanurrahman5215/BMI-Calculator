import React from "react";
import Footer from "../UI/Footer";
import { NavLink } from "react-router-dom";
import { FaHeartbeat } from "react-icons/fa";

const Home = () => {
  return (
    <div className="bg-[#d1c5c5] p-4 md:p-8 rounded-md shadow-md mx-auto max-w-5xl">
      {/* Header */}
      <div className="flex justify-between items-center py-4 md:py-6">
        <h1 className="text-2xl md:text-3xl font-bold flex items-center gap-2">
          <FaHeartbeat className="text-red-500" />
          BMI CAR+
        </h1>
        <span className="text-3xl">🏥</span>
      </div>

      {/* BMI Calculator Section */}
      <div className="mb-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-2">Calculate</h3>

        <NavLink to="form">
          <div className="w-full bg-white px-4 py-4 rounded-md shadow-md hover:shadow-xl transition transform hover:-translate-y-1 cursor-pointer text-center">
            <img src="/bmi.png" alt="bmi" className="w-16 md:w-20 mx-auto mb-2" />
            <p className="text-lg font-semibold">BMI Calculator</p>
          </div>
        </NavLink>
      </div>

      {/* Nearby Section */}
      <div className="mb-6">
        <h3 className="text-xl md:text-2xl font-bold mb-2">Near By</h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { img: "/weightlifter 1.png", title: "Fitness Center" },
            { img: "/lotus.png", title: "Yoga Event" },
            { img: "/zumba.png", title: "Zumba Event" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-md shadow-md p-3 flex flex-col items-center justify-center gap-1 hover:scale-105 transition transform cursor-pointer h-28"
            >
              <img src={item.img} alt={item.title} className="w-12 md:w-14 mx-auto" />
              <p className="font-medium text-center text-sm md:text-base">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Health News Section */}
      <div className="mb-6">
        <h3 className="text-xl md:text-2xl font-bold mb-2">Health News</h3>
        <div className="rounded-md overflow-hidden shadow-md hover:shadow-xl transition">
          <img
            src="/symnastics.png"
            alt="health news"
            className="w-full object-cover h-48 md:h-64"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;