import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface docState {
  title: string;
  content: string | null;
  ctg?: string;
  token: string;
  imageFile: string;
}

export interface modifyDoc extends docState {
  id: number;
}

export interface addPostReturn {
  data: any;
  status: number;
}

type PostsResponse = docState[];

export type CtgList = { code: number; categoryList: { id: number; type: string; name: string; num: number }[] };
export const postApi = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${process.env.NEXT_PUBLIC_BACKEND_HOST}/community` }),
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
          credentials: 'include',
        };
      },
      invalidatesTags: [{ type: 'post' }],
    }),
    modifyPost: build.mutation<addPostReturn, Partial<modifyDoc>>({
      query(data) {
        const { token, id, ...body } = data;
        return {
          url: `post`,
          headers: { authorization: token },
          method: 'PATCH',
          body: { ...body, id: id },
          credentials: 'include',
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
          credentials: 'include',
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
    addComment: build.mutation({
      query(data) {
        const { token, ...body } = data;
        return {
          url: `comment`,
          headers: { authorization: token },
          method: 'POST',
          body: { ...body },
          credentials: 'include',
        };
      },
      invalidatesTags: [{ type: 'post' }],
    }),
    increaseView: build.mutation({
      query(id) {
        return {
          url: `view/${id}`,
          method: 'PATCH',
        };
      },
      invalidatesTags: [{ type: 'post' }],
    }),
  }),
});

export const {
  useAddPostMutation,
  useModifyPostMutation,
  useGetCtgListQuery,
  useDeletePostMutation,
  useAddLoveMutation,
  useAddCommentMutation,
  useIncreaseViewMutation,
} = postApi;
