import {StyleSheet} from 'react-native';
import {height, width} from '../../../constants/constants';

const authStyles = StyleSheet.create({
  logoContainer: {
    height: height * 0.18,
    marginTop: height * 0.06,
    marginHorizontal: '2%',
  },
  FormContainer: {
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoImageStyle: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
    flex: 0.7,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
  },
});

export default authStyles;
