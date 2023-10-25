import { createSlice } from '@reduxjs/toolkit';

type ctgState = {
  state: 'open' | 'close';
  headerSearch: 'open' | 'close';
};

const initialState = {
  state: 'close',
  headerSearch: 'close',
} as ctgState;

export const headerCtg = createSlice({
  name: 'headerCtg',
  initialState,
  reducers: {
    reset: () => initialState,

    changeCtgState: (state) => {
      state.headerSearch = 'close';
      state.state = state.state == 'open' ? 'close' : 'open';
    },

    changeHeaderSearch: (state) => {
      state.state = 'close';
      state.headerSearch = state.headerSearch == 'open' ? 'close' : 'open';
    },
  },
});

export const { changeCtgState, changeHeaderSearch, reset } = headerCtg.actions;
export default headerCtg.reducer;
