import { createSlice } from '@reduxjs/toolkit';

type ModalState = {
  value: 'close' | 'ctg';
};

const initialState = {
  value: 'close',
} as ModalState;

export const modal = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    reset: () => initialState,

    changeModal: (state, actions: { payload: 'close' | 'ctg' }) => {
      state.value = actions.payload;
    },
  },
});

export const { changeModal, reset } = modal.actions;
export default modal.reducer;
