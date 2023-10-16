import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: { refOn: boolean; target: null | number; targetName: null | string } = {
  refOn: false,
  target: null,
  targetName: null,
};

export const commentRef = createSlice({
  name: 'commentRef',
  initialState,
  reducers: {
    reset: () => initialState,
    updateRef: (state, actions: PayloadAction<{ target: number; targetName: string }>) => {
      state.refOn = true;
      state.target = actions.payload.target;
      state.targetName = actions.payload.targetName;
    },
  },
});

export const { updateRef, reset } = commentRef.actions;
export default commentRef.reducer;
