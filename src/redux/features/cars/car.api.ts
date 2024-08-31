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
    }),

    //
  }),
});

//
export const { useGetAllCarsQuery } = carApi;
