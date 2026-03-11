import React from "react";
import { CiUser } from "react-icons/ci";
import { FaNutritionix, FaWeight } from "react-icons/fa";

import { IoHome } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full bg-white px-4 py-5 rounded-md shadow-md  flex justify-evenly items-center">
      <NavLink to="/">
        {" "}
        <span className="text-4xl text-purple-600">
          <IoHome />
        </span>
      </NavLink>
      <NavLink to="/weight-tracker" className="text-4xl text-purple-600">
        <FaWeight />
      </NavLink>
      <span className="text-4xl text-purple-600">
        <FaNutritionix />
      </span>
      <span className="text-4xl text-purple-600">
        <CiUser />
      </span>
    </div>
  );
};

export default Footer;
