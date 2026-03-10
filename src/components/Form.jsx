import React, { useContext } from "react";
import Footer from "../UI/Footer";
import DataContext from "../context/DataContext";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const { data, setData } = useContext(DataContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);

    navigate("/result");
  };
  return (
    <div className="w-2/4 bg-[#d1c5c5] p-10 rounded-md shadow-md">
      <form action="" onSubmit={handleSubmit} className="space-y-4 py-6">
        <h3 className="text-2xl font-bold">Gender</h3>
        <div className="flex justify-between items-center">
          {["Male", "Female"].map((g) => {
            return (
              <p
                key={g}
                onClick={() => setData({ ...data, gender: g })}
                className={` px-4 py-1 rounded-md  font-semibold text-2xl  cursor-pointer ${g == data.gender ? "bg-[#4287f5] text-white" : "bg-gray-300"}`}
              >
                {g}
              </p>
            );
          })}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="age" className="text-2xl font-semibold">
            Age :
          </label>
          <input
            type="number"
            id="age"
            name="age"
            className=" px-4 py-2 rounded-md outline-none bg-white shadow-2xl"
            value={data.age}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="Height" className="text-2xl font-semibold">
            Height : {data.height || 0} cm
          </label>
          <input
            type="range"
            min={0}
            max={200}
            id="Height"
            name="height"
            value={data.height || 0}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="Weight" className="text-2xl font-semibold">
            Weight : {data.weight || 0} kg
          </label>
          <input
            type="range"
            min={0}
            max={200}
            id="Weight"
            name="weight"
            value={data.weight || 0}
            onChange={(e) => handleChange(e)}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-purple-500 text-white py-2 rounded-lg text-xl font-bold hover:bg-purple-600 transition"
        >
          Calculate BMI
        </button>
      </form>
      <div>
        result :{" "}
        {data.weight && data.height
          ? (data.weight / (data.height / 100) ** 2).toFixed(2)
          : "0"}
      </div>
      <Footer />
    </div>
  );
};

export default Form;
