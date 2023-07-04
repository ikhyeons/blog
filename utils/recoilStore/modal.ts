import { atom } from 'recoil';

export const Amodal = atom<'close' | 'ctg'>({
  key: 'modal',
  default: 'close',
});

export default {};
