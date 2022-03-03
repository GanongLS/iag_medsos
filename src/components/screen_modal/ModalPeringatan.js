import React, {memo} from 'react';
import {Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import gamais from '../../constants/colors';
import {height} from '../../constants/constants';
import globalStyles from '../../styles/globalStyles';

const ModalPeringatan = memo(props => {
  const {visible, pesan, OK} = props;
  return (
    <>
      <Modal
        animationType="fade"
        transparent={true}
        visible={visible}
        onRequestClose={() => {
          OK();
        }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            backgroundColor: 'rgba(0,0,0,0.15)',
          }}>
          <TouchableOpacity
            style={styles.Container}
            activeOpacity={0.8}
            onPressOut={() => {
              OK();
            }}>
            <View
              style={{
                ...styles.baseView,
                backgroundColor: gamais.warn,
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
                  // ...globalStyles.rowSBContainer,
                  width: '100%',
                  flex: 0.4,
                  alignItems: 'center',
                }}>
                <TouchableOpacity
                  style={styles.modalButton80}
                  onPress={() => {
                    OK();
                  }}>
                  <Text style={globalStyles.h4Left}>Tutup</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        </View>
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
  modalButton80: {
    backgroundColor: '#ffffff',
    height: 40,
    width: '80%',
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

export default ModalPeringatan;
