import React, { useContext } from "react";
import DataContext from "../context/DataContext";
import { NavLink } from "react-router-dom";
import { getCategory, getHealtTips } from "../helper/helper";
// import BmiResult from '../components/BmiResult';

const Result = () => {
  const { data } = useContext(DataContext);

  console.log(data);

  const { height, weight, age, gender } = data;
  if (!height || !weight) return;

  const result = Number(weight) / (Number(height) / 100) ** 2;
  console.log(result);
  const category = getCategory(result);
  const healthTips = getHealtTips(age, gender, result, category);
  console.log(healthTips);

  return (
    <div className="bg-white rounded-md shadow-md px-6 py-10">
      <h1 className= {`${category.color} w-fit px-6 py-2 font-bold text-2xl rounded-md mx-auto mt-8`}>{category.level}</h1>

      <p className="text-lg font-semibold text-center my-8">Your BMI: {result.toFixed(2)}</p>
      <ul>
        {
            healthTips.map((tip, index) => {
              return <li key={index} className="text-lg font-medium text my-2">{tip}</li>;
            })
        }
      </ul>
      <NavLink to="/form"><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Go Back
      </button></NavLink>
    </div>
  );
};

export default Result;
