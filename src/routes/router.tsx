import App from "@/App";
import ProtectedRoute from "@/components/layout/ProtectedRoute";
import { AddNewCar, UpdateCar } from "@/components/ui";
import {
  AboutUs,
  BookForm,
  BookingCarList,
  BookingConfirmation,
  CarDetail,
  CarList,
  CompleteBooking,
  ContactUs,
  Dashboard,
  DashboardLayout,
  EmailResetConfirmation,
  ForgotPassword,
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
import { userRole } from "@/util/Constants";

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
        path: "/forgotPassword",
        element: <ForgotPassword />,
      },
      {
        path: "/email-reset-confirmation/:email",
        element: <EmailResetConfirmation />,
      },
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/booking-car-list",
        element: (
          <ProtectedRoute role={userRole.user}>
            <BookingCarList />
          </ProtectedRoute>
        ),
      },
      {
        path: "/booking-car-list/:location",
        element: (
          <ProtectedRoute role={userRole.user}>
            <BookingCarList />
          </ProtectedRoute>
        ),
      },
      {
        path: "/car-list",
        element: <CarList />,
      },
      {
        path: "/car-list/:location",
        element: <CarList />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/car-detail/:id",
        element: <CarDetail />,
      },
      {
        path: "/book-car/:carId",
        element: (
          <ProtectedRoute role={userRole.user}>
            <BookForm />
          </ProtectedRoute>
        ),
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
            element: (
              <ProtectedRoute role={userRole.admin}>
                <AddNewCar />
              </ProtectedRoute>
            ),
          },
          {
            path: "/dashboard/update-car/:id",
            element: (
              <ProtectedRoute role={userRole.admin}>
                <UpdateCar />
              </ProtectedRoute>
            ),
          },
          {
            path: "/dashboard/admin/manage-car",
            element: (
              <ProtectedRoute role={userRole.admin}>
                <ManageCars />
              </ProtectedRoute>
            ),
          },
          {
            path: "/dashboard/admin/manage-booking",
            element: (
              <ProtectedRoute role={userRole.admin}>
                <ManageBookings />
              </ProtectedRoute>
            ),
          },
          {
            path: "/dashboard/admin/manage-return-car",
            element: (
              <ProtectedRoute role={userRole.admin}>
                <ManageReturnCar />
              </ProtectedRoute>
            ),
          },
          {
            path: "/dashboard/admin/manage-user",
            element: (
              <ProtectedRoute role={userRole.admin}>
                <ManageUsers />
              </ProtectedRoute>
            ),
          },
          {
            path: "/dashboard/user/user-booking",
            element: (
              <ProtectedRoute role={userRole.user}>
                <UserBooking />
              </ProtectedRoute>
            ),
          },
          {
            path: "/dashboard/user/user-payment",
            element: (
              <ProtectedRoute role={userRole.user}>
                <UserPayment />
              </ProtectedRoute>
            ),
          },
        ],
      },
    ],
  },

  //
]);

export default router;
