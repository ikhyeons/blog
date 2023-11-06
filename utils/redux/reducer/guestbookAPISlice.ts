import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface guestBookState {
  nickname: string;
  content: string;
}

type PostsResponse = guestBookState[];

export const guestBookApi = createApi({
  reducerPath: 'guestbookApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${process.env.NEXT_PUBLIC_BACKEND_HOST}/guestBook` }),
  tagTypes: ['guestbookApi'],
  endpoints: (build) => ({
    addGuestbook: build.mutation<guestBookState, Partial<guestBookState>>({
      query(data) {
        const { ...body } = data;
        return {
          url: `/`,
          method: 'POST',
          body: { ...body },
        };
      },
      invalidatesTags: [{ type: 'guestbookApi' }],
    }),
  }),
});

export const { useAddGuestbookMutation } = guestBookApi;
