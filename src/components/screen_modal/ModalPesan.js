import React, {memo} from 'react';
import {Text, View, StyleSheet, Modal, TouchableOpacity} from 'react-native';
import {height, width} from '../../Constants/constants';
import globalStyles from '../../Styles/globalStyles';

const ModalPesan = memo(props => {
  const {visible, pesan, Cancel, OK} = props;
  return (
    <>
      <Modal
        animationType="fade"
        transparent={true}
        visible={visible}
        onRequestClose={() => {
          Cancel();
        }}>
        <TouchableOpacity
          style={styles.Container}
          activeOpacity={0.8}
          onPressOut={() => {
            Cancel();
          }}>
          <View
            style={{
              ...styles.baseView,
              paddingHorizontal: 5,
            }}>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                margin: '5%',
              }}>
              <Text style={{textAlign: 'center'}}>{pesan}</Text>
            </View>
            <View
              style={{
                ...globalStyles.rowSBContainer,
                width: '100%',
                flex: 0.4,
                alignItems: 'flex-end',
              }}>
              <TouchableOpacity
                style={{...styles.modalButton}}
                onPress={() => {
                  Cancel();
                }}>
                <Text style={globalStyles.h4Left}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => {
                  OK();
                }}>
                <Text style={globalStyles.h4Left}>OK</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
    </>
  );
});

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  baseView: {
    backgroundColor: '#e6f2ff',
    width: '80%',
    height: height * 0.4,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 5,
  },
  modalButton: {
    backgroundColor: '#ffffff',
    height: 40,
    width: '40%',
    borderRadius: 5,
    elevation: 2,
    justifyContent: 'center',
    margin: 10,
    alignItems: 'center',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'center',
  },
});

export default ModalPesan;
