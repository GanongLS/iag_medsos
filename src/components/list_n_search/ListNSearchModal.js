import React, {memo, useContext} from 'react';
import {View, Modal, FlatList, RefreshControl, Text} from 'react-native';
import {SearchBar} from 'react-native-elements';

//Constants Modules
import globalStyles, {textStyles} from '../../Styles/globalStyles';
import colors from '../../Configs/colors';

//Components Modules
import FLItem from '../Common/FLItem';
import {listNSearchContext} from './ListNSearchProvider';
import {appContext} from '../../Provider/AppProvider';

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
  const {listNSearchData, onSearch} = useContext(listNSearchContext);
  const {data, searchText} = listNSearchData;
  const onHandleData = async (name, value) => {
    const req = await onSetValue(name, value);
    req ? await onHide(value) : null;
    onJump();
  };
  // console.log(modalData);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.3)',
      }}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={visible}
        onRequestClose={() => {
          onHide(hideValue);
        }}>
        <View style={globalStyles.growContainer}>
          <View style={globalStyles.container}>
            <Text style={{...textStyles.h1Left, margin: '2%'}}>
              {inputTitle}
            </Text>
            <SearchBar
              lightTheme
              placeholder={`Cari ${inputTitle}...`}
              inputContainerStyle={{
                width: '100%',
                backgroundColor: 'white',
              }}
              onChangeText={(text) => {
                onSearch(text);
              }}
              value={searchText}
            />
            <FlatList
              showsVerticalScrollIndicator={false}
              data={data}
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
        </View>
      </Modal>
    </View>
  );
});

export default ListNSearchModal;
