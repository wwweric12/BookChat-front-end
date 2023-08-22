import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();
export const BoardTitleAtom = atom({
  key: 'BoardTitleAtom',
  default: '',
  effects_UNSTABLE: [persistAtom],
});
