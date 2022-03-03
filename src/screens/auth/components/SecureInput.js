import PropTypes from 'prop-types';
import React, {forwardRef, memo} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/FontAwesome5';
import gamais from '../../../constants/colors';
import globalStyles, {textStyles} from '../../../styles/globalStyles';

const SecureInput = memo(
  forwardRef((props, ref) => {
    const {
      onSubmit,
      inputTitle,
      iconName,
      isSecureText,
      optionalPH,
      displayValue,
      onChangeInput,
      onInputValidation,
      isValidInput,
      min_Input,
      keyboardType: kT,
      returnKeyType: rKT,
      onToggleSecure,
    } = props;
    // console.log(min_Input);
    // console.log(displayValue);
    return (
      <View>
        <View style={{...globalStyles.grayUnderline, marginTop: '5%'}}>
          <Text style={textStyles.formLabel}>{inputTitle}</Text>
          <View style={globalStyles.rowSBULContainer}>
            <Icon
              name={iconName}
              color={gamais.dark}
              size={20}
              style={{flex: 0.1}}
            />
            <TextInput
              style={{flex: 1, fontFamily: 'SanomatSans', flexWrap: 'wrap'}}
              secureTextEntry={isSecureText}
              autoCapitalize="none"
              placeholder={`Masukkan ${inputTitle} ${optionalPH}`}
              textContentType="password"
              value={displayValue}
              returnKeyType={rKT}
              keyboardType={kT}
              blurOnSubmit={false}
              ref={ref}
              onChangeText={text => onChangeInput(text, min_Input)}
              onEndEditing={e =>
                onInputValidation(e.nativeEvent.text, min_Input)
              }
              onSubmitEditing={() => onSubmit()}
            />
            {displayValue.length >= min_Input && isValidInput ? (
              <Feather name="check-circle" color="green" size={20} />
            ) : null}
            <TouchableOpacity
              onPress={() => {
                onToggleSecure();
              }}>
              {isSecureText ? (
                <Feather name="eye-off" color="grey" size={20} />
              ) : (
                <Feather name="eye" color="green" size={20} />
              )}
            </TouchableOpacity>
          </View>
        </View>
        {/* Validation Form  */}
        {isValidInput ? null : (
          <View>
            <Text style={textStyles.errorMsg}>Password harus diisi.</Text>
          </View>
        )}
      </View>
    );
  }),
);
SecureInput.propTypes = {onJump: PropTypes.func};
export default SecureInput;
