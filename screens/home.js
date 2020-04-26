import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, Button, Modal } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Card from '../shared/Card';
import { Icon } from 'react-native-elements';
import Signup from './Signup';

export default function Home({ navigation }) {


  const [people, setPeople] = useState([
    { name: 'Pizza Max', price: '$100', id: '1' },
    { name: 'Pizza Point Large', price: '$17', id: '2' },
    { name: 'Burger O Clock', price: '$50', id: '3' },
    { name: 'Day Nigth Pizza', price: '$30', id: '4' },
    { name: 'Large Sandwich', price: '$90', id: '5' },
    { name: 'Club Sandwich', price: '$80', id: '6' },
    { name: 'Zinger Burger', price: '$12', id: '7' },
    { name: 'Chiken Burger', price: '$10', id: '8' },
    { name: 'Veg Bergur', price: '$15', id: '9' },
    { name: 'Pizza Picasso', price: '$40', id: '10' },
    { name: 'Spice and Ice Food', price: '$60', id: '11' },
    { name: 'Donisal', price: '$100', id: '12' },
    { name: 'Fries', price: '$25', id: '11' },
    { name: 'Spicy Wing', price: '$75', id: '13' },
    { name: 'Spicy Grill', price: '$25', id: '14' },
    { name: 'Mr. Burger', price: '$12', id: '15' }
  ]);

  const pressNavigator = (item) => {
    navigation.navigate('ReviewDetail', item);

  }

  const [modalX, setmodalX] = useState(false);

  return (
    <View>

      <Modal visible={modalX} animationType='slide'>
        <View style={styles.modalContent}>
          <Icon name='close' onPress={() => setmodalX(false)} size={28} style={{ ...styles.modalToogle, ...styles.closeModal }} />
          <Signup></Signup>
        </View>
      </Modal>

      <Icon name='add' onPress={() => setmodalX(true)} size={28} style={styles.modalToogle} />
      <ScrollView>
        {people.map((item) => {
          return (
            <View key={item.key}>

              <TouchableOpacity onPress={() => pressNavigator(item)}>
                <Card>
                  <Text> {item.name} : {item.price}</Text>
                </Card>
              </TouchableOpacity>
            </View>
          )
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: 'black'
  },
  footer: {
    backgroundColor: 'blue'
  },
  buttonContainer: {
    backgroundColor: 'blue'
  },
  input: {
    borderColor: 'black',
    borderWidth: 1
  },
  item: {
    marginTop: 24,
    backgroundColor: '#00e5ff',
    padding: 20,
    fontSize: 24,
    width: 300
  },
  modalToogle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#f2f2f2',
    padding: 10,
    borderRadius: 1,
    alignSelf: 'center'

  },
  closeModal: {
    marginTop: 20,
    marginBottom: 0
  },
  modalContent: {
    flex: 1
  }


});
