import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type docState = { title: string; content: string; thumbnail: number | null };

const initialState = {
  title: '',
  content: '',
  thumbnail: null,
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
    setThumbnail: (state, actions: PayloadAction<number>) => {
      state.thumbnail = actions.payload;
    },
  },
});

export const { updateTitle, updateContent, reset, setThumbnail } = formData.actions;
export default formData.reducer;
