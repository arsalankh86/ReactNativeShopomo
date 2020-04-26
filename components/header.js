import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


export default function Header() {
    return (

        <View style={styles.header}>
            <Text style={styles.title}>Best of Coffe</Text>
        </View>

    );
}

const styles = StyleSheet.create({

    header: {
        height: 80,
        padding: 80,
        backgroundColor: '#4882e0',
        width:500
        

    },
    title: {
        textAlign: "center",
        color: "white",
        fontSize: 38,
        fontWeight: "bold",
        paddingTop: 15

    }

})
