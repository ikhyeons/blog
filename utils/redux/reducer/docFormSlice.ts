import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type docState = { title: string; content: string };

const initialState = {
  title: '',
  content: '',
} as docState;

export const formData = createSlice({
  name: 'formData',
  initialState,
  reducers: {
    reset: () => initialState,

    updateTitle: (state, actions: PayloadAction<string>) => {
      state.title = actions.payload;
    },

    updateContent: (state, actions: PayloadAction<string>) => {
      state.content = actions.payload;
    },
  },
});

export const { updateTitle, updateContent, reset } = formData.actions;
export default formData.reducer;
