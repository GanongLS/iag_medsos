import React, {memo, useContext, forwardRef} from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';
import CommonInput from './CommonInput';
import {authInputContext} from '../../../Provider/AuthInputProvider';

const InputEmailConfn = memo(
  forwardRef((props, ref) => {
    const {onJump} = props;
    const {
      authInputState,
      onConfnCodeChange,
      onConfnCodeValidation,
    } = useContext(authInputContext);
    const {confnCode, isValidConfnCode} = authInputState;
    return (
      <View>
        <CommonInput
          ref={ref}
          onSubmit={onJump}
          inputTitle="Kode Konfirmasi"
          iconName="lock"
          optionalPH={''}
          displayValue={confnCode}
          onChangeInput={onConfnCodeChange}
          onInputValidation={onConfnCodeValidation}
          isValidInput={isValidConfnCode}
          min_Input={6}
        />
      </View>
    );
  }),
);
InputEmailConfn.propTypes = {onJump: PropTypes.func};
export default InputEmailConfn;
