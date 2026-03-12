
import Footer from "../UI/Footer";

import { useNavigate } from "react-router-dom";
import { FaMale, FaFemale } from "react-icons/fa";
import useWeightContext from "../context/DataContext";

const Form = () => {
  const { data, setData, setHistory } = useWeightContext();
  console.log(data);
  
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value , date: new Date().toLocaleDateString()}));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const historyEntry = {
      weight: data.weight,
      date: new Date().toLocaleDateString(),
    };
    setHistory((prev) => [...prev, historyEntry]);
    navigate("/result");
  };

  const bmi =
    data.weight && data.height
      ? (data.weight / (data.height / 100) ** 2).toFixed(2)
      : 0;

  return (
    <div className="  bg-white p-6 md:p-10 rounded-md shadow-md mx-auto">

      {/* FORM */}
      <form onSubmit={handleSubmit} className="space-y-6 my-10  ">

        {/* Gender */}
        <div>
          <h3 className="text-2xl font-bold mb-3">Gender</h3>

          <div className="flex gap-4">
            {["Male", "Female"].map((g) => (
              <div
                key={g}
                onClick={() => setData((prev) => ({ ...prev, gender: g }))}
                className={`flex items-center gap-2 px-5 py-2 rounded-md cursor-pointer text-lg font-semibold transition
                ${
                  g === data.gender
                    ? "bg-blue-500 text-white"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              >
                {g === "Male" ? <FaMale /> : <FaFemale />}
                {g}
              </div>
            ))}
          </div>
        </div>

        {/* Age */}
        <div className="flex flex-col gap-2">
          <label className="text-xl font-semibold">Age</label>
          <input
            type="number"
            name="age"
            value={data.age}
            onChange={handleChange}
            className="px-4 py-2 rounded-md outline-none bg-white shadow"
            required
          />
        </div>

        {/* Height */}
        <div className="flex flex-col gap-2">
          <label className="text-xl font-semibold">
            Height: <span className="text-blue-600">{data.height || 0}</span> cm
          </label>

          <input
            type="range"
            min="0"
            max="200"
            name="height"
            value={data.height || 0}
            onChange={handleChange}
            className="w-full"
            required
          />
        </div>

        {/* Weight */}
        <div className="flex flex-col gap-2">
          <label className="text-xl font-semibold">
            Weight: <span className="text-blue-600">{data.weight || 0}</span> kg
          </label>

          <input
            type="range"
            min="0"
            max="200"
            name="weight"
            value={data.weight || 0}
            onChange={handleChange}
            className="w-full"
            required
          />
        </div>

        {/* BMI Preview */}
        <div className="bg-white rounded-md shadow p-4 text-center">
          <p className="text-lg font-semibold">Live BMI</p>
          <p className="text-3xl font-bold text-purple-600">{bmi}</p>
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-purple-500 text-white py-3 rounded-lg text-xl font-bold hover:bg-purple-600 transition"
        >
          Calculate BMI
        </button>
      </form>

      <Footer />
    </div>
  );
};

export default Form;