
import DataContext from "../context/DataContext";
import { useNavigate } from "react-router-dom";
import { getCategory, getHealtTips } from "../helper/helper";
import { FaHeartbeat, FaLightbulb, FaRunning } from "react-icons/fa";
import useWeightContext from "../context/DataContext";

const Result = () => {
  const { data, setData } = useWeightContext();
  const navigate = useNavigate();

  const handleReset = () => {
    setData({
      gender: "",
      age: "",
      height: 0,
      weight: 0,
    });

    navigate("/form");
  };

  const { height, weight, age, gender } = data;
  if (!height || !weight) return null;

  const result = Number(weight) / (Number(height) / 100) ** 2;
  const category = getCategory(result);
  const healthTips = getHealtTips(age, gender, result);

  return (
    <div className="bg-white shadow-xl rounded-xl p-6 md:p-10 max-w-xl mx-auto mt-10">

      {/* Heading */}
      <h2 className="text-3xl font-bold text-center mb-4">
        Your BMI Result
      </h2>

      {/* Category Badge */}
      <div className="flex justify-center">
        <span
          className={`${category.color} px-6 py-2 rounded-full text-lg font-semibold`}
        >
          {category.level}
        </span>
      </div>

      {/* BMI Value */}
      <p className="text-center text-xl font-semibold mt-6">
        BMI Score: <span className="text-blue-600">{result.toFixed(2)}</span>
      </p>

      {/* Tips Section */}
      <div className="mt-8">
        <h3 className="text-2xl font-bold flex items-center gap-2 mb-4">
          <FaHeartbeat className="text-red-500" />
          Health Tips
        </h3>

        <div className="grid gap-4">
          {healthTips.map((tip, index) => (
            <div
              key={index}
              className="flex items-start gap-3 bg-gray-100 p-4 rounded-lg shadow-sm hover:shadow-md transition"
            >
              <FaLightbulb className="text-yellow-500 text-xl mt-1" />
              <p className="text-lg">{tip}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Action Button */}
      <div className="flex justify-center mt-8">
        <button
          onClick={handleReset}
          className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg text-lg font-semibold transition"
        >
          <FaRunning />
          Calculate Again
        </button>
      </div>
    </div>
  );
};

export default Result;