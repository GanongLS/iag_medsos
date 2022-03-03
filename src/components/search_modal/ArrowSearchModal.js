import React, {memo, useState, useEffect} from 'react';
import {View, Modal, FlatList, RefreshControl} from 'react-native';
import {SearchBar} from 'react-native-elements';

//Constants Modules
import globalStyles from '../../Styles/globalStyles';
import colors from '../../Constants/colors';

//Components Modules
import FLItem from '../Common/FLItem';

const SearchModal = memo(props => {
  const {
    onJump,
    visible,
    onHide,
    onSetValue,
    modalData,
    searchTitle,
    rightTitle,
  } = props;
  const initialState = {
    data: modalData,
    text: '',
    refresh: false,
  };
  const [state, setState] = useState(initialState);
  const onRefresh = () => {
    setState(prevState => {
      return {...prevState, data: modalData, refresh: false};
    });
  };
  useEffect(() => {
    onRefresh(); // ingat setiap mounting yang memanggil fungsi, harus gunakan () untuk memanggilnya berjalan.
  }, [modalData]);
  const onSearch = text => {
    // ini harus menggunakan data yang pertama kali bukan data dari state, karena kalau iya searchnya jadi irreversible.
    const newData = modalData.filter(item => {
      return item.name.toLowerCase().indexOf(text.toLowerCase()) > -1;
    });
    setState(prevState => {
      return {...prevState, text: text, data: newData};
    });
  };
  const onHandleData = async (name, value) => {
    const req = await onSetValue(name, value);
    req ? await onHide() : null;
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
          onHide();
        }}>
        <View style={globalStyles.growContainer}>
          <View style={globalStyles.container}>
            <SearchBar
              lightTheme
              placeholder={searchTitle}
              inputContainerStyle={{
                width: '100%',
                backgroundColor: 'white',
              }}
              onChangeText={text => {
                onSearch(text);
              }}
              value={state.text}
            />
            <FlatList
              showsVerticalScrollIndicator={false}
              data={state.data}
              renderItem={({item}) => (
                <FLItem
                  name={item.name}
                  func={() => {
                    onHandleData(item.name, item.value);
                  }}
                  rightTitle={rightTitle}
                />
              )}
              keyExtractor={item => item.value.toString()}
              extraData={modalData}
              refreshControl={
                <RefreshControl
                  refreshing={state.refresh}
                  onRefresh={onRefresh}
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

export default SearchModal;
