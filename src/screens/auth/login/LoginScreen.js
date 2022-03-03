import {useNavigation} from '@react-navigation/core';
import React, {memo, useEffect, useRef} from 'react';
import {
  BackHandler,
  KeyboardAvoidingView,
  RefreshControl,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {CustomCard15} from '../../../components/card/CustomCard';
import ButtonWithLoading from '../../../components/common/ButtonWithLoading';
import GradView from '../../../components/gradient/IAGGradient';
import ScreenModal from '../../../components/screen_modal/ScreenModal';
import gamais from '../../../constants/colors';
import {height} from '../../../constants/constants';
import {useAppState} from '../../../providers/AppProvider';
import {useUserAction} from '../../../providers/UserProvider';
import globalStyles from '../../../styles/globalStyles';
import AuthHeader from '../components/AuthHeader';
import NextGradButton from '../components/NextGradButton';
import InputLoginID from './components/InputLoginID';
import InputPassword from './components/InputPassword';
import {useLogin} from './LoginProvider';

const LoginScreen = memo(props => {
  const {navigate} = useNavigation();
  // @ global Context UserProvider
  const {refresh} = useAppState();
  // const {onSignIn} = useUserAction();

  // @ local Context Provider
  const {onRequestSignIn, onClearLogin} = useLogin();

  const ref_input1 = useRef();
  const ref_input2 = useRef();
  const onJumpRef1 = () => {
    ref_input1.current.focus(); // * useEffect autoreff
  };
  const onJumpRef2 = () => {
    ref_input2.current.focus();
  };
  const onRefresh = () => {
    onJumpRef1;
  };
  useEffect(() => {
    onRefresh();
    onClearLogin();
  }, []);

  const onScroll = e => {
    if (e.nativeEvent.contentOffset.y > height * 0.3) {
      StatusBar.setBackgroundColor(gamais.primary);
    } else {
      StatusBar.setBackgroundColor(gamais.soft);
    }
  };
  const onBackGreeting = async () => {
    await onClearLogin();
    navigate('greeting');
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', onBackGreeting);
    return () =>
      BackHandler.removeEventListener('hardwareBackPress', onBackGreeting);
  }, []);

  return (
    <KeyboardAvoidingView style={globalStyles.growContainer}>
      <ScrollView
        contentContainerStyle={globalStyles.growContainer}
        onScroll={onScroll}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="always"
        refreshControl={
          <RefreshControl
            refreshing={refresh}
            onRefresh={onRefresh}
            colors={[gamais.primary]}
          />
        }>
        <StatusBar
          animated
          backgroundColor={gamais.soft}
          barStyle="dark-content"
        />
        <View style={globalStyles.container}>
          <GradView height={height * 0.15} />
          <AuthHeader headerTitle="Masuk ke Akun" />
          <View
            style={{
              ...globalStyles.P15Container,
            }}>
            <CustomCard15>
              <InputLoginID ref={ref_input1} onJump={onJumpRef2} />
              <InputPassword ref={ref_input2} onJump={onRequestSignIn} />
              <View
                style={{
                  ...globalStyles.centerContainer,
                  marginTop: height * 0.005,
                }}>
                <NextGradButton title="Masuk App" onPress={onRequestSignIn} />
                <TouchableOpacity onPress={() => navigate('ForgotPassword')}>
                  <Text style={{color: gamais.pd20}}>Lupa password?</Text>
                </TouchableOpacity>
              </View>
            </CustomCard15>
          </View>
          <ButtonWithLoading
            judul="Belum memiliki akun?"
            onPress={() => navigate('Register')}
          />
        </View>
        <ScreenModal /* @ ini modal standard tiap page */ />
      </ScrollView>
    </KeyboardAvoidingView>
  );
});

export default LoginScreen;
