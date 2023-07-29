import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface loginBody {
  email: string;
  password: string;
}

export const sessionApi = createApi({
  reducerPath: 'sessionApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/session' }),
  tagTypes: ['session'],
  endpoints: (build) => ({
    login: build.mutation<{ code: number; message?: string; token?: string }, Partial<loginBody>>({
      query(data) {
        const { ...body } = data;
        return {
          url: `login`,
          method: 'POST',
          body,
        };
      },
      invalidatesTags: [{ type: 'session' }],
    }),
  }),
});

export const { useLoginMutation } = sessionApi;
