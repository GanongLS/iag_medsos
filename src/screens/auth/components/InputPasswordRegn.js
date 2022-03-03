import React, {useContext, memo, forwardRef} from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';

//Components Modules
import {authInputContext} from '../../../Provider/AuthInputProvider';
import SecureInput from './SecureInput';

const InputPasswordRegn = memo(
  forwardRef((props, ref) => {
    const {onJump} = props;
    const {
      authInputState,
      onPasswordRegnChange,
      onPasswordRegnValidation,
      onToggleSecurePassword,
    } = useContext(authInputContext);
    const {
      passwordRegn,
      isSecurePassword,
      isValidPasswordRegn,
    } = authInputState;
    return (
      <View>
        <SecureInput
          ref={ref}
          onSubmit={onJump}
          inputTitle="Password"
          iconName="lock"
          optionalPH={'(yang didaftarkan)'}
          displayValue={passwordRegn}
          onChangeInput={onPasswordRegnChange}
          onInputValidation={onPasswordRegnValidation}
          isValidInput={isValidPasswordRegn}
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
InputPasswordRegn.propTypes = {onJump: PropTypes.func};
export default InputPasswordRegn;
