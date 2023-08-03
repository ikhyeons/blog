import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const imageApi = createApi({
  reducerPath: 'imageApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/image' }),
  tagTypes: ['imageApi'],
  endpoints: (build) => ({
    postImage: build.mutation<any, FormData>({
      query(body) {
        return {
          url: `/doc`,
          method: 'POST',
          body,
          formdata: true,
        };
      },
      invalidatesTags: [{ type: 'imageApi' }],
    }),
  }),
});

export const { usePostImageMutation } = imageApi;
