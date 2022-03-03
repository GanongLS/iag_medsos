import React, {useContext, memo} from 'react';
import {
  Text,
  View,
  Modal,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';

//Constants Modules
import globalStyles from '../../Styles/globalStyles';

//Component Modules
import {paymentInputContext} from '../../Provider/PaymentInputProvider';
import PaymentStyles from './PaymentStyles';

const ModalSumberDana = memo(({onJump}) => {
  const {width: WW, height: WH} = useWindowDimensions();
  const {
    paymentInputData: {
      position: {pX, pY},
      dimension: {width, height},
      modalSumberDanaVisible,
    },
    onHideModalSumberDana,
    onSetSumberDana,
  } = useContext(paymentInputContext);

  const arraySumberDana = [
    {
      title: 'Pilih Sumber Dana',
      value: '00',
      onPress: () => {
        null;
      },
    },
    {
      title: 'Cash',
      value: '01',
      onPress: () => {
        null;
      },
    },
    {
      title: 'Debet Rekening Anggota',
      value: '02',
      onPress: () => {
        onJump();
      },
    },
  ];
  const mapItem = (el, index) => {
    return (
      <TouchableOpacity
        key={index}
        style={{
          ...PaymentStyles.modalButton,
        }}
        onPress={async () => {
          await onSetSumberDana(el.title, el.value);
          await onHideModalSumberDana();
          el.onPress();
        }}>
        <Text style={{...globalStyles.h4Left, paddingHorizontal: 5}}>
          {el.title}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalSumberDanaVisible}
        onRequestClose={() => {
          onHideModalSumberDana();
        }}>
        <TouchableOpacity
          style={{
            ...PaymentStyles.baseView,
            justifyContent: 'flex-start',
          }}
          activeOpacity={1}
          onPressOut={() => {
            onHideModalSumberDana();
          }}>
          <View
            style={{
              ...PaymentStyles.modalView,
              top: pY ? pY - height : WH * 0.18,
              width: width > 30 ? width + 20 : WW * 0.9,
              paddingHorizontal: 5,
            }}>
            {arraySumberDana.map(mapItem)}
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
});

export default ModalSumberDana;
