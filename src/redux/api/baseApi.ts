import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

const baseQuery = fetchBaseQuery({
  // baseUrl: "http://localhost:5000/api",
  baseUrl: "https://car-rental-reservation-system-beta.vercel.app/api",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;

    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }

    return headers;
  },
});

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQuery,
  endpoints: () => ({}),
  tagTypes: [
    "cars",
    "users",
    "userBooking",
    "getAllBooking",
    "completedBooking",
    "userCompletedBooking",
    "chartBooking",
    "completeBookingCount",
    "availableCar",
    "bookingRevenue",
    "completeBookUnavailableCar",
  ],
});
