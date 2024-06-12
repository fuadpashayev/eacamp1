import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import CreatePost from "./pages/CreatePost";

export default createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/analytics",
    element: <Dashboard />,
  },
  {
    path: "/create-post",
    element: <CreatePost />,
  },
]);

export { RouterProvider };
