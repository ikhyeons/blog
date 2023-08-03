import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface docState {
  title: string;
  content: string;
  ctg: string;
  token: string;
  imageFile: string;
}

type PostsResponse = docState[];

export type CtgList = { code: number; categoryList: { id: number; type: string; name: string; num: number }[] };
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
          body: { ...body, categoryType: ctg },
        };
      },
      invalidatesTags: [{ type: 'post' }],
    }),

    getCtgList: build.query<CtgList, null>({
      query: () => ({ url: `category`, method: 'GET' }),
    }),
  }),
});

export const { useAddPostMutation, useGetCtgListQuery } = postApi;
