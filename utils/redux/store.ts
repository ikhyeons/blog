import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import modalReducer from './reducer/modalSlice';
import docFormReducer from './reducer/docFormSlice';
import commentRefReducer from './reducer/commentSlice';
import headerCtgReducer from './reducer/layoutSlice';

import { postApi } from './reducer/communityAPISlice';
import { userApi } from './reducer/userAPISlice';
import { sessionApi } from './reducer/sessionAPISlice';
import { guestBookApi } from './reducer/guestbookAPISlice';
import { imageApi } from './reducer/imageAPISlice';

export const store = configureStore({
  reducer: {
    modalReducer,
    docFormReducer,
    commentRefReducer,
    headerCtgReducer,
    [postApi.reducerPath]: postApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [sessionApi.reducerPath]: sessionApi.reducer,
    [guestBookApi.reducerPath]: guestBookApi.reducer,
    [imageApi.reducerPath]: imageApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(postApi.middleware)
      .concat(userApi.middleware)
      .concat(sessionApi.middleware)
      .concat(guestBookApi.middleware)
      .concat(imageApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
