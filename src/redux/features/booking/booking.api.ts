/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "@/redux/api/baseApi";

const bookingApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // ! for getting all bookings
    getBookings: builder.query({
      query: () => {
        return {
          url: "/bookings",
          method: "GET",
        };
      },
      transformResponse: (response) => {
        return {
          data: (response as any)?.data,
        };
      },
    }),

    // ! for getting all completed booking
    getCompletedBookings: builder.query({
      query: () => {
        return {
          url: "/bookings/completed-booking",
          method: "GET",
        };
      },
      transformResponse: (response) => {
        return {
          data: (response as any)?.data,
        };
      },
    }),

    // ! for approve a booking
    approveBooking: builder.mutation({
      query: (id: string) => {
        return {
          url: `/bookings/approve-booking/${id}`,
          method: "PATCH",
        };
      },
    }),

    // ! for canceling a booking
    cancelBooking: builder.mutation({
      query: (id: string) => {
        return { url: `/bookings/cancel-booking/${id}`, method: "PATCH" };
      },
    }),

    // ! book a  car
    makeBooking: builder.mutation({
      query: (payload) => {
        return {
          url: `/bookings`,
          method: "POST",
          body: payload,
        };
      },
    }),

    //
  }),
});

//
export const {
  useGetBookingsQuery,
  useApproveBookingMutation,
  useCancelBookingMutation,
  useGetCompletedBookingsQuery,
  useMakeBookingMutation,
} = bookingApi;
