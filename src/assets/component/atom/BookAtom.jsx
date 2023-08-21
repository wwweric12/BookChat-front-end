import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const BookAtom = atom({
  key: 'BookAtom',
  default: 'PERSON',
  effects_UNSTABLE: [persistAtom],
});
