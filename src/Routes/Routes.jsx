import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Store from "../Pages/Store/Store";
import Post from "../Pages/Post/Post";
import Carousel from "../Pages/Carousel/Carousel";
import Members from "../Pages/Members/Members";
import User from "../Pages/User/User";
import Whatsapp from "../Pages/Whatsapp/Whatsapp";
import NotFound from "../Pages/NotFound/NotFound";
import DynamicStore from "../Pages/Store/DynamicStore/DynamicStore";
import DynamicPost from "../Pages/Post/DynamicPost/DynamicPost";

const Routes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <Dashboard />,
        },
        {
          path: "/store",
          element: <Store />,
        },
        {
          path: "store/:id",
          element: <DynamicStore />,
        },
        {
          path: "/post",
          element: <Post />,
        },
        {
          path: "/post/:id",
          element: <DynamicPost />,
        },
        {
          path: "/carousel",
          element: <Carousel />,
        },
        {
          path: "/members",
          element: <Members />,
        },
        {
          path: "/user",
          element: <User />,
        },
        {
          path: "/whatsapp",
          element: <Whatsapp />,
        },
      ],
    },
    {
      path: "/login",
      element: <NotFound />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Routes;
