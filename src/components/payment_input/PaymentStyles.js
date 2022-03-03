import {StyleSheet} from 'react-native';

const PaymentStyles = StyleSheet.create({
  baseView: {
    flex: 1,
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: 'white',
    width: '80%',
    alignItems: 'center',
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

export default PaymentStyles;
