import logo from "../assets/BMI-logo.png";
import { FaUser } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="container mx-auto">
      <nav className="flex justify-between items-center px-6 ">
        <img src={logo} alt="LOGO" width={200} />
        <div className="w-16 h-16 flex items-center justify-center  rounded-full bg-green-600">
          <FaUser className="text-3xl text-white" />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
