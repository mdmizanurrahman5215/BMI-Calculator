// import { createBrowserRouter } from "react-router-dom";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./UI/Footer";
import Form from "./components/Form";
import Result from "./pages/Result";
import WeightTracker from "./pages/WeightTracker ";

function App() {
  // const router = createBrowserRouter([])

  return (
    <>
      <div className="min-h-screen bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 p-4">
        <div className="w-md mx-auto">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/form" element={<Form />} />
              <Route path="/result" element={<Result />} />
              <Route path="/weight-tracker" element={<WeightTracker />} />
            </Routes>
       
          </BrowserRouter>
        </div>
      </div>
    </>
  );
}

export default App;
