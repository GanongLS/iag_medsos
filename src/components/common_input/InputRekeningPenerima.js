import React, {useContext, forwardRef} from 'react';
import {TextInput, Text, View} from 'react-native';

//Constants Modules
import globalStyles, {textStyles} from '../../Styles/globalStyles';
import colors from '../../Constants/colors';

//Components Modules
import PilihBank from './PilihBank';
import {commonInputContext} from '../../Provider/CommonInputProvider';

const InputRekeningPenerima = forwardRef(({onJump}, ref) => {
  // @ localContext TransferProvider Data
  const {
    commonInputData: {dest_account_no, isValidDestAccount},
    onDestAccountChange,
    onDestAccountValidation,
  } = useContext(commonInputContext);

  return (
    <>
      <PilihBank // Karena status !> 0 maka harusnya ga kerender
      />
      <View>
        <Text
          style={{
            ...textStyles.formLabel,
            marginVertical: 5,
            fontFamily: 'SanomatSans',
            color: colors.dark,
          }}>
          Rekening Penerima
        </Text>
        <View style={globalStyles.underlineContainer}>
          <TextInput
            style={{fontFamily: 'SanomatSans'}}
            placeholder="Masukan Rekening Penerima"
            ref={ref}
            value={dest_account_no}
            onChangeText={text => {
              onDestAccountChange(text);
            }}
            onEndEditing={e => onDestAccountValidation(e.nativeEvent.text)}
            returnKeyType="next"
            placeholderTextColor={colors.gray2}
            keyboardType="number-pad"
            onSubmitEditing={() => onJump()}
          />
        </View>
      </View>
      {isValidDestAccount ? null : ( // Error rekening penerima
        <View>
          <Text style={textStyles.errorMsg}>
            Rekening Penerima harus diisi!
          </Text>
        </View>
      )}
    </>
  );
});

export default InputRekeningPenerima;
