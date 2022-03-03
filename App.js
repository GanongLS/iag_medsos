/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import AppProvider from './src/providers/AppProvider';
import UserProvider from './src/providers/UserProvider';
import RootStack from './src/routes/RootStack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import NavOptionProvider from './src/providers/NavOptionProvider';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <SafeAreaProvider //*requirement from react-native-elements
    >
      <AppProvider>
        <UserProvider>
          <NavOptionProvider>
            <RootStack />
          </NavOptionProvider>
        </UserProvider>
      </AppProvider>
    </SafeAreaProvider>
  );
};

export default App;
