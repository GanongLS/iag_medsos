import React, {memo, useContext, forwardRef} from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';
import CommonInput from './CommonInput';
import {authInputContext} from '../../../Provider/AuthInputProvider';

const InputConfnCode = memo(
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
          inputTitle="Kode Konfirmasi"
          iconName="lock"
          optionalPH={''}
          displayValue={username}
          onChangeInput={onUsernameChange}
          onInputValidation={onUsernameValidation}
          isValidInput={isValidUsername}
          min_Input={8}
        />
      </View>
    );
  }),
);
InputConfnCode.propTypes = {onJump: PropTypes.func};
export default InputConfnCode;
