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
      providesTags: ["getAllBooking"],
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
      providesTags: ["completedBooking"],
    }),

    // ! for getting all completed booking unavailable car
    getCompletedBookingsUnavailableCar: builder.query({
      query: () => {
        return {
          url: "/bookings/completed-booking-unavailable-car",
          method: "GET",
        };
      },
      transformResponse: (response) => {
        return {
          data: (response as any)?.data,
        };
      },
      providesTags: ["completeBookUnavailableCar"],
    }),

    // ! get user  booking
    userBooking: builder.query({
      query: () => {
        return {
          url: "/bookings/my-bookings",
          method: "GET",
        };
      },

      transformResponse: (response) => {
        return {
          data: (response as any)?.data,
        };
      },
      providesTags: ["userBooking"],
    }),

    // ! get user completed booking
    userCompletedBooking: builder.query({
      query: () => {
        return {
          url: "/bookings/my-completed-bookings",
          method: "GET",
        };
      },

      transformResponse: (response) => {
        return {
          data: (response as any)?.data,
        };
      },
      providesTags: ["userCompletedBooking"],
    }),

    // ! get payment completed booking count
    completedPaymentBookingCount: builder.query({
      query: () => {
        return {
          url: "/bookings/completed-payment-booking-count",
          method: "GET",
        };
      },

      transformResponse: (response) => {
        return {
          data: (response as any)?.data,
        };
      },
      providesTags: ["completeBookingCount"],
    }),

    // ! get booking revenue
    completedPaymentBookingRevenue: builder.query({
      query: () => {
        return {
          url: "/bookings/completed-payment-booking-revenue",
          method: "GET",
        };
      },

      transformResponse: (response) => {
        return {
          data: (response as any)?.data,
        };
      },
      providesTags: ["bookingRevenue"],
    }),

    // ! get specific booking
    singleBooking: builder.query({
      query: (id: string) => {
        return {
          url: `/bookings/single-booking/${id}`,
          method: "GET",
        };
      },

      transformResponse: (response) => {
        return {
          data: (response as any)?.data,
        };
      },
    }),

    // ! get all completed payment booking for chart data
    completedPaymentBooking: builder.query({
      query: (query) => {
        return {
          url: `/bookings/completed-payment-booking`,
          method: "GET",
          params: { range: query },
        };
      },
      transformResponse: (response) => {
        return {
          data: (response as any)?.data,
        };
      },
      providesTags: ["chartBooking"],
    }),

    // ! for approve a booking
    approveBooking: builder.mutation({
      query: (id: string) => {
        return {
          url: `/bookings/approve-booking/${id}`,
          method: "PATCH",
        };
      },
      invalidatesTags: [
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
    }),

    // ! for updating a booking
    updateBooking: builder.mutation({
      query: (payload) => {
        const { bookId, bookingData } = payload;
        return {
          url: `/bookings/update-booking/${bookId}`,
          method: "PATCH",
          body: bookingData,
        };
      },
      invalidatesTags: [
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
    }),

    // ! for canceling a booking
    cancelBooking: builder.mutation({
      query: (id: string) => {
        return { url: `/bookings/cancel-booking/${id}`, method: "PATCH" };
      },
      invalidatesTags: [
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
      invalidatesTags: [
        "userBooking",
        "getAllBooking",
        "completedBooking",
        "userCompletedBooking",
        "chartBooking",
        "completeBookingCount",
        "availableCar",
        "bookingRevenue",
        "completeBookUnavailableCar",
        "cars",
      ],
    }),

    // ! complete booking
    completeBooking: builder.mutation({
      query: (payload) => {
        return {
          url: `/bookings/complete-booking`,
          method: "PATCH",
          body: payload,
        };
      },
      invalidatesTags: [
        "userBooking",
        "getAllBooking",
        "completedBooking",
        "userCompletedBooking",
        "chartBooking",
        "completeBookingCount",
        "availableCar",
        "bookingRevenue",
        "completeBookUnavailableCar",
        "cars",
      ],
    }),

    // ! completing payment
    completePayment: builder.mutation({
      query: (id: string) => {
        return {
          url: `payment/procede-payment/${id}`,
          method: "POST",
        };
      },
      invalidatesTags: [
        "userBooking",
        "getAllBooking",
        "completedBooking",
        "userCompletedBooking",
        "chartBooking",
        "completeBookingCount",
        "availableCar",
        "bookingRevenue",
        "completeBookUnavailableCar",
        "cars",
      ],
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
  useUserBookingQuery,
  useSingleBookingQuery,
  useUpdateBookingMutation,
  useCompleteBookingMutation,
  useUserCompletedBookingQuery,
  useCompletePaymentMutation,
  useCompletedPaymentBookingQuery,
  useCompletedPaymentBookingCountQuery,
  useCompletedPaymentBookingRevenueQuery,
  useGetCompletedBookingsUnavailableCarQuery,
} = bookingApi;
