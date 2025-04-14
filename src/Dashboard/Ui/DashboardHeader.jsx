import { FcSportsMode } from "react-icons/fc";
import { Link } from "react-router-dom";

const DashboardHeader = () => {
  return (
    <div className="bg-[#0f0f0f] w-full sticky top-0  z-[999] font-poppins ">
      <header className=" flex items-center px-4 lg:px-8 py-3">
        <Link to="/">
          <p className="text-white text-3xl font-bold flex items-center border-r-2 border-teal-700 pr-4">
            <FcSportsMode className="text-4xl mr-2" />
            SPORTS<span className="text-teal-400">ZONE</span>
          </p>
        </Link>

        <button className="bg-gradient-to-r from-teal-600 via-teal-700 to-teal-900 mx-2 hover:bg-red-600 text-white px-6 py-2 rounded">
          GO TO HOME
        </button>
      </header>{" "}
    </div>
  );
};

export default DashboardHeader;
