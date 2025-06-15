import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import { Navigate } from "react-router-dom";
import CategoryNews from "../pages/CategoryNews";

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
        element: <CategoryNews/> ,
        loader: ({params})=> fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`),
      },
    ],
  },
  // {
  //   path:"/news",
  //   // element:<News/>
  // },
  // {
  //   path:"/auth",
  //   // element:<Login/>
  // },
  // {
  //   path:"*",
  //   element: <h1>Error URL!</h1>
  // },
]);

export default router;
