import React from 'react';
import {View, Modal, ActivityIndicator} from 'react-native';
import colors from '../../constants/colors';

const LoadingModal = props => {
  return (
    <>
      <Modal
        visible={props.visible}
        // visible={true}
        onRequestClose={() => {
          props.Hide();
        }}
        transparent>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            backgroundColor: 'rgba(0,0,0,0.3)',
          }}>
          <ActivityIndicator color={colors.primary} size="large" />
        </View>
      </Modal>
    </>
  );
};

export default LoadingModal;
