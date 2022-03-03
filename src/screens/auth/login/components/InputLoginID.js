import PropTypes from 'prop-types';
import React, {forwardRef, memo} from 'react';
import {View} from 'react-native';
import {useLogin} from '../LoginProvider';
import CommonInput from '../../components/CommonInput';

const InputLoginID = memo(
  forwardRef((props, ref) => {
    const {onJump} = props;
    const {state, onIDChange, onIDValidation} = useLogin();
    const {id, isValidID} = state;
    return (
      <View>
        <CommonInput
          ref={ref}
          onSubmit={onJump}
          inputTitle="Email atau Username"
          iconName="user-alt" //user-alt
          optionalPH={''}
          displayValue={id}
          onChangeInput={onIDChange}
          onInputValidation={onIDValidation}
          isValidInput={isValidID}
          min_Input={6}
          keyboardType="default"
          returnKeyType="next"
        />
      </View>
    );
  }),
);
InputLoginID.propTypes = {onJump: PropTypes.func};
export default InputLoginID;
