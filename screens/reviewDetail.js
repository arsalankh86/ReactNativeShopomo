import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


export default function ReviewDetail({navigation}) {
    return (

        <View >
            <Text> {navigation.getParam('name')} </Text>
            <Text> Price: {navigation.getParam('price')} </Text>
        </View>

    );
}

const styles = StyleSheet.create({

})
