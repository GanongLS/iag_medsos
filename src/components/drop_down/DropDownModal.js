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
import ModalStyles from './ModalStyles';
import {dropDonwnContext} from './DropDownProvider';

const DropDownModal = memo(props => {
  const {onJump, onDataUpdate, onHide, hideValue, visible} = props;
  const {width: WW, height: WH} = useWindowDimensions();
  const {dropDownData} = useContext(dropDonwnContext);
  const {
    position: {pX, pY},
    dimension: {width, height},
    data,
  } = dropDownData;
  const handleDataFlow = async (name, value) => {
    await onDataUpdate(name, value);
    await onHide(value);
    onJump();
  };
  const MapItem = item => {
    // console.log(item);
    return (
      <TouchableOpacity
        key={item.id.toString()}
        style={{
          ...globalStyles.rowSBULContainer,
          backgroundColor: '#e6f2ff',
          height: WH * 0.055,
        }}
        onPress={() => {
          handleDataFlow(item.name, item.value);
        }}>
        <Text style={{...globalStyles.h4Left, paddingHorizontal: 5}}>
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={visible}
        onRequestClose={() => {
          onHide(hideValue);
        }}>
        <TouchableOpacity
          style={{
            ...ModalStyles.baseView,
            justifyContent: 'flex-start',
          }}
          activeOpacity={1}
          onPressOut={() => {
            onHide(hideValue);
          }}>
          <View
            style={{
              ...ModalStyles.modalView,
              backgroundColor: '#e6f2ff',
              top: pY
                ? data
                  ? data.length > 2
                    ? pY
                    : pY
                  : WH * 0.3
                : WH * 0.3,
              width: width > 30 ? width + 58 : WW * 0.9,
              // height: height ? height * 5 : WH * 0.2,
              paddingHorizontal: 5,
              elevation: 2,
            }}>
            {data ? data.map(MapItem) : null}
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
});

export default DropDownModal;
