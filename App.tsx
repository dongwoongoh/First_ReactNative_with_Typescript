import * as React from 'react';
import SplashScreen from 'react-native-splash-screen';
import Navigator from './src/navigations/navigator';

export default function App() {
  React.useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <>
      <Navigator />
    </>
  );
}
