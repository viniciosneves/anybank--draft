import { selector } from 'recoil';
import { userAtom } from '../atoms/userAtom';

export const isUserLoggedInSelector = selector({
  key: 'isUserLoggedInSelector',
  get: ({ get }) => {
    const user = get(userAtom);
    return !!user;
  },
});