import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface docState {
  title: string;
  content: string;
  ctg: string;
  token: string;
}

type PostsResponse = docState[];

export const postApi = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/community' }),
  tagTypes: ['post'],
  endpoints: (build) => ({
    addPost: build.mutation<docState, Partial<docState>>({
      query(data) {
        const { token, ctg, ...body } = data;
        return {
          url: `post`,
          headers: { authorization: token },
          method: 'POST',
          body: { ...body, categoryID: ctg },
        };
      },
      invalidatesTags: [{ type: 'post' }],
    }),
  }),
});

export const { useAddPostMutation } = postApi;
