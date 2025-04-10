import { LuArrowDownWideNarrow } from "react-icons/lu";
import { IoCallOutline } from "react-icons/io5";
import { GrDeliver } from "react-icons/gr";

const Service = () => {
  const services = [
    {
      icon: (
        <GrDeliver className="text-7xl text-teal-400 border-2 border-teal-400 rounded-full p-3 transition-colors duration-300 ease-in-out hover:bg-teal-400 hover:text-white" />
      ),
      title: "FREE SHIPPING",
      description:
        "Enjoy free shipping on all orders. Discover the best deals today.",
    },
    {
      icon: (
        <IoCallOutline className="text-7xl text-teal-400 border-2 border-teal-400 rounded-full p-3 transition-colors duration-300 ease-in-out hover:bg-teal-400 hover:text-white" />
      ),
      title: "24/7 SUPPORT",
      description: "Get help anytime you need it. We're always here for you.",
    },
    {
      icon: (
        <LuArrowDownWideNarrow className="text-7xl text-teal-400 border-2 border-teal-400 rounded-full p-3 transition-colors duration-300 ease-in-out hover:bg-teal-400 hover:text-white" />
      ),
      title: "30d FREE RETURN",
      description:
        "Return items hassle-free within 30 days. Shop with confidence today.",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full py-10 px-6 bg-violet-50 my-5">
      {services.map((service, index) => (
        <div
          key={index}
          className="flex items-start gap-4 p-7 border rounded-lg shadow hover:shadow-md transition"
        >
          <div>{service.icon}</div>
          <div>
            <h2 className="font-semibold text-2xl pb-2">{service.title}</h2>
            <p className="text-gray-600 text-sm">{service.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Service;
