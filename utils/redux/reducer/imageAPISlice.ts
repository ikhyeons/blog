import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const imageApi = createApi({
  reducerPath: 'imageApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${process.env.NEXT_PUBLIC_BACKEND_HOST}/image` }),
  tagTypes: ['imageApi'],
  endpoints: (build) => ({
    postImage: build.mutation<any, { body: FormData; token: string }>({
      query({ body, token }) {
        return {
          url: `/doc`,
          method: 'POST',
          headers: { authorization: token },
          body,
          formdata: true,
          credentials: 'include',
        };
      },
      invalidatesTags: [{ type: 'imageApi' }],
    }),
  }),
});

export const { usePostImageMutation } = imageApi;
