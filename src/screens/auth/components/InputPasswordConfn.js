import React, {useContext, memo, forwardRef} from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';

//Components Modules
import {authInputContext} from '../../../Provider/AuthInputProvider';
import SecureInput from './SecureInput';

const InputPasswordConfn = memo(
  forwardRef((props, ref) => {
    const {onJump} = props;
    const {
      authInputState,
      onPasswordConfnChange,
      onPasswordConfnValidation,
      onToggleSecurePassword,
    } = useContext(authInputContext);
    const {
      passwordConfn,
      isSecurePassword,
      isValidPasswordConfn,
    } = authInputState;
    return (
      <View>
        <SecureInput
          ref={ref}
          onSubmit={onJump}
          inputTitle="Konfirmasi Password"
          iconName="lock"
          optionalPH={'\n(yang didaftarkan)'}
          displayValue={passwordConfn}
          onChangeInput={onPasswordConfnChange}
          onInputValidation={onPasswordConfnValidation}
          isValidInput={isValidPasswordConfn}
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
InputPasswordConfn.propTypes = {onJump: PropTypes.func};
export default InputPasswordConfn;
