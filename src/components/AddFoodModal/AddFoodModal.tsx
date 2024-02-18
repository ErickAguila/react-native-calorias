import {Button, Icon, Input} from '@rneui/themed';
import React, {FC} from 'react';
import {Modal, View, StyleSheet, Text} from 'react-native';

type AddFoodModalProps = {
  onClose: () => void;
  visible: boolean;
};

const AddFoddModal: FC<AddFoodModalProps> = ({onClose, visible}) => {
  return (
    <Modal
      visible={visible}
      onRequestClose={onClose}
      transparent
      animationType="slide">
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.closeContainer}>
            <Button
              icon={<Icon name="close" />}
              onPress={onClose}
              type="clear"
            />
          </View>
          <View style={styles.formItem}>
            <View style={styles.inputContainer}>
              <Input />
            </View>
            <View style={styles.legendContainer}>
              <Text style={styles.legend}>KCLA</Text>
            </View>
          </View>
          <View style={styles.formItem}>
            <View style={styles.inputContainer}>
              <Input />
            </View>
            <View style={styles.legendContainer}>
              <Text style={styles.legend}>Nombre</Text>
            </View>
          </View>
          <View style={styles.formItem}>
            <View style={styles.inputContainer}>
              <Input />
            </View>
            <View style={styles.legendContainer}>
              <Text style={styles.legend}>Porción</Text>
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <Button
              title="Add"
              icon={<Icon name="plus" color="#fff" />}
              color="#4ecb71"
              radius="lg"
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  content: {
    width: '75%',
    backgroundColor: '#fff',
    padding: 18,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  closeContainer: {
    alignItems: 'flex-end',
  },
  formItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputContainer: {
    flex: 2,
  },
  legendContainer: {
    flex: 1,
  },
  legend: {
    fontWeight: '500',
  },
  buttonContainer: {
    alignItems: 'flex-end',
  },
});

export default AddFoddModal;
