// import { createBrowserRouter } from "react-router-dom";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./UI/Footer";
import Form from "./components/Form";

function App() {
  // const router = createBrowserRouter([])

  return (
    <>
      <section className="bg-gray-900 h-lvh flex justify-center items-center">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/form" element={<Form />} />
          </Routes>
        </BrowserRouter>
      </section>
    </>
  );
}

export default App;
