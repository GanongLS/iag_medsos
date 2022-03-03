import React, {useContext, forwardRef} from 'react';
import {TextInput, Text, View} from 'react-native';

//Constants Modules
import globalStyles, {textStyles} from '../../Styles/globalStyles';
import colors from '../../Constants/colors';

//Components Modules
import {commonInputContext} from '../../Provider/CommonInputProvider';

const InputOtpHandphone = forwardRef(({onJump}, ref) => {
  // @ localContext TransferProvider Data
  const {
    commonInputData: {otp_handphone, isValidOtpHandphone},
    onOtpHandphoneChange,
    onOtpHandphoneValidation,
  } = useContext(commonInputContext);
  return (
    <>
      <View>
        <Text
          style={{
            ...textStyles.formLabel,
            marginVertical: 5,
            fontFamily: 'SanomatSans',
            color: colors.dark,
          }}>
          No. Handphone Penerima OTP
        </Text>
        <View style={globalStyles.underlineContainer}>
          <TextInput
            style={{fontFamily: 'SanomatSans'}}
            placeholder="Masukkan No. Handphone Penerima OTP"
            ref={ref}
            value={otp_handphone}
            onChangeText={text => {
              onOtpHandphoneChange(text);
            }}
            onEndEditing={e => onOtpHandphoneValidation(e.nativeEvent.text)}
            returnKeyType="next"
            placeholderTextColor={colors.gray2}
            keyboardType="phone-pad"
            onSubmitEditing={() => onJump()}
          />
        </View>
      </View>
      {isValidOtpHandphone ? null : ( // Error Handphone penerima
        <View>
          <Text style={textStyles.errorMsg}>
            No. Handphone Penerima OTP harus diisi
          </Text>
        </View>
      )}
    </>
  );
});

export default InputOtpHandphone;
