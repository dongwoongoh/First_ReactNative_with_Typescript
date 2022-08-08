import React from 'react';
import SplashScreen from 'react-native-splash-screen';
import Routes from './navigations/routes';
function App() {
  React.useEffect(() => {
    SplashScreen.hide();
  }, []);
  return <Routes />;
}

export default App;
