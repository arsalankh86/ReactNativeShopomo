import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, Button, Modal } from 'react-native';
import { Formik } from 'formik';
import { TextInput } from 'react-native-gesture-handler';

export default function Signup() {
    return (
        <View>
            <Formik initialValues={{ name: '', email: '', password: '' }}
                onSubmit={(values) => {

                    console.log(values);
                }}>
                {(props) => (
                    <View>
                        <TextInput
                            style={styles.input}
                            placeholder='Enter Name'
                            onChangeText={props.handleChange('name')}
                            value={props.values.name}
                        >
                        </TextInput>
                        <TextInput
                            style={styles.input}
                            placeholder='Enter Email'
                            onChangeText={props.handleChange('email')}
                            value={props.values.email}
                            keyboardType='email-address'
                        >
                        </TextInput>

                        <TextInput
                            style={styles.input}
                            placeholder='Enter Password'
                            onChangeText={props.handleChange('password')}
                            value={props.values.password}
                            secureTextEntry={true}
                            
                        >
                        </TextInput>

                        <Button title='Create' color='#eb4034' onPress={props.handleSubmit} ></Button>

                    </View>
                )}

            </Formik>

        </View>
    );
}

const styles = StyleSheet.create({

    container: {

    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        fontSize:18,
        borderRadius:6
    }

})