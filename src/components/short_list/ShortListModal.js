import React, {memo, useContext} from 'react';
import {
  View,
  Modal,
  FlatList,
  RefreshControl,
  Text,
  TouchableOpacity,
} from 'react-native';

//Constants Modules
import globalStyles, {textStyles, modalStyles} from '../../Styles/globalStyles';
import colors from '../../Configs/colors';

//Components Modules
import FLItem from '../Common/FLItem';
import {appContext} from '../../Provider/AppProvider';
import {height, width} from '../../Configs/constants';
import gamais from '../../Configs/colors';

const ListNSearchModal = memo((props) => {
  const {
    onJump,
    visible,
    onHide,
    hideValue,
    onSetValue,
    modalData,
    inputTitle,
  } = props;
  const {
    appState: {refresh},
    onRefreshing,
  } = useContext(appContext);

  const onHandleData = async (name, value) => {
    const req = await onSetValue(name, value);
    req ? await onHide(value) : null;
    onJump();
  };
  // console.log(modalData);
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
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          activeOpacity={1}
          onPressOut={() => {
            onHide(hideValue);
          }}>
          <View
            style={{
              ...modalStyles.modalView,
              backgroundColor: gamais.bg1,
              paddingHorizontal: 5,
              // top: height * 0.3,
              height: height * 0.3,
              width: width * 0.9,
            }}>
            <Text style={{...textStyles.h1Left, margin: '2%'}}>
              {inputTitle}
            </Text>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={modalData}
              renderItem={({item}) => (
                <FLItem
                  name={item.name}
                  func={() => {
                    onHandleData(item.name, item.value);
                  }}
                />
              )}
              keyExtractor={(item) => item.value.toString()}
              extraData={modalData}
              refreshControl={
                <RefreshControl
                  refreshing={refresh}
                  onRefresh={() => onRefreshing()}
                  colors={[colors.primary]}
                />
              }
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
});

export default ListNSearchModal;
