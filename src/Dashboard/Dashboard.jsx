import DashboardHeader from "./Ui/DashboardHeader";
import {
  FaBars,
  FaBook,
  FaCalendar,
  FaCartPlus,
  FaHome,
  FaList,
  FaPhone,
  FaPlus,
  FaShoppingCart,
  FaStore,
  FaSwatchbook,
  FaUsers,
} from "react-icons/fa";
import { FaAlipay } from "react-icons/fa6";
import { MdRateReview } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  const isAdmin = true;
  const userMenuItems = [
    { to: "/dashboard/userHome", icon: <FaHome />, label: "USER HOME" },

    {
      to: "/dashboard/paymentHistory",
      icon: <FaAlipay />,
      label: "PAYMENT HISTORY",
    },
    {
      to: "/dashboard/cart",
      icon: <FaShoppingCart />,
      label: `MY CART`,
    },
    { to: "/dashboard/review", icon: <MdRateReview />, label: "ADD REVIEW" },
  ];
  const adminMenuItems = [
    { to: "/dashboard/adminHome", icon: <FaHome />, label: "ADMIN HOME" },
    { to: "/dashboard/addProduct", icon: <FaPlus />, label: "ADD PRODUCT" },
    { to: "/dashboard/manageItems", icon: <FaList />, label: "MANAGE ITEMS" },
    {
      to: "/dashboard/addBlogs",
      icon: <FaBook />,
      label: "ADD BLOGS",
    },
    { to: "/dashboard/allOrders", icon: <FaCartPlus />, label: "ALL ORDERS" },
    { to: "/dashboard/allUsers", icon: <FaUsers />, label: "ALL USERS" },
  ];
  const menuItems = isAdmin ? adminMenuItems : userMenuItems;
  return (
    <div>
      <DashboardHeader />
      <div className="flex">
        {/* main part */}
        <div className="w-72 min-h-full bg-gradient-to-r from-teal-600 via-teal-700 to-teal-900">
          <ul className="space-y-2 py-5">
            {menuItems.map(({ to, icon, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-2 rounded-md transition-all ${
                      isActive
                        ? "bg-red-700 text-white font-bold"
                        : "text-gray-200 hover:bg-gray-200 hover:text-black"
                    }`
                  }
                >
                  {icon} <span>{label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
          <hr />
        </div>
        {/* outlet */}
        <div className="flex-1 p-4 ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
