import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Light from '../config/Theme';

export default function Input({ title, ...otherProps }) {
    return (
        <View style={styles.container}>
            <Text>{title}</Text>
            <TextInput {...otherProps} style={styles.textInput} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 80,
        justifyContent:'center',
        marginVertical:5,
        paddingHorizontal:20,
        overflow:'hidden'
    },
    title: {
        fontSize:15,
        color:Light.typo
    },
    textInput: {
        width:'100%',
        alignSelf:'center',
        marginTop:5,
        borderRadius:5,
        elevation:2,
        height:50,
        zIndex:1,
        paddingHorizontal:20,
        fontSize:17
    }
});