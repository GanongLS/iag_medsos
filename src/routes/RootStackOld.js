//Dependencies Modules
import 'react-native-gesture-handler';
import React, {memo, useContext, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import NetInfo from '@react-native-community/netinfo';

//Component Modules
import Greeting from '../Screens/Auth/Greeting/Greeting';
import {userContext} from '../Provider/UserProvider';
import ButtonElements from '../Screens/Lib/ButtonElements';
import ButtonSheetEl from '../Screens/Lib/ButtonSheetEl';
import {appContext} from '../Provider/AppProvider';
import Login from '../Screens/Auth/Login/Login';
import Register from '../Screens/Auth/Register/Register';
import EmailConfn from '../Screens/Auth/EmailConfirmation/EmailConfn';
import ForgotPassword from '../Screens/Auth/ForgotPassword/ForgotPassword';

const AuthStack = createStackNavigator();
const MainStack = createStackNavigator();

const Root = memo((props) => {
  const {
    userState: {userToken},
  } = useContext(userContext);
  const {
    appState: {isOnline},
    onSignIn,
    onLoading,
    onSetOnline,
  } = useContext(appContext);

  // warn autoLogin hanya berguna di development state. sat mau produksi harus dimatikan.

  // autoLogin

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      onSetOnline(state.isConnected);
    });
    return () => {
      unsubscribe();
    };
  }, [isOnline]);

  {
    if (userToken) {
      return (
        <NavigationContainer>
          <MainStack.Navigator headerMode="none">
            <MainStack.Screen name="ButtonSheet" component={ButtonSheetEl} />
            {/* <MainStack.Screen name="Home" component={Tab} /> */}
          </MainStack.Navigator>
        </NavigationContainer>
      );
    }
    {
      return (
        <NavigationContainer>
          <AuthStack.Navigator headerMode="none" initialRouteName="EmailConfn">
            {/* <AuthStack.Screen name="Button" component={ButtonElements} /> */}
            <AuthStack.Screen name="Greeting" component={Greeting} />
            <AuthStack.Screen name="Login" component={Login} />
            <AuthStack.Screen name="Register" component={Register} />
            <AuthStack.Screen name="EmailConfn" component={EmailConfn} />
            <AuthStack.Screen
              name="ForgotPassword"
              component={ForgotPassword}
            />
          </AuthStack.Navigator>
        </NavigationContainer>
      );
    }
  }
});

export default Root;
