import React, {memo, useCallback, useEffect} from 'react';
import {
  Dimensions,
  Image,
  RefreshControl,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IAGGradient from '../../../components/gradient/IAGGradient';
import gamais from '../../../constants/colors';
import {height, width} from '../../../constants/constants';
import {useAppAction, useAppState} from '../../../providers/AppProvider';
import globalStyles, {textStyles} from '../../../styles/globalStyles';

const Greeting = memo(props => {
  // todo Codepush Sync Status must be here
  // todo useEffect on codepush
  const {refresh} = useAppState();
  const {goRefresh, offLoading} = useAppAction();

  const onScroll = e => {
    if (e.nativeEvent.contentOffset.y > height * 0.25) {
      StatusBar.setBackgroundColor(gamais.pd20);
      StatusBar.setBarStyle('light-content');
    } else {
      StatusBar.setBackgroundColor(gamais.soft);
      StatusBar.setBarStyle('dark-content');
    }
  };

  // warn refresh auto login jahat, selelah development selesai harus di delete
  const onRefresh = useCallback(async () => {
    await goRefresh();
    offLoading();
  }, []);

  useEffect(() => {
    onRefresh();
  }, []);

  const {
    navigation: {navigate},
  } = props;
  return (
    <ScrollView
      contentContainerStyle={globalStyles.growContainer}
      showsVerticalScrollIndicator={false}
      onScroll={onScroll}
      refreshControl={
        <RefreshControl
          refreshing={refresh}
          onRefresh={onRefresh}
          color={[gamais.primary]}
        />
      }>
      <StatusBar
        style={{barStyle: 'dark-content'}}
        animated
        // backgroundColor={gamais.pd20}
        backgroundColor={gamais.soft}
        barStyle="dark-content"
      />
      <View
        style={{
          ...globalStyles.container,
          backgroundColor: 'white',
        }}>
        <IAGGradient
          height={height * 0.35}
          containerStyle={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={require('../../../assets/images/iag-png-ink.png')}
            style={globalStyles.logoImage}
            resizeMethod="resize"
            resizeMode="contain"
          />
          <Text style={{...textStyles.h1Center, color: 'white'}}>
            IA GAMAIS ITB
          </Text>
        </IAGGradient>
        <View
          style={{
            ...globalStyles.P15Container,
            marginTop: height * 0.35,
          }}>
          <Text style={textStyles.t18C}>Selamat Datang di IAG Mobile App</Text>
          <Image
            source={require('../../../assets/images/Brochure-nobg.png')}
            style={globalStyles.image22}
            resizeMethod="resize"
            resizeMode="contain"
          />
          <Text style={textStyles.t16C}>Nikmati manfaat berdakwah</Text>
          <Text style={textStyles.t16C}>
            dalam jaringan Sosial Media Komunitas
          </Text>
        </View>
        <View
          style={{
            ...globalStyles.columnContainer,
            marginVertical: height * 0.01,
            marginBottom: height * 0.1,
          }}>
          <TouchableOpacity
            onPress={() => {
              navigate('Login');
            }}>
            <LinearGradient // todo buat ButtonWithLoading Gradient
              colors={[gamais.soft, gamais.pd20]}
              style={styles.signIn}>
              <Text style={styles.textSign}>Masuk Akun</Text>
              <MaterialIcons
                name="navigate-next"
                color="#ffffff"
                size={20}></MaterialIcons>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
});

export default Greeting;

const {height: SH} = Dimensions.get('screen');
const height_logo = SH * 0.54;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009955',
  },
  header: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  logo: {
    width: height_logo,
    height: height_logo,
  },
  title: {
    color: '#05375a',
    fontSize: 28,
    fontWeight: 'bold',
  },
  text: {
    color: 'grey',
    marginTop: 5,
  },
  button: {
    alignItems: 'flex-end',
    marginTop: 30,
  },
  signIn: {
    width: width * 0.5,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    flexDirection: 'row',
  },
  textSign: {
    color: 'white',
    fontWeight: 'bold',
  },
});
