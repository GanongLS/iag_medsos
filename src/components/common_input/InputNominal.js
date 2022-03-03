import React, {useContext, forwardRef} from 'react';
import {TextInput, Text, View} from 'react-native';

//Constants Modules
import globalStyles, {textStyles} from '../../Styles/globalStyles';
import colors from '../../Constants/colors';

//Components Modules
import {commonInputContext} from '../../Provider/CommonInputProvider';

const InputNominal = forwardRef(({onJump}, ref) => {
  //komponen ini sebenarnya bisa dibuat common component.
  // @ localContext TransferProvider Data
  const {
    commonInputData: {fNominal, isValidNominal, isEnoughNominal},
    onNominalChange,
    onNominalValidation,
  } = useContext(commonInputContext);
  return (
    <>
      <View>
        <Text
          style={{
            ...textStyles.formLabel,
            marginVertical: 5,
            fontFamily: 'SanomatSans',
            color: colors.dark,
          }}>
          Nominal
        </Text>
        <View style={globalStyles.rowSBULContainer}>
          <Text style={{fontSize: 14, fontFamily: 'SanomatSans'}}>Rp.</Text>
          <TextInput
            style={{fontFamily: 'SanomatSans', flex: 1, paddingBottom: 8}}
            placeholder="0"
            ref={ref}
            value={fNominal}
            onChangeText={text => {
              onNominalChange(text);
            }}
            onEndEditing={e => onNominalValidation(e.nativeEvent.text)}
            returnKeyType="next"
            placeholderTextColor={colors.gray2}
            keyboardType="number-pad"
            onSubmitEditing={() => onJump()}
          />
        </View>
      </View>
      {isValidNominal ? (
        isEnoughNominal ? null : (
          <View>
            <Text style={textStyles.errorMsg}>
              Nominal Transaksi minimal Rp 10.000
            </Text>
          </View>
        )
      ) : (
        <View>
          <Text style={textStyles.errorMsg}>Nominal harus diisi!</Text>
        </View>
      )}
    </>
  );
});

export default InputNominal;
