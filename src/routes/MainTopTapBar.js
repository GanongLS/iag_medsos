import {useFocusEffect} from '@react-navigation/core';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React, {useCallback, useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import IIcon from 'react-native-vector-icons/Ionicons';
import colors from '../constants/colors';
import {useNavOptionAction} from '../providers/NavOptionProvider';
import HomeScreen from '../screens/home/HomeScreen';

const Tab = createMaterialTopTabNavigator();

function MainTopTapBar() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowIcon: true,
        tabBarIconStyle: styles.iconStyle,
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused, color}) => {
            return (
              <IIcon
                name={focused ? 'home' : 'home-outline'}
                color={focused ? colors.primary : colors.gray50}
                size={25}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Activities"
        component={ActivitiesScreen}
        options={{
          tabBarIcon: ({focused, color}) => {
            return (
              <IIcon
                name={focused ? 'newspaper' : 'newspaper-outline'}
                color={focused ? colors.primary : colors.gray50}
                size={25}
              />
            );
          },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Member"
        component={MembersScreen}
        options={{
          tabBarIcon: ({focused, color}) => {
            return (
              <IIcon
                name={focused ? 'people' : 'people-outline'}
                color={focused ? colors.primary : colors.gray50}
                size={25}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationsScreen}
        options={{
          tabBarIcon: ({focused, color}) => {
            return (
              <IIcon
                name={focused ? 'notifications' : 'notifications-outline'}
                color={focused ? colors.primary : colors.gray50}
                size={25}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        // component={ProfileScreen}
        component={TouchableExample}
        options={{
          tabBarIcon: ({focused, color}) => {
            return (
              <IIcon
                name={focused ? 'person' : 'person-outline'}
                color={focused ? colors.primary : colors.gray50}
                size={25}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default MainTopTapBar;

function ActivitiesScreen() {
  const {onHideMainHeader} = useNavOptionAction();
  useFocusEffect(
    useCallback(() => {
      onHideMainHeader();
    }, []),
  );
  return (
    <View>
      <Text>Activities Screen</Text>
    </View>
  );
}

function MembersScreen() {
  const {onHideMainHeader} = useNavOptionAction();
  useFocusEffect(
    useCallback(() => {
      onHideMainHeader();
    }, []),
  );
  return (
    <View>
      <Text>Members Screen</Text>
    </View>
  );
}

function NotificationsScreen() {
  const {onHideMainHeader} = useNavOptionAction();
  useFocusEffect(
    useCallback(() => {
      onHideMainHeader();
    }, []),
  );
  return (
    <View>
      <Text>Notifications Screen</Text>
    </View>
  );
}

function ProfileScreen() {
  const {onHideMainHeader} = useNavOptionAction();
  useFocusEffect(
    useCallback(() => {
      onHideMainHeader();
    }, []),
  );
  return (
    <View>
      <Text>Profile Screen</Text>
      <TouchableExample />
    </View>
  );
}

const styles = StyleSheet.create({
  iconStyle: {height: 27, width: 25},
});

const TouchableExample = () => {
  const [count, setCount] = useState(0);
  const onPress = () => setCount(prevCount => prevCount + 1);

  return (
    <View style={tStyles.container}>
      <View style={tStyles.countContainer}>
        <Text>Count: {count}</Text>
      </View>
      <TouchableOpacity style={tStyles.button} onPress={onPress}>
        <Text>Press Here</Text>
      </TouchableOpacity>
    </View>
  );
};

const tStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
  countContainer: {
    alignItems: 'center',
    padding: 10,
  },
});
