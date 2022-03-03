import React, {forwardRef, useContext, memo} from 'react';
import {Text, View, TextInput} from 'react-native';
import PropTypes from 'prop-types';
import Feather from 'react-native-vector-icons/Feather';

//Constants Modules
import globalStyles, {textStyles} from '../../Styles/globalStyles';
import colors from '../../Constants/colors';

//Components Modules
import {paymentInputContext} from '../../Provider/PaymentInputProvider';

const InputCustomerNumber = memo(
  forwardRef((props, ref) => {
    const {
      onJump,
      inputTitle,
      placeholderTitle,
      errorMsg,
      minimalInput,
      keyboardType,
    } = props;
    // @ localContext TransferProvider Data
    const {
      paymentInputData: {customerNumber, isValidCustomerNumber},
      onCustomerNumberChange,
      onCustomerNumberValidation,
    } = useContext(paymentInputContext);
    return (
      <>
        <Text
          style={{
            ...textStyles.formLabel,
            marginBottom: 10,
            fontFamily: 'SanomatSans',
            color: colors.dark,
          }}>
          {inputTitle}
        </Text>
        <View style={globalStyles.rowSBULContainer}>
          <View
            style={{
              flex: 1,
            }}>
            <TextInput
              style={{
                fontFamily: 'SanomatSans',
                color: colors.dark,
              }}
              ref={ref}
              value={customerNumber}
              keyboardType={keyboardType}
              onChangeText={text => {
                onCustomerNumberChange(text);
              }}
              placeholder={placeholderTitle}
              onEndEditing={e => onCustomerNumberValidation(e.nativeEvent.text)}
              placeholderTextColor={colors.gray2}
              onSubmitEditing={() => onJump()}
            />
          </View>
          {customerNumber ? (
            customerNumber.length >= minimalInput ? (
              <View>
                <Feather name="check-circle" color="green" size={20} />
              </View>
            ) : null
          ) : null}
        </View>
        {isValidCustomerNumber ? null : (
          <View>
            <Text style={textStyles.errorMsg}>{errorMsg}</Text>
          </View>
        )}
      </>
    );
  }),
);
InputCustomerNumber.propTypes = {onJump: PropTypes.func};
InputCustomerNumber.defaultProps = {
  onJump: null,
  inputTitle: 'Nomor Pelanggan',
  placeholderTitle: 'Masukkan Nomor Pelanggan',
  errorMsg: 'Silakan isi nomor pelanggan.',
  minimalInput: 10,
  keyboardType: 'numeric',
};
export default InputCustomerNumber;
