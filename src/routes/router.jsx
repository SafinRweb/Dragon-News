import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import { Navigate } from "react-router-dom";
import CategoryNews from "../pages/CategoryNews";
import AuthLayout from "../layout/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NewsDetails from "../pages/NewsDetails";
import PrivateRoute from "./PrivateRoute";
import Career from "../pages/Career";
import About from "../pages/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Navigate to={"/category/01"} />
      },
      {
        path: "/category/:id",
        element: <CategoryNews />,
        loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`),
      },
    ],
  },
  {
    path: "/news/:id",
    element: <PrivateRoute>
      <NewsDetails />
    </PrivateRoute>,
    loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/news/${params.id}`)
  },
  {
    path: "/career",
    element: <Career />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [{
      path: "/auth/login",
      element: <Login />
    },
    {
      path: "/auth/register",
      element: <Register />,
    },
    ],
  },
  {
    path: "*",
    element: <h1>Error URL!</h1>
  },
]);

export default router;
