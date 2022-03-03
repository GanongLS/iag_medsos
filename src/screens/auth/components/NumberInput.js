import React, {memo, forwardRef} from 'react';
import {Text, View, TextInput} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/FontAwesome5';
import PropTypes from 'prop-types';

//Constants Modules
import globalStyles, {textStyles} from '../../../Styles/globalStyles';
import gamais from '../../../Configs/colors';

const NumberInput = memo(
  forwardRef((props, ref) => {
    const {
      onSubmit,
      inputTitle,
      iconName,
      optionalPH,
      displayValue,
      onChangeInput,
      onInputValidation,
      isValidInput,
      min_Input,
      // keyboardType: kT,
      returnKeyType: rKT,
    } = props;
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
              textContentType="emailAddress"
              autoCapitalize="none"
              placeholder={`Masukkan ${inputTitle} ${optionalPH}`}
              returnKeyType={rKT}
              keyboardType="numeric"
              blurOnSubmit={false}
              // autoFocus={true}
              ref={ref}
              value={displayValue}
              onChangeText={(text) => onChangeInput(text, min_Input)}
              onEndEditing={(e) =>
                onInputValidation(e.nativeEvent.text, min_Input)
              }
              onSubmitEditing={() => onSubmit()}
            />
            {displayValue >= min_Input ? (
              <Feather name="check-circle" color="green" size={20} />
            ) : null}
          </View>
        </View>
        {/* Validation Form  */}
        {isValidInput ? null : (
          <View>
            <Text style={textStyles.errorMsg}>
              {`${inputTitle} harus diisi minimal ${min_Input} digit.`}
            </Text>
          </View>
        )}
      </View>
    );
  }),
);
NumberInput.propTypes = {onJump: PropTypes.func};
export default NumberInput;
