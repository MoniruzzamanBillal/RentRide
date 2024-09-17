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

    // ! get payment completed booking count
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
      // transformResponse: (response) => {
      //   return {
      //     data: (response as any)?.data,
      //   };
      // },
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
      invalidatesTags: ["userBooking", "cars"],
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
      invalidatesTags: ["userBooking"],
    }),

    // ! completing payment
    completePayment: builder.mutation({
      query: (id: string) => {
        return {
          url: `payment/procede-payment/${id}`,
          method: "POST",
        };
      },
      invalidatesTags: ["completeBookingCount", "bookingRevenue"],
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
} = bookingApi;
