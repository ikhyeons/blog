import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './reducer/modalSlice';

export const store = configureStore({
  reducer: { modalReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
