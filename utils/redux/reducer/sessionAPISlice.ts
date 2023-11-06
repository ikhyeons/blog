import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface loginBody {
  email: string;
  password: string;
}

export const sessionApi = createApi({
  reducerPath: 'sessionApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${process.env.NEXT_PUBLIC_BACKEND_HOST}/session` }),
  tagTypes: ['session'],
  endpoints: (build) => ({
    login: build.mutation<{ code: number; message?: string; token?: string }, Partial<loginBody>>({
      query(data) {
        const { ...body } = data;
        return {
          url: `login`,
          method: 'POST',
          body,
          credentials: 'include',
        };
      },
      invalidatesTags: [{ type: 'session' }],
    }),
    logout: build.mutation({
      query(token) {
        return {
          url: `logout`,
          method: 'POST',
          headers: { authorization: token },
          credentials: 'include',
        };
      },
    }),
  }),
});

export const { useLoginMutation, useLogoutMutation } = sessionApi;
