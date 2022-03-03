import PropTypes from 'prop-types';
import React, {forwardRef, memo} from 'react';
import {View} from 'react-native';
import SecureInput from '../../components/SecureInput';
import {useLogin} from '../LoginProvider';

const InputPassword = memo(
  forwardRef((props, ref) => {
    const {onJump} = props;
    const {
      state,
      onPasswordChange,
      onPasswordValidation,
      onToggleSecurePassword,
    } = useLogin();
    const {password, isSecurePassword, isValidPassword} = state;
    return (
      <View>
        <SecureInput
          ref={ref}
          onSubmit={onJump}
          inputTitle="Password"
          iconName="lock"
          optionalPH={''}
          displayValue={password}
          onChangeInput={onPasswordChange}
          onInputValidation={onPasswordValidation}
          isValidInput={isValidPassword}
          min_Input={8}
          keyboardType="default"
          returnKeyType="next"
          onToggleSecure={onToggleSecurePassword}
          isSecureText={isSecurePassword}
        />
      </View>
    );
  }),
);
InputPassword.propTypes = {onJump: PropTypes.func};
export default InputPassword;
