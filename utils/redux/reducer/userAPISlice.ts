import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface joinBody {
  email: string;
  pw: string;
  nickname: string;
  profile: string | null;
}

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: `https://${process.env.NEXT_PUBLIC_BACKEND_HOST}/user` }),
  tagTypes: ['user'],
  endpoints: (build) => ({
    joinUser: build.mutation<{ code: number; message: string }, Partial<joinBody>>({
      query(data) {
        const { ...body } = data;
        return {
          url: ``,
          method: 'POST',
          body,
        };
      },
      invalidatesTags: [{ type: 'user' }],
    }),
    validateEmail: build.mutation<boolean, Partial<string>>({
      query(data) {
        return {
          url: `emailvalidate/${data}`,
          method: 'GET',
        };
      },
      invalidatesTags: [{ type: 'user' }],
    }),
    validateNickname: build.mutation<boolean, Partial<string>>({
      query(data) {
        return {
          url: `nicknamevalidate/${data}`,
          method: 'GET',
        };
      },
      invalidatesTags: [{ type: 'user' }],
    }),
  }),
});

export const { useJoinUserMutation, useValidateEmailMutation, useValidateNicknameMutation } = userApi;
