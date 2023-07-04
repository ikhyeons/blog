import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type ModalState = {
  state: 'close' | 'ctg';
};

const initialState = {
  state: 'close',
} as ModalState;

export const modal = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    reset: () => initialState,

    changeModal: (state, actions: PayloadAction<'close' | 'ctg'>) => {
      state.state = actions.payload;
    },
  },
});

export const { changeModal, reset } = modal.actions;
export default modal.reducer;
