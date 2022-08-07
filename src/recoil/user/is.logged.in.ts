import {atom} from 'recoil';

export const isLoggedIn = atom<boolean>({
  key: 'is_logged_in',
  default: false,
});
