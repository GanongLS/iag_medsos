import React, {memo, useContext, forwardRef} from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';
import CommonInput from './CommonInput';
import {authInputContext} from '../../../Provider/AuthInputProvider';

const InputEmail = memo(
  forwardRef((props, ref) => {
    const {onJump} = props;
    const {authInputState, onEmailChange, onEmailValidation} = useContext(
      authInputContext,
    );
    const {email, isValidEmail} = authInputState;
    return (
      <View>
        <CommonInput
          ref={ref}
          onSubmit={onJump}
          inputTitle="Email"
          iconName="envelope"
          optionalPH={'\n(digunakan untuk login)'}
          displayValue={email}
          onChangeInput={onEmailChange}
          onInputValidation={onEmailValidation}
          isValidInput={isValidEmail}
          min_Input={8}
          keyboardType="email-address"
          returnKeyType="next"
        />
      </View>
    );
  }),
);
InputEmail.propTypes = {onJump: PropTypes.func};
export default InputEmail;
