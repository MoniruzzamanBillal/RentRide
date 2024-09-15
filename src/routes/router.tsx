import App from "@/App";
import { AddNewCar, UpdateCar } from "@/components/ui";
import {
  AboutUs,
  BookForm,
  BookingConfirmation,
  CarDetail,
  CompleteBooking,
  Dashboard,
  DashboardLayout,
  HomePage,
  Login,
  ManageBookings,
  ManageCars,
  ManageReturnCar,
  ManageUsers,
  PaymentSuccess,
  SignUp,
  UpdateBookForm,
  UpdateUserForm,
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
        path: "/update-user/:id",
        element: <UpdateUserForm />,
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
        path: "/car-detail/:id",
        element: <CarDetail />,
      },
      {
        path: "/book-car/:carId",
        element: <BookForm />,
      },
      {
        path: "/update-book-car/:bookId",
        element: <UpdateBookForm />,
      },
      {
        path: "/complete-booking/:bookId",
        element: <CompleteBooking />,
      },
      {
        path: "/confirm-booking",
        element: <BookingConfirmation />,
      },
      {
        path: "/payment-success",
        element: <PaymentSuccess />,
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
            path: "/dashboard/update-car/:id",
            element: <UpdateCar />,
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
