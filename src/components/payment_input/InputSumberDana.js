import React, {useContext, forwardRef, memo} from 'react';
import {Text, View} from 'react-native';
import PropTypes from 'prop-types';

//Constants Modules
import {textStyles} from '../../Styles/globalStyles';

//Components Modules
import RekeningTeller from '../Common/RekeningTeller';
import InputRekeningSumber from '../CommonInput/InputRekeningSumber';
import {paymentInputContext} from '../../Provider/PaymentInputProvider';

const InputSumberDana = memo(
  forwardRef(({onJump}, ref) => {
    // @ localContext TransferProvider Data
    const {
      paymentInputData: {valueSumberDana},
    } = useContext(paymentInputContext);

    return (
      <View>
        {valueSumberDana == '00' ? (
          <View>
            <Text style={textStyles.errorMsg}>Silakan isi sumber dana</Text>
          </View>
        ) : valueSumberDana == '01' ? (
          <RekeningTeller title="Rekening Debet" />
        ) : valueSumberDana == '02' ? (
          <InputRekeningSumber ref={ref} onJump={onJump} />
        ) : null}
      </View>
    );
  }),
);
InputSumberDana.propTypes = {onJump: PropTypes.func};
export default InputSumberDana;
