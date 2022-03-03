import React, {memo, useContext, forwardRef} from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';
import CommonInput from './CommonInput';
import {authInputContext} from '../../../Provider/AuthInputProvider';

const InputTemanAngkatan = memo(
  forwardRef((props, ref) => {
    const {onJump} = props;
    const {authInputState, onTmAngChange, onTmAngValidation} = useContext(
      authInputContext,
    );
    const {tmAng, isValidTmAng} = authInputState;
    return (
      <View>
        <CommonInput
          ref={ref}
          onSubmit={onJump}
          inputTitle="Teman Angkatan"
          iconName="user-check"
          optionalPH={'\n(untuk konfirmasi akun)'}
          displayValue={tmAng}
          onChangeInput={onTmAngChange}
          onInputValidation={onTmAngValidation}
          isValidInput={isValidTmAng}
          min_Input={4}
          keyboardType="default"
          returnKeyType="next"
        />
      </View>
    );
  }),
);
InputTemanAngkatan.propTypes = {onJump: PropTypes.func};
export default InputTemanAngkatan;
