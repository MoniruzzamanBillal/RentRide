/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "@/redux/api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // ! for sending reset link
    sendResetLink: builder.mutation({
      query: (email: string) => {
        return {
          url: `/auth/reset-link/${email}`,
          method: "PATCH",
        };
      },
    }),
    // ! for sign  up
    signUp: builder.mutation({
      query: (payload) => {
        return {
          url: "/auth/signup",
          method: "POST",
          body: payload,
        };
      },
    }),

    // ! for login
    logIn: builder.mutation({
      query: (payload) => ({
        url: "/auth/signin",
        method: "POST",
        body: payload,
      }),
    }),

    //
  }),
});

export const { useLogInMutation, useSignUpMutation, useSendResetLinkMutation } =
  authApi;
