import React, {memo, useContext, forwardRef} from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';
import CommonInput from './CommonInput';
import {authInputContext} from '../../../Provider/AuthInputProvider';

const InputUsername = memo(
  forwardRef((props, ref) => {
    const {onJump} = props;
    const {authInputState, onUsernameChange, onUsernameValidation} = useContext(
      authInputContext,
    );
    const {username, isValidUsername} = authInputState;
    return (
      <View>
        <CommonInput
          ref={ref}
          onSubmit={onJump}
          inputTitle="Username"
          iconName="user-edit"
          optionalPH={'\n(digunakan untuk login)'}
          displayValue={username}
          onChangeInput={onUsernameChange}
          onInputValidation={onUsernameValidation}
          isValidInput={isValidUsername}
          min_Input={4}
          keyboardType="default"
          returnKeyType="next"
        />
      </View>
    );
  }),
);
InputUsername.propTypes = {onJump: PropTypes.func};
export default InputUsername;
