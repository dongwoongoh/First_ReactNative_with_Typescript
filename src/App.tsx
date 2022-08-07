import * as React from 'react';
import SplashScreen from 'react-native-splash-screen';
import IsLoggedInTopTabNavigate from './navigations/isLoggedIn/is.logged.in.top.tab.navigate';
import {useRecoilValue} from 'recoil';
import {isLoggedIn} from './recoil/user/is.logged.in';
import {useCallback} from 'react';
import IsLoggedOutNavigate from './navigations/isLoggedOut/is.logged.out.navigate';

export default function App() {
  const logged = useRecoilValue(isLoggedIn);

  const screenViewer = useCallback(() => {
    return logged ? <IsLoggedInTopTabNavigate /> : <IsLoggedOutNavigate />;
  }, [logged]);

  React.useLayoutEffect(() => {
    screenViewer();
  }, [logged]);

  React.useEffect(() => {
    SplashScreen.hide();
  }, []);
  return screenViewer();
}
