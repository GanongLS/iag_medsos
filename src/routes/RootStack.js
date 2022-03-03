import NetInfo from '@react-native-community/netinfo';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {memo, useEffect} from 'react';
import {View, Text} from 'react-native';
import ScreenModal from '../components/screen_modal/ScreenModal';
import {useAppAction, useAppState} from '../providers/AppProvider';
import {useNavOptionState} from '../providers/NavOptionProvider';
import {useUserState} from '../providers/UserProvider';
import Greeting from '../screens/auth/greeting/Greeting';
import Login from '../screens/auth/login/Login';
import MainTopTapBar from './MainTopTapBar';
import colors from '../constants/colors';

const AuthStack = createNativeStackNavigator();
const MainStack = createNativeStackNavigator();

const RootStack = memo(() => {
  const {isOnline} = useAppState();

  const {onSetOnline} = useAppAction();
  const {showMainHeader} = useNavOptionState();

  const {token} = useUserState();

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      onSetOnline(state.isConnected);
    });
    return () => {
      unsubscribe();
    };
  }, [isOnline]);

  useEffect(() => {
    console.log('masuk rootStack');
  }, []);
  return (
    <NavigationContainer>
      {token ? (
        <MainStack.Navigator>
          <MainStack.Screen
            name="main"
            component={MainTopTapBar}
            options={{
              header: ({navigation, route, options, back}) => {
                return (
                  <View style={{marginHorizontal: 8, marginVertical: 4}}>
                    <Text
                      style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                        color: colors.primary,
                      }}>
                      IA Gamais ITB
                    </Text>
                  </View>
                );
              },
              headerShown: showMainHeader,
              title: 'IA Gamais ITB',
              headerTitleStyle: {
                fontWeight: 'bold',
                height: 20,
              },
            }}
          />
        </MainStack.Navigator>
      ) : (
        <MainStack.Navigator>
          <AuthStack.Screen
            name="greeting"
            component={Greeting}
            options={{headerShown: false}}
          />
          <AuthStack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
        </MainStack.Navigator>
      )}
      <ScreenModal />
    </NavigationContainer>
  );
});

export default RootStack;
