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
      providesTags: ["users"],
    }),

    // ! changing user role
    changeUserRole: builder.mutation({
      query: (id) => {
        return {
          url: `/user/change-role/${id}`,
          method: "PATCH",
        };
      },
      invalidatesTags: ["users"],
    }),

    //
  }),
});

//
export const { useGetUsersQuery, useChangeUserRoleMutation } = userApi;
