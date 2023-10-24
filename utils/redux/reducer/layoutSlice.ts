import { createSlice } from '@reduxjs/toolkit';

type ctgState = {
  state: 'open' | 'close';
};

const initialState = {
  state: 'close',
} as ctgState;

export const headerCtg = createSlice({
  name: 'headerCtg',
  initialState,
  reducers: {
    reset: () => initialState,

    changeCtgState: (state) => {
      state.state = state.state == 'open' ? 'close' : 'open';
    },
  },
});

export const { changeCtgState, reset } = headerCtg.actions;
export default headerCtg.reducer;
