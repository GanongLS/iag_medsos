import {StyleSheet, StatusBar} from 'react-native';
import colors from '../constants/colors';

import {height, width, SanomatSans} from '../constants/constants';

const globalStyles = StyleSheet.create({
  growContainer: {
    flexGrow: 1,
  },
  fill: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: colors.bg1,
  },
  transparentContainer: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  tspContainer: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  whiteContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  centerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  flex1centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  grayCenterContainer: {
    flex: 1,
    backgroundColor: colors.bg1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  whiteCenterContainer: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  grayUnderline: {
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderColor: colors.gray90,
    width: '100%',
  },
  mTGUL80: {
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderColor: colors.gray60,
    width: '80%',
    marginVertical: height * 0.03,
  },
  mTGUL90: {
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderColor: colors.gray60,
    width: '90%',
    marginTop: 15,
  },
  mBGUL: {
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderColor: colors.gray60,
    width: '100%',
    marginBottom: 15,
  },
  ULContainer: {
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderColor: colors.gray60,
    width: '100%',
    height: height * 0.06,
  },
  graySmallTextInputContainer: {
    backgroundColor: colors.gray90,
    width: '100%',
    marginBottom: 15,
  },
  P15Container: {
    padding: 15,
    paddingTop: StatusBar.currentHeight,
  },
  pad10Container: {
    padding: 10,
  },
  columnContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  rowSBContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rowSBULContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.white,
    width: '100%',
    // height: height * 0.06,
    borderBottomWidth: 1,
    borderColor: colors.gray90,
    paddingVertical: 1,
  },
  rowSBU05Container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.white,
    width: '100%',
    height: height * 0.05,
    borderBottomWidth: 1,
    borderColor: colors.gray90,
  },
  rowSBUNHContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.white,
    width: '100%',
    borderBottomWidth: 1,
    borderColor: colors.gray90,
  },
  smaallContainer: {
    width: '20%',
    height: height * 0.06,
    padding: '1%',
    justifyContent: 'center',
  },
  ContentCard: {
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    elevation: 3,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'absolute',
    width: '100%',
  },
  absoluteFooter: {
    width: '100%',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderTopWidth: 0.5,
    borderColor: 'rgba(0,0,0,0)',
  },
  absoluteFooterContainer: {
    flex: 1,
    marginTop: height * 0.9,
    alignSelf: 'center',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'transparent',
    position: 'absolute',
  },
  buttonContainer: {
    alignSelf: 'center',
    width: '75%',
    marginBottom: 5,
  },
  button: {
    borderRadius: 10,
    width: '100%',
    marginTop: 15,
    // elevation: 4,
  },
  logoImage: {
    width: height * 0.15,
    height: height * 0.15,
    borderRadius: 15,
    marginBottom: 25,
  },
  image22: {
    width: height * 0.22,
    height: height * 0.22,
    alignSelf: 'center',
    marginVertical: 12,
  },
});
export default globalStyles;

const textStyles = StyleSheet.create({
  formLabel: {
    fontFamily: SanomatSans,
    fontSize: 14,
    color: colors.tertiary,
  },
  h1Left: {
    fontFamily: SanomatSans,
    fontSize: 20,
    color: colors.dark,
    fontWeight: 'bold',
  },
  h1Center: {
    fontFamily: SanomatSans,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  h2Center: {
    fontFamily: SanomatSans,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  h2Left: {
    fontFamily: SanomatSans,
    fontSize: 18,
    color: colors.dark,
    fontWeight: 'bold',
  },
  h3Left: {
    fontFamily: SanomatSans,
    fontSize: 16,
    color: colors.dark,
    fontWeight: 'bold',
  },
  h3Center: {
    fontFamily: SanomatSans,
    fontSize: 16,
    color: colors.dark,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  h3Right: {
    fontFamily: SanomatSans,
    fontSize: 16,
    color: colors.dark,
    textAlign: 'right',
    fontWeight: 'bold',
  },
  h4LeftGray: {
    fontFamily: SanomatSans,
    fontSize: 14,
    color: colors.gray60,
    fontWeight: 'bold',
  },
  h4Left: {
    fontFamily: SanomatSans,
    fontSize: 14,
    color: colors.dark,
    fontWeight: 'bold',
  },
  h4Center: {
    fontFamily: SanomatSans,
    fontSize: 14,
    color: colors.dark,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  h4Right: {
    fontFamily: SanomatSans,
    fontSize: 14,
    color: colors.dark,
    textAlign: 'right',
    fontWeight: 'bold',
  },
  h5Center: {
    fontFamily: SanomatSans,
    fontSize: 12,
    color: colors.dark,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  h5LeftGray: {
    fontFamily: SanomatSans,
    fontSize: 12,
    color: colors.gray60,
    fontWeight: 'bold',
  },
  h5Left: {
    fontFamily: SanomatSans,
    fontSize: 12,
    color: colors.dark,
    fontWeight: 'bold',
  },
  t20L: {
    fontFamily: SanomatSans,
    fontSize: 20,
    color: colors.dark,
  },
  t20C: {
    fontFamily: SanomatSans,
    textAlign: 'center',
    fontSize: 20,
  },
  t8C: {
    fontFamily: SanomatSans,
    textAlign: 'center',
    fontSize: 18,
  },
  t18L: {
    fontFamily: SanomatSans,
    fontSize: 18,
    color: colors.dark,
  },
  t18C: {
    fontFamily: SanomatSans,
    fontSize: 18,
    color: colors.dark,
    textAlign: 'center',
  },
  t18R: {
    fontFamily: SanomatSans,
    fontSize: 18,
    color: colors.dark,
    textAlign: 'right',
  },
  t16L: {
    fontFamily: SanomatSans,
    fontSize: 16,
    color: colors.dark,
  },
  t16C: {
    fontFamily: SanomatSans,
    fontSize: 16,
    color: colors.dark,
    textAlign: 'center',
  },
  t16R: {
    fontFamily: SanomatSans,
    fontSize: 16,
    color: colors.dark,
    textAlign: 'right',
  },
  t14LGray: {
    fontFamily: SanomatSans,
    fontSize: 14,
    color: colors.gray60,
  },
  t14L: {
    fontFamily: SanomatSans,
    fontSize: 14,
    color: colors.dark,
  },
  t14C: {
    fontFamily: SanomatSans,
    fontSize: 14,
    color: colors.dark,
    textAlign: 'center',
  },
  t14R: {
    fontFamily: SanomatSans,
    fontSize: 14,
    color: colors.dark,
    textAlign: 'right',
  },
  t12C: {
    fontFamily: SanomatSans,
    fontSize: 12,
    color: colors.dark,
    textAlign: 'center',
  },
  t12LGray: {
    fontFamily: SanomatSans,
    fontSize: 12,
    color: colors.gray60,
  },
  t12L: {
    fontFamily: SanomatSans,
    fontSize: 12,
    color: colors.dark,
  },
  t12R: {
    fontFamily: SanomatSans,
    fontSize: 12,
    color: colors.dark,
    textAlign: 'right',
  },
  t12CGray: {
    fontFamily: SanomatSans,
    fontSize: 12,
    color: colors.gray50,
    textAlign: 'center',
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
  },
  errorText: {
    fontFamily: SanomatSans,
    fontSize: 10,
    color: colors.red,
  },
});
const signInStyles = StyleSheet.create({
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
    width: height * 0.54,
    height: height * 0.54,
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
  button: {
    width: width * 0.75,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    flexDirection: 'row',
  },
  textSign: {
    color: 'white',
    fontWeight: 'bold',
  },
});
const modalStyles = StyleSheet.create({
  baseView: {
    flex: 1,
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: 'white',
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 5,
  },
  modalButton: {
    backgroundColor: '#ffffff',
    height: 40,
    width: '100%',
    borderRadius: 5,
    elevation: 2,
    justifyContent: 'center',
    margin: 5,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'center',
  },
});

const imageStyles = StyleSheet.create({
  statusProfile: {
    width: 36,
    height: 36,
    borderRadius: 20, // ini tidak akan bisa meradiuskan kalau resizeMode = contain.
    // marginBottom: 0,
    borderWidth: 0.5,
    borderColor: colors.gray70,
  },
  createStory: {
    width: '100%',
    height: '100%',
  },
});

const containerStyles = StyleSheet.create({
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  rowCenter: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rowSpaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rowSpaceAround: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

export {textStyles, signInStyles, modalStyles, imageStyles, containerStyles};
