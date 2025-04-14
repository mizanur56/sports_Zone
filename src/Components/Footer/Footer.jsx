import {
  FaFacebookF,
  FaInstagram,
  FaLocationArrow,
  FaPhone,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FcSportsMode } from "react-icons/fc";
import { MdOutlineMailOutline } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white p-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Services */}
        <div className="flex flex-col gap-4">
          <Link to="/">
            <p className="text-white text-3xl font-bold flex items-center">
              <FcSportsMode className="text-4xl mr-2" />
              SPORTS<span className="text-teal-400">ZONE</span>
            </p>
          </Link>
          <p>
            Your Ultimate Destination for Premium Sports Gear and Equipment.
            Shop with us for the best in quality and performance.
          </p>
          <p className="flex items-center gap-3">
            <FaPhone className="text-teal-600" /> +8801765432345
          </p>
          <p className="flex gap-3">
            <FaLocationDot className="text-teal-600" /> 38 Kemal Ataturk Ave,
            Dhaka 1213, Bangladesh
          </p>
          <p className="flex items-center gap-3">
            <MdOutlineMailOutline className="text-teal-600" />{" "}
            sportszone@gmail.com
          </p>
        </div>

        {/* information */}
        <div className="flex flex-col gap-4">
          <h6 className="text-lg font-semibold mb-4">INFORMATION</h6>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-blue-600">
                Delivery & Returns
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                FAQ's
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Specials Offers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Terms & Condition
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* my account */}
        <div className="flex flex-col gap-4">
          <h6 className="text-lg font-semibold mb-4">MY ACCOUNT</h6>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-blue-600">
                My Account
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Shopping Cart
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Wishlist
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Tracking Info
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Order History
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="flex flex-col gap-4">
          <h6 className="text-lg font-semibold mb-4">Newsletter</h6>

          <div className="flex items-center">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 p-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700 transition">
              Subscribe
            </button>
          </div>
          <p>
            Sign up get 20% sale off for first time, Get all the latest deals
            and special offers, first.
          </p>
          <div className="flex gap-3 items-center">
            <p>Follow us: </p>
            <div className="flex items-center gap-2">
              <FaFacebookF className="text-2xl text-teal-600" />
              <FaTwitter className="text-2xl text-teal-600" />
              <FaInstagram className="text-2xl text-teal-600" />
              <FaYoutube className="text-2xl text-teal-600" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
