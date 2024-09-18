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

    // !  for getting logged in  user
    getLoggedInUser: builder.query({
      query: () => {
        return {
          url: "/user/loggedIn-user",
          method: "GET",
        };
      },
      transformResponse: (response) => {
        return {
          data: (response as any)?.data,
        };
      },
    }),

    // !  for getting single user
    getSingleUser: builder.query({
      query: (id: string) => {
        return {
          url: `/user/single-user/${id}`,
          method: "GET",
        };
      },
      transformResponse: (response) => {
        return {
          data: (response as any)?.data,
        };
      },
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

    // ! update user
    updateUser: builder.mutation({
      query: (payload) => {
        return {
          url: `/user/update-user`,
          method: "PATCH",
          body: payload,
        };
      },
      invalidatesTags: ["users"],
    }),

    //
  }),
});

//
export const {
  useGetUsersQuery,
  useChangeUserRoleMutation,
  useGetLoggedInUserQuery,
  useGetSingleUserQuery,
  useUpdateUserMutation,
} = userApi;
