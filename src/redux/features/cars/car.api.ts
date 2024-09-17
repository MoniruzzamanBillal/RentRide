/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "@/redux/api/baseApi";

const carApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // ! for getting all cars
    getAllCars: builder.query({
      query: (param) => ({
        url: "/cars",
        method: "GET",
        params: param,
      }),

      transformResponse: (response) => {
        return {
          data: (response as any)?.data,
        };
      },
      providesTags: ["cars"],
    }),

    // ! for getting all available cars
    getAllAvailableCars: builder.query({
      query: (param) => ({
        url: "/cars/available-cars",
        method: "GET",
        params: param,
      }),

      transformResponse: (response) => {
        return {
          data: (response as any)?.data,
        };
      },
      providesTags: ["availableCar"],
    }),

    // ! for getting single car data
    getCar: builder.query({
      query: (id: string) => {
        return {
          url: `/cars/${id}`,
          method: "GET",
        };
      },
      transformResponse: (response) => {
        return {
          data: (response as any)?.data,
        };
      },
    }),
    // ! for adding  car
    addNewCar: builder.mutation({
      query: (payload) => {
        return {
          url: "/cars",
          method: "POST",
          body: payload,
        };
      },
      invalidatesTags: ["cars"],
    }),

    // ! for  updating a car
    updateCar: builder.mutation({
      query: (payload) => {
        const { id, carData } = payload;

        return {
          url: `/cars/${id}`,
          method: "PUT",
          body: carData,
        };
      },
      invalidatesTags: ["cars"],
    }),

    // ! for returning car
    returnCar: builder.mutation({
      query: (payload) => {
        return {
          url: `/cars/return-car`,
          method: "PATCH",
          body: payload,
        };
      },
      invalidatesTags: ["availableCar", "completeBookUnavailableCar"],
    }),

    // ! for deleting a car
    deleteCar: builder.mutation({
      query: (id: string) => {
        return {
          url: `/cars/${id}`,
          method: "Delete",
        };
      },
    }),

    //
  }),
});

//
export const {
  useGetAllCarsQuery,
  useGetAllAvailableCarsQuery,
  useGetCarQuery,
  useAddNewCarMutation,
  useDeleteCarMutation,
  useUpdateCarMutation,
  useReturnCarMutation,
} = carApi;
