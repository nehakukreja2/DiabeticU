import React from 'react';
import {
  Text,
  View,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import MenuOptions from './MenuOptions';

const BottomSheet = props => {
  return (
    <Modal
      onbackdroppress={() => console.log('pressed')}
      animationType="slide"
      transparent={true}
      visible={props?.modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
      <TouchableOpacity
        style={bottomSheet.centeredView}
        onPress={() => {
          props?.handleClose();
        }}>
        <TouchableWithoutFeedback>
          <View style={bottomSheet.modalView}>
            <Text style={bottomSheet.modalText}>Login with Social Media</Text>
            <View style={{marginTop: 20}}>
              <MenuOptions
                title="Login with Google"
                iconImg="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1024px-Google_%22G%22_logo.svg.png"
              />
              <MenuOptions
                title="Login with Facebook"
                iconImg="https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png"
              />
              <MenuOptions
                title="Login with Apple"
                iconImg="https://cdn3.iconfinder.com/data/icons/picons-social/57/16-apple-512.png"
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </TouchableOpacity>
    </Modal>
  );
};

export default BottomSheet;

const bottomSheet = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  modalView: {
    position: 'absolute',
    width: '100%',
    height: 400,
    backgroundColor: 'white',
    bottom: 0,
    borderRadius: 20,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    color: '#0B152D',
    fontFamily: 'CircularStd-Medium',
    marginTop: 40,
    marginLeft: 30,
    fontSize: 24,
  },
});
