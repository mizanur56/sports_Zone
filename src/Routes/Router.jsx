import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import ItemDetails from "../Pages/ItemDetails/ItemDetails";
import BlogList from "../Pages/Blog/Blog";
import Login from "../Auth/Login/Login";
import SignUp from "../Auth/SignUp/SignUp";
import Dashboard from "../Dashboard/Dashboard";
import AdminHome from "../Dashboard/Ui/AdminHome";

import AddProduct from "../Dashboard/Ui/AddProduct";

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
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "adminHome",
        element: <AdminHome />,
      },
      {
        path: "addProduct",
        element: <AddProduct />,
      },
    ],
  },
  {
    path: "/contact",
    element: <h1>Contact</h1>,
  },
]);
