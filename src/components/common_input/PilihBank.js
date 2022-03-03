import React, {useContext} from 'react';
import {Text, View} from 'react-native';

//Constants Modules
import globalStyles, {textStyles} from '../../Styles/globalStyles';
import colors from '../../Constants/colors';

//Components Modules
import {trans_Context} from '../../Provider/TransactionProvider';
import TouchableItem from '../TouchableItem';

//warn Edit sampai Beres ya!
const PilihBank = () => {
  // @ globalContext TransProvider State
  const {
    trans_State: {status, balInqData},
  } = useContext(trans_Context);

  return (
    <>
      {status > 0 ? (
        rekTujuan != 'Input Baru' ? (
          <View>
            <Text
              style={[
                textStyles.formLabel,
                {
                  marginBottom: 5,
                  fontFamily: 'SanomatSans',
                  color: colors.dark,
                },
              ]}>
              Bank Penerima
            </Text>
            <View
              style={{
                ...globalStyles.underlineContainer,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <TextInput
                style={{
                  fontFamily: 'SanomatSans',
                  color: colors.dark,
                  width: '90%',
                }}
                editable={false}
                value={data_favorite.kode}
                onChangeText={kode => {
                  this.setState({kode});
                }}
                placeholder="Masukkan Bank Penerima"
                placeholderTextColor={colors.gray2}
              />
            </View>
            {this.state.errors.kode ? (
              <Message>{this.state.errors.kode}</Message>
            ) : (
              <Message />
            )}
          </View>
        ) : (
          <View>
            <Text
              style={[
                textStyles.formLabel,
                {
                  marginBottom: 5,
                  fontFamily: 'SanomatSans',
                  color: colors.dark,
                },
              ]}>
              Bank Penerima
            </Text>
            <TouchableItem
              onPress={() =>
                navigate('pilihKode', {
                  setKode: setKode(),
                })
              }>
              <View
                style={[
                  TransferStyles.grayTextInputContainer2,
                  {flexDirection: 'row', alignItems: 'center'},
                ]}>
                <TextInput
                  style={{
                    fontFamily: 'SanomatSans',
                    color: colors.dark,
                    width: '90%',
                  }}
                  editable={false}
                  value={this.state.kode}
                  onChangeText={kode => {
                    this.setState({kode: this.state.kode});
                  }}
                  placeholder="Pilih Bank Penerima"
                  placeholderTextColor={colors.gray2}
                />
                <MaterialCommunityIcons
                  name="chevron-down"
                  size={normalize(27)}
                />
              </View>
            </TouchableItem>
          </View>
        )
      ) : null}
    </>
  );
};

export default PilihBank;
