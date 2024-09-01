import { baseApi } from "@/redux/api/baseApi";

const carApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // ! for getting all cars
    getAllCars: builder.query({
      query: () => ({
        url: "/cars",
        method: "GET",
      }),

      transformResponse: (response) => {
        return {
          data: (response as any)?.data,
        };
      },
      providesTags: ["cars"],
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
  useAddNewCarMutation,
  useDeleteCarMutation,
} = carApi;
