import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import Categories from "../Components/homeLayouts/Categories";
import CategoryNews from "../pages/CategoryNews";
import Login from "../pages/Login";
import Register from "../pages/Register";
import About from "../pages/About";
import NewsDetails from "../pages/NewsDetails";
import PrivateRouts from "./PrivateRoutes/PrivateRouts";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/category/:id",
        Component: CategoryNews,
        loader: async () => {
          const res = await fetch("/news.json");
          if (!res.ok) {
            throw new Error("Failed to load data");
          }
          return res.json();
        },
      },
    ],
  },
  {
    path: "login",
    Component: Login,
  },
  {
    path: "register",
    Component: Register,
  },
  {
    path: "about",
    Component: About,
  },
  {
    path: "/newsDetails/:id",
    // Component: NewsDetails,
    element: (
      <PrivateRouts>
        <NewsDetails></NewsDetails>
      </PrivateRouts>
    ),
    loader: () => fetch("/news.json"),
  },
  {
    path: "/*",
    element: <h3>Page not found 404</h3>,
  },
]);
export default router;
