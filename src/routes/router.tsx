import App from "@/App";
import { AddNewCar } from "@/components/ui";
import {
  AboutUs,
  CarDetail,
  Dashboard,
  DashboardLayout,
  HomePage,
  Login,
  ManageBookings,
  ManageCars,
  ManageReturnCar,
  ManageUsers,
  SignUp,
  UserBooking,
  UserPayment,
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
          {
            path: "/dashboard/add-car",
            element: <AddNewCar />,
          },
          {
            path: "/dashboard/admin/manage-car",
            element: <ManageCars />,
          },
          {
            path: "/dashboard/admin/manage-booking",
            element: <ManageBookings />,
          },
          {
            path: "/dashboard/admin/manage-return-car",
            element: <ManageReturnCar />,
          },
          {
            path: "/dashboard/admin/manage-user",
            element: <ManageUsers />,
          },
          {
            path: "/dashboard/user/user-booking",
            element: <UserBooking />,
          },
          {
            path: "/dashboard/user/user-payment",
            element: <UserPayment />,
          },
        ],
      },
    ],
  },

  //
]);

export default router;
