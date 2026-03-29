import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import Categories from "../Components/homeLayouts/Categories";
import CategoryNews from "../pages/CategoryNews";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "",
        element: <Home></Home>,
      },
      {
        path: "/category/:id",
        element: <CategoryNews></CategoryNews>,
      },
    ],
  },
  {
    path: "auth",
    element: <h3>authentication Layout</h3>,
  },
  {
    path: "news",
    element: <h3>news layout</h3>,
  },
  {
    path: "/*",
    element: <h3>Page not found 404</h3>,
  },
]);
export default router;
