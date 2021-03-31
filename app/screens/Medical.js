import React from 'react';
import {  StyleSheet,View, Text } from 'react-native';

export default function Medical()  {
    return  (
        <View style={styles.container}>
            <Text>Medical</Text>
        </View>
     );
}

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        justifyContent:'center',
        flex:1
    }
 });