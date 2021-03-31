import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, View, Text, Dimensions } from 'react-native';
import light from '../config/Theme';

const { width, height } = Dimensions.get('screen');

export default function SubmitButton({title, onClick}) {
    return (
        <TouchableWithoutFeedback onPress={onClick}>
            <View style={styles.container}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        width: width-40,
        height:50,
        backgroundColor:'#FE870B',
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center',
        borderRadius:5,
        marginVertical:5,
        paddingHorizontal:20,
    },
    title:{
        fontSize:17,
        color:light.secondary,
        letterSpacing:1,
        fontWeight:'bold'
    }
});