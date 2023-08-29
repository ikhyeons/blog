import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface docState {
  title: string;
  content: string;
  ctg: string;
  token: string;
  imageFile: string;
}

export interface addPostReturn {
  data: any;
  status: number;
}

type PostsResponse = docState[];

export type CtgList = { code: number; categoryList: { id: number; type: string; name: string; num: number }[] };
export const postApi = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({ baseUrl: `https://${process.env.NEXT_PUBLIC_BACKEND_HOST}/community` }),
  tagTypes: ['post'],
  endpoints: (build) => ({
    addPost: build.mutation<addPostReturn, Partial<docState>>({
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
    deletePost: build.mutation({
      query({ id, token }) {
        return {
          url: `post/${id}`,
          headers: { authorization: token },
          method: 'DELETE',
        };
      },
      invalidatesTags: [{ type: 'post' }],
    }),
    addLove: build.mutation({
      query(id) {
        return {
          url: `love/${id}`,
          method: 'PATCH',
        };
      },
      invalidatesTags: [{ type: 'post' }],
    }),
  }),
});

export const { useAddPostMutation, useGetCtgListQuery, useDeletePostMutation, useAddLoveMutation } = postApi;
