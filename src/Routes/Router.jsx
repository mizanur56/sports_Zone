import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import ItemDetails from "../Pages/ItemDetails/ItemDetails";
import BlogList from "../Pages/Blog/Blog";
import Login from "../Auth/Login/Login";
import SignUp from "../Auth/SignUp/SignUp";
import Dashboard from "../Dashboard/Dashboard";
import AdminHome from "../Dashboard/Ui/AdminPage/AdminHome";

import AddProduct from "../Dashboard/Ui/AdminPage/AddProduct";
import UserHome from "../Dashboard/Ui/UserPage/UserHome";
import AddBlog from "../Dashboard/Ui/AdminPage/AddBlog";
import Products from "../Pages/Products/Products";
import ContactUs from "../Pages/ContactUs/ContactUs";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/itemDetails/:id",
        element: <ItemDetails />,
      },
      {
        path: "/blog",
        element: <BlogList />,
      },
      {
        path: "/contactUs",
        element: <ContactUs />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
      {
        path: "/products",
        element: <Products />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      // admin route
      {
        path: "adminHome",
        element: <AdminHome />,
      },
      {
        path: "addProduct",
        element: <AddProduct />,
      },
      {
        path: "addBlog",
        element: <AddBlog />,
      },

      // user route
      {
        path: "userHome",
        element: <UserHome />,
      },
    ],
  },
  {
    path: "/contact",
    element: <h1>Contact</h1>,
  },
]);
