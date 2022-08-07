import {atom} from 'recoil';
import {v1} from 'uuid';

export const isLoggedIn = atom<boolean>({
  key: `is_logged_in${v1}`,
  default: false,
});
