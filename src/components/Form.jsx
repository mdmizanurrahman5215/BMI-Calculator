import React, { useState } from "react";
import Footer from "../UI/Footer";

const Form = () => {
  const [age, setAge] = useState();
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const [gender, setGender] = useState("Male");
  console.log(age);
  const handleSubmit = (e)=>{
    e.preventDefault()
  }
  return (
    <div className="w-2/4 bg-[#d1c5c5] p-10 rounded-md shadow-md">
      <form action="" onSubmit={handleSubmit} className="space-y-4 py-6">
        <h3 className="text-2xl font-bold">Gender</h3>
        <div className="flex justify-between items-center">
            {
                 ["Male", "Female"].map((g)=>{
                    return(
                      <p key={g} 
                       onClick={() => setGender(g)}
                      className={` px-4 py-1 rounded-md  font-semibold text-2xl ${g == gender ? "bg-[#4287f5] text-white":"bg-gray-300"}`}
                      >{g}</p>
                    )
                })
            }
     
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="age" className="text-2xl font-semibold">
            Age :
          </label>
          <input
            type="number"
            id="age"
            className=" px-4 py-2 rounded-md outline-none bg-white shadow-2xl"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="Height" className="text-2xl font-semibold">
            Height : 0
          </label>
          <input
            type="range"
            min={0}
            max={200}
            id="Height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="Weight" className="text-2xl font-semibold">
            Weight : 0
          </label>
          <input
            type="range"
            min={0}
            max={200}
            id="Weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-purple-500 text-white py-2 rounded-lg text-xl font-bold hover:bg-purple-600 transition"
        >
          Calculate BMI
        </button>
      </form>
      <Footer/>
    </div>
  );
};

export default Form;
