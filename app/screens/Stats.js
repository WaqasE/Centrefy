import React from 'react';
import {  StyleSheet,View, Text } from 'react-native';

export default function Stats()  {
    return  (
        <View style={styles.container}>
            <Text>Stats</Text>
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