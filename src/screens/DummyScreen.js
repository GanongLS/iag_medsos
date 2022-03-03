import React from 'react'
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

const DummyScreen = () => {
 
   const isDarkMode = useColorScheme() === 'dark';
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={{flex: 1}}>
        <Text>Hello World</Text>
        <Text>Aku ingin membuat aplikasi.</Text>
      </View>
    </SafeAreaView>
  );
};



export default DummyScreen
