import { createBrowserRouter } from "react-router";
import Header from "../Components/Header";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Header,
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
