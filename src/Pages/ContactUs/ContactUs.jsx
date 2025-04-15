import {
  FaFacebookF,
  FaInstagram,
  FaPhone,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import bgImage from "../../assets/The-Gym-Pump-scaled.jpeg";
import HeroBanner from "../../Shared/HeroBanner";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
const ContactUs = () => {
  return (
    <div>
      <HeroBanner bgImage={bgImage} title="Contact Us" />
      <section className="max-w-7xl mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold text-teal-700">GET IN TOUCH</h1>
        <p className="text-gray-600 w-1/2 py-3">
          Whether you have a question, want to collaborate, or just want to say
          hi, we’d love to hear from you! Fill out the form below or reach out
          to us directly via email or phone.
        </p>
        <div className="lg:flex items-center gap-3">
          <div className="w-[550px] bg-gray-100 px-4 py-8">
            <label className="font-bold text-lg pb-1" htmlFor="">
              Office Location
            </label>
            <p className="flex items-center gap-3 pb-2">
              <FaLocationDot className="text-teal-600" /> 38 Kemal Ataturk Ave,
              Dhaka 1213, Bangladesh
            </p>

            <label className="font-bold text-lg pb-1" htmlFor="">
              Phone Number
            </label>
            <p className="flex items-center gap-3 pb-2">
              <FaPhone className="text-teal-600" /> +8801765432345
            </p>

            <label className="font-bold text-lg pb-1" htmlFor="">
              Email Address
            </label>
            <p className="flex items-center gap-3 pb-2">
              <MdOutlineMailOutline className="text-teal-600" />{" "}
              sportszone@gmail.com
            </p>
            <div className="gap-3">
              <p className="font-bold text-lg pb-2">Follow us: </p>
              <div className="flex items-center gap-2">
                <FaFacebookF className="text-2xl text-teal-600" />
                <FaTwitter className="text-2xl text-teal-600" />
                <FaInstagram className="text-2xl text-teal-600" />
                <FaYoutube className="text-2xl text-teal-600" />
              </div>
            </div>
          </div>
          <div className="mx-4 md:mx-14 w-2/3 mt-10 shadow-2xl rounded-lg">
            <div className="p-4 md:p-8">
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name *"
                  className="w-full md:w-1/2 rounded-md border border-slate-300 bg-white px-3 py-2 placeholder:font-semibold placeholder:text-gray-500 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email *"
                  className="w-full md:w-1/2 rounded-md border border-slate-300 bg-white px-3 py-2 placeholder:font-semibold placeholder:text-gray-500 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                />
              </div>

              <div className="my-6 flex flex-col md:flex-row gap-4">
                <select
                  name="service"
                  className="w-full md:w-1/2 rounded-md border border-slate-300 bg-white px-3 py-2 font-semibold text-gray-500 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                >
                  <option disabled selected>
                    Please Select Service
                  </option>
                  <option>Consultation</option>
                  <option>Equipment Inquiry</option>
                </select>

                <select
                  name="time"
                  className="w-full md:w-1/2 rounded-md border border-slate-300 bg-white px-3 py-2 font-semibold text-gray-500 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                >
                  <option disabled selected>
                    Select Time Slot
                  </option>
                  <option>10:00 AM</option>
                  <option>2:00 PM</option>
                  <option>4:00 PM</option>
                </select>
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Your message here..."
                  rows="4"
                  className="mb-5 w-2/3 resize-none rounded-md border border-slate-300 p-4 placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                />
              </div>

              <button className="cursor-pointer rounded-lg bg-blue-700 hover:bg-blue-800 px-8 py-4 text-sm font-semibold text-white transition">
                Submit Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
