import React, { useState } from "react";
import { FaWeight, FaPlus, FaChartLine, FaBullseye } from "react-icons/fa";
import useWeightContext from "../context/DataContext";

const WeightTracker = () => {
  const { data, goalWeight, setGoalWeight } = useWeightContext();
  const [tempWeight, setTempWeight] = useState("");
  let message = "";


  console.log(goalWeight);
  const handleButtonClick = () => {
    if (tempWeight) {
      setGoalWeight(tempWeight);
      setTempWeight("");
    }
  };
  console.log("current weight ", data.weight);

  const remainingWeight =   data.weight - goalWeight;
  console.log(remainingWeight);
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
    <div className="w-150 mx-auto p-6 space-y-6 border-red-500 border-2">
      {/* Header */}
      {/* <div className="flex justify-between items-center">
        <h1 className="text-3xl text-white font-bold flex items-center gap-2">
          <FaWeight className="text-purple-500" />
          Weight Tracker
        </h1>

        <button className="flex items-center gap-2 bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600">
          <FaPlus />
          Add Weight
        </button>
      </div> */}

      {/* Current Weight Card */}
      <div className="bg-white rounded-xl shadow-md p-6 text-center">
        <h2 className="text-lg font-semibold text-gray-500">Current Weight</h2>
        <p className="text-4xl font-bold text-purple-600 mt-2">
          {data?.weight || 0}
        </p>
        <p className="text-sm text-gray-500 mt-1">Last updated: Today</p>
      </div>

      {/* Goal Section */}
      <div className="bg-white rounded-xl shadow-md p-6 flex flex-col gap-6">
        <div className="text-center">
          <input
            type="number"
            value={tempWeight}
            onChange={(e) => setTempWeight(e.target.value)}
            placeholder="set your goal weight"
            className=" text-purple-700 placeholder:text-gray-400 border border-purple-500
             mx-auto px-3 py-2 rounded-md "
          />
          <button
            onClick={handleButtonClick}
            className="bg-purple-600 font-semibold text-white px-4 py-2 rounded-md hover:bg-purple-700 ml-2"
          >
            Set Goal
          </button>
        </div>
        <div className="flex items-center gap-3">
          <FaBullseye className="text-green-500 text-2xl" />
          <div>
            <p className="text-2xl font-semibold">
              Weight Goal :{" "}
              <span className="text-purple-600">{goalWeight}</span>
            </p>
          </div>
        </div>
      </div>

      {/* Chart Section */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="flex items-center gap-2 text-xl font-semibold mb-4">
          <FaChartLine className="text-blue-500" />
          Weight Progress
        </h3>

        {/* Chart Placeholder */}
      <div className="grid justify-between items-center">
  {/* Card 1 */}
  <div className="bg-white px-6 py-4 rounded-md shadow-md">
    <p className="text-2xl font-semibold">Weight  Status : </p>  {/* clearer than Weight Update */}
    <p className="text-xl font-semibold">
      {remainingWeight < 0
        ? "Weight to Gain"
        : remainingWeight > 0
        ? "Weight to Lose"
        : "Goal Achieved"} {" "}
      
    </p>
  </div>

  {/* Card 2 */}
  <div className="bg-white px-6 py-4 rounded-md shadow-md">
    <p className="text-2xl font-semibold">Advice :</p>  {/* instead of Remaining Weight */}
    <p
      className={`text-xl font-semibold ${
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
      </div>

      {/* Weight History */}
      <div className="bg-white rounded-xl shadow-md p-6">
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
    </div>
  );
};

export default WeightTracker;
