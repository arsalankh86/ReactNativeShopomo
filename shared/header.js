import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { block } from 'react-native-reanimated';
import { Icon } from 'react-native-elements';

export default function Header({navigation}) {

    const handler = () => {
        navigation.openDrawer();
    }

    return (

        <View style={styles.header}>
            {/* <MaterialIcons name='menu' onPress={handler} size='28' style={styles.icon}></MaterialIcons> */}
            <Icon name='menu'  onPress={handler} size={38} style={styles.icon} />
            <View>
                <Text style={styles.headertext}> Shopomo Food Items</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    headertext: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333',
        letterSpacing: 1,
        justifyContent:'center',
        alignContent:'center'

    },

    header: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon: {
        position: 'absolute',
        left: 16
    }
});
