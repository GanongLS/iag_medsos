import React, {useEffect} from 'react'
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

const DummyAuth = () => {
  
  useEffect(() => {
    console.log('masuk dummy Auth');
  }, []);
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={{flex: 1}}>
        <Text>Hello World</Text>
        <Text>Aku ingin mendaftar</Text>
      </View>
    </SafeAreaView>
  );
};



export default DummyAuth
