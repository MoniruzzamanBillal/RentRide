/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "@/redux/api/baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // !  for getting all users
    getUsers: builder.query({
      query: () => {
        return {
          url: "/user/all-user",
          method: "GET",
        };
      },
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
export const { useGetUsersQuery } = userApi;
