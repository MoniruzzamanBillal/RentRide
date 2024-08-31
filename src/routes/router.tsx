import App from "@/App";
import {
  AboutUs,
  CarDetail,
  Dashboard,
  DashboardLayout,
  HomePage,
  Login,
  SignUp,
} from "@/pages";

import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/sign-up",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/detail/:id",
        element: <CarDetail />,
      },
      {
        path: "/about",
        element: <p>about us </p>,
      },

      {
        path: "/dashboard",
        element: <DashboardLayout />,
        children: [
          {
            path: "/dashboard",
            element: <Dashboard />,
          },
        ],
      },
    ],
  },

  //
]);

export default router;
