import { createContext, useState } from "react";

const DataContext = createContext()

export const DataProvider = ({children})=>{
    
      const [data, setData] = useState({
    age: "",
    height: "",
    weight: "",
    gender: "Male",
    
  
  });
    return(
        <DataContext.Provider value={{data, setData}}>
            {children}
        </DataContext.Provider>
    )

}
export default DataContext;
