import {useFocusEffect} from '@react-navigation/core';
import React, {memo, useCallback} from 'react';
import {FlatList, Text, View} from 'react-native';
import {height, width} from '../../constants/constants';
import {useNavOptionAction} from '../../providers/NavOptionProvider';
import AnggotaYangMungkinAndaKenal from './components/AnggotaYangMungkinAndaKenal';
import Stories from './components/Stories';
import UpdateStatus from './components/UpdateStatus';
var isEmpty = require('lodash.isempty');

const postHeight = height > 700 ? 600 : 480;

const HomeScreen = memo(() => {
  const {onShowMainHeader} = useNavOptionAction();
  useFocusEffect(
    useCallback(() => {
      // console.log({height});
      onShowMainHeader();
    }, []),
  );
  const homeData = [
    {id: '01abc', type: 'update_status', value: {}},
    {id: '02abc', type: 'stories', value: {}},
    {id: '03abc', type: 'anggota_yang', value: {}},
    {id: '05abc', type: 'post', value: {}},
    {id: '04abc', type: 'post', value: {}},
  ];

  const renderHomeList = ({item}) => {
    switch (item.type) {
      case 'update_status':
        return <UpdateStatus />;
      case 'stories':
        return <Stories />;
      case 'post':
        return <Post />;
      case 'anggota_yang':
        return <AnggotaYangMungkinAndaKenal />;
      default:
        return <Text>HomeScreen {'\n'} type yang Anda masukkan salah</Text>;
    }
  };

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={homeData}
      renderItem={renderHomeList}
      keyExtractor={item => item.id.toString()}
      ItemSeparatorComponent={HomeDivider}
    />
  );
});

const Post = () => {
  return (
    <View style={{height: postHeight, backgroundColor: 'white', width: width}}>
      <Text>Post</Text>
    </View>
  );
};

const HomeDivider = () => <View style={{marginVertical: 6}} />;

export default HomeScreen;
