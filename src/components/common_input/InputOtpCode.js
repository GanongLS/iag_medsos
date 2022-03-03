import React, {useContext, forwardRef} from 'react';
import {TextInput, Text, View, KeyboardAvoidingView} from 'react-native';

//Constants Modules
import globalStyles, {textStyles} from '../../Styles/globalStyles';
import colors from '../../Constants/colors';

//Components Modules
import {commonInputContext} from '../../Provider/CommonInputProvider';

const InputOtpCode = forwardRef(({onSubmit}, ref) => {
  // @ localContext AccountsProvider Data
  const {
    commonInputData: {otp_code, isValidOtpCode},
    onOtpCodeChange,
    onOtpCodeValidation,
  } = useContext(commonInputContext);

  return (
    <KeyboardAvoidingView>
      <View>
        <Text // input otp code
          style={{
            ...textStyles.formLabel,
            marginVertical: 5,
            fontFamily: 'SanomatSans',
            color: colors.dark,
          }}>
          Password Transaksi
        </Text>
        <View
          style={{
            ...globalStyles.underlineContainer,
          }}>
          <TextInput
            style={{
              fontFamily: 'SanomatSans',
            }}
            placeholder="Masukkan Password Transaksi"
            // autoFocus={true}
            ref={ref}
            value={otp_code}
            onChangeText={text => {
              onOtpCodeChange(text);
            }}
            onEndEditing={e => onOtpCodeValidation(e.nativeEvent.text)}
            returnKeyType="send"
            placeholderTextColor={colors.gray2}
            keyboardType="number-pad"
            onSubmitEditing={() => onSubmit()}
          />
        </View>
        {isValidOtpCode ? null : (
          <View>
            <Text style={textStyles.errorMsg}>
              Silakan isi 6 digit password transaksi
            </Text>
          </View>
        )}
        <Text style={[textStyles.h5Left, {marginTop: 10}]}>
          Harap periksa data kembali sebelum anda melanjutkan transaksi
        </Text>
      </View>
    </KeyboardAvoidingView>
  );
});
export default InputOtpCode;
