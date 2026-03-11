import React, { useState } from "react";
import { FaWeight, FaPlus, FaChartLine, FaBullseye } from "react-icons/fa";
import useWeightContext from "../context/DataContext";
import Footer from "../UI/Footer";

const WeightTracker = () => {
  const { data, goalWeight, setGoalWeight } = useWeightContext();
  const [tempWeight, setTempWeight] = useState("");
  let message = "";

  const handleButtonClick = () => {
    if (tempWeight) {
      setGoalWeight(tempWeight);
      setTempWeight("");
    }
  };

  const remainingWeight = data.weight - goalWeight;

  if (remainingWeight < 0) {
    message =
      "You need to gain " +
      Math.abs(remainingWeight) +
      " kg to reach your goal";
  } else if (remainingWeight > 0) {
    message = "You need to lose " + remainingWeight + " kg to reach your goal";
  } else {
    message = "Congratulations! You've reached your goal weight!";
  }

  return (
    <div className="max-w-4xl mx-auto mt-10 px-4 sm:px-6 lg:px-8">
      {/* Current Weight Card */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-6 text-center">
        <h2 className="text-lg font-semibold text-gray-500">Current Weight</h2>
        <p className="text-4xl font-bold text-purple-600 mt-2">
          {data?.weight || 0} kg
        </p>
        <p className="text-sm text-gray-500 mt-1">Last updated: Today</p>
      </div>

      {/* Goal Section */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-6 flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <input
            type="number"
            value={tempWeight}
            onChange={(e) => setTempWeight(e.target.value)}
            placeholder="Set your goal weight"
            className="text-purple-700 placeholder:text-gray-400 border border-purple-500 px-4 py-2 rounded-md w-full sm:w-64"
          />
          <button
            onClick={handleButtonClick}
            className="bg-purple-600 font-semibold text-white px-6 py-2 rounded-md hover:bg-purple-700"
          >
            {goalWeight ? "Edit Goal" : "Set Goal"}
          </button>
        </div>
        <div className="flex items-center gap-3 justify-center">
          <FaBullseye className="text-green-500 text-2xl" />
          <p className="text-2xl font-semibold">
            Weight Goal: <span className="text-purple-600">{goalWeight || 0} kg</span>
          </p>
        </div>
      </div>

      {/* Chart / Status Section */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-6 grid gap-6">
        {/* Card 1 */}
        <div className="bg-white px-6 py-4 rounded-md shadow-md flex flex-col justify-center items-center h-32">
          <p className="text-2xl font-semibold mb-2">Weight Status</p>
          <p className="text-xl font-semibold">
            {remainingWeight < 0
              ? "Weight to Gain"
              : remainingWeight > 0
              ? "Weight to Lose"
              : "Goal Achieved"}
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white px-6 py-4 rounded-md shadow-md flex flex-col justify-center items-center h-32">
          <p className="text-2xl font-semibold mb-2">Advice</p>
          <p
            className={`text-xl font-semibold text-center ${
              remainingWeight < 0
                ? "text-green-500"
                : remainingWeight > 0
                ? "text-red-500"
                : "text-blue-500"
            }`}
          >
            {message}
          </p>
        </div>
      </div>

      {/* Weight History */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-10">
        <h3 className="text-xl font-semibold mb-4">Weight History</h3>
        <ul className="space-y-3">
          <li className="flex justify-between bg-gray-100 p-3 rounded-lg">
            <span>10 Mar 2026</span>
            <span className="font-semibold">72 kg</span>
          </li>
          <li className="flex justify-between bg-gray-100 p-3 rounded-lg">
            <span>5 Mar 2026</span>
            <span className="font-semibold">73 kg</span>
          </li>
          <li className="flex justify-between bg-gray-100 p-3 rounded-lg">
            <span>1 Mar 2026</span>
            <span className="font-semibold">74 kg</span>
          </li>
        </ul>
      </div>

      <Footer />
    </div>
  );
};

export default WeightTracker;