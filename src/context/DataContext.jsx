import { createContext, useContext, useState } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [goalWeight, setGoalWeight] = useState("");
  const [data, setData] = useState({
    age: "",
    height: "",
    weight: "",
    gender: "Male",
  });
  return (
    <DataContext.Provider value={{ data, setData, goalWeight, setGoalWeight }}>
      {children}
    </DataContext.Provider>
  );
};
const useWeightContext = () => {
  return useContext(DataContext);
};
export default useWeightContext;
