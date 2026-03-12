import { createContext, useContext, useEffect, useState } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [goalWeight, setGoalWeight] = useState(()=>{
    const storedGoalWeight = localStorage.getItem("GoalWeight");
    return storedGoalWeight ? parseFloat(storedGoalWeight) : 65;
  });
  const [data, setData] = useState({
    age: "",
    height: "",
    weight: 70,
    gender: "Male",
  });
  const [history, setHistory] = useState(()=>{
    const storedHistory = localStorage.getItem("History");
    return storedHistory ? JSON.parse(storedHistory) : [];
  })


  useEffect(() => {
    localStorage.setItem("GoalWeight", goalWeight);
  }, [goalWeight]);

  useEffect(() => {
    localStorage.setItem("History", JSON.stringify(history));
  }, [history]);

  return (
    <DataContext.Provider value={{ data, setData, goalWeight, setGoalWeight, history, setHistory  }}>
      {children}
    </DataContext.Provider>
  );
};
const useWeightContext = () => {
  return useContext(DataContext);
};
export default useWeightContext;
