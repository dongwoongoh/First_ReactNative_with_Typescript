import * as React from 'react';
import SplashScreen from 'react-native-splash-screen';
import TopTabNavigate from './navigations/top.tab.navigate';
import {useRecoilValue} from 'recoil';
import {isLoggedIn} from './recoil/user/is.logged.in';
import {useCallback} from 'react';
import Login from './screens/notLoggedIn/user/sign/login/login';

export default function App() {
  const logged = useRecoilValue(isLoggedIn);

  const screenViewer = useCallback(() => {
    return logged ? <TopTabNavigate /> : <Login />;
  }, [logged]);

  React.useLayoutEffect(() => {
    screenViewer();
  }, [logged]);

  React.useEffect(() => {
    SplashScreen.hide();
  }, []);
  return screenViewer();
}
